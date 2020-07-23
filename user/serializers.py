from rest_framework import serializers
from .models import CustomUser, UserData
from article.serializers import ChapterSerializer, ChapterDataSerializer
from rest_auth.serializers import UserDetailsSerializer, PasswordResetSerializer
from rest_framework.exceptions import AuthenticationFailed
from rest_auth.models import TokenModel
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode


class CustomTokenSerializer(serializers.ModelSerializer):
    user = UserDetailsSerializer(read_only=True)

    class Meta:
        model = TokenModel
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')
    chapters = ChapterSerializer(many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'chapters': {'required': False}}


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields: ['email']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


def create(self, validated_data):
    user = CustomUser.objects.create(
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password']
    )
    return user


class SocialSerializer(serializers.Serializer):
    provider = serializers.CharField(max_length=255, required=True)
    access_token = serializers.CharField(
        max_length=4096, required=True, trim_whitespace=True)


class UserDataSerializer(serializers.ModelSerializer):
    userId = serializers.ReadOnlyField(source='user.id')
    email = serializers.ReadOnlyField(source='user.email')
    joined = serializers.ReadOnlyField(source='user.date_joined')
    lastLogin = serializers.ReadOnlyField(source='user.last_login')
    username = serializers.ReadOnlyField(source='user.username')
    chapterdata = ChapterDataSerializer(
        source='chapterdata_set', many=True, read_only=True)

    class Meta:
        model = UserData
        fields = '__all__'

    def __str__(self):
        return self.username


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    class Meta:
        model: CustomUser


class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = CustomUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)

from rest_framework import serializers
from .models import CustomUser, UserData
from article.serializers import ChapterSerializer, ChapterDataSerializer
from rest_auth.serializers import UserDetailsSerializer
from rest_auth.models import TokenModel


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

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
        first_name=validated_data['first_name'],
        last_name=validated_data['last_name'],
        email=validated_data['email'],
        password=validated_data['password']
        )
    return user


class SocialSerializer(serializers.Serializer):
    provider = serializers.CharField(max_length=255, required=True)
    access_token = serializers.CharField(max_length=4096, required=True, trim_whitespace=True)


class UserDataSerializer(serializers.ModelSerializer):
    lastLogin = serializers.ReadOnlyField(source='user.lastLogin')
    userId = email = serializers.ReadOnlyField(source='user.id')
    email = serializers.ReadOnlyField(source='user.email')
    joined = serializers.ReadOnlyField(source='user.date_joined')
    username = serializers.ReadOnlyField(source='user.username')
    firstName = serializers.ReadOnlyField(source='user.first_name')
    lastName = serializers.ReadOnlyField(source='user.last_name')
    chapterdata = ChapterDataSerializer(source='chapterdata_set', many=True, read_only=True)

    class Meta:
        model = UserData
        fields = '__all__'

    def __str__(self):
        return self.username

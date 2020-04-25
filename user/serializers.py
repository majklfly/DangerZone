from rest_framework import serializers
from .models import CustomUser, Profile
from article.serializers import ChapterSerializer

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


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    username = serializers.ReadOnlyField(source='user.email')
    joined = serializers.ReadOnlyField(source='user.date_joined')
    last_login = serializers.ReadOnlyField(source='user.last_login')

    class Meta:
        model = Profile
        fields = '__all__'


class SocialSerializer(serializers.Serializer):
    provider = serializers.CharField(max_length=255, required=True)
    access_token = serializers.CharField(max_length=4096, required=True, trim_whitespace=True)

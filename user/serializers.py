from rest_framework import serializers
from .models import CustomUser
from article.serializers import ChapterSerializer

class UserSerializer(serializers.ModelSerializer):
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

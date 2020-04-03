from rest_framework import serializers
from .models import Article, Chapter, ChapterData, UserData

class ArticleSerializer(serializers.ModelSerializer):
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')

    class Meta:
        model = Article
        fields = '__all__'


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'


class ChapterDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChapterData
        fields = '__all__'


class UserDataSerializer(serializers.ModelSerializer):
    lastLogin = serializers.ReadOnlyField(source='user.lastLogin')
    email = serializers.ReadOnlyField(source='user.email')
    joined = serializers.ReadOnlyField(source='user.date_joined')
    username = serializers.ReadOnlyField(source='user.username')
    firstName = serializers.ReadOnlyField(source='user.first_name')
    lastName = serializers.ReadOnlyField(source='user.last_name')
    profileId = serializers.ReadOnlyField(source='user.profile.id')
    facebook = serializers.ReadOnlyField(source='user.profile.facebook')
    twitter = serializers.ReadOnlyField(source='user.profile.twitter')
    instagram = serializers.ReadOnlyField(source='user.profile.instagram')
    company = serializers.ReadOnlyField(source='user.profile.company')
    position = serializers.ReadOnlyField(source='user.profile.position')
    country = serializers.ReadOnlyField(source='user.profile.country')
    chapterdata = ChapterDataSerializer(source='chapterdata_set', many=True, read_only=True)

    class Meta:
        model = UserData
        fields = '__all__'

    def __str__(self):
        return self.username

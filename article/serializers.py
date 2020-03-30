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
    username = serializers.ReadOnlyField(source='user.username')
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')
    answeres = serializers.ReadOnlyField(source='chapterData.correct_answers')
    completed = serializers.ReadOnlyField(source='chapterData.completed')

    class Meta:
        model = UserData
        fields = '__all__'

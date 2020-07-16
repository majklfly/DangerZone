from rest_framework import serializers
from .models import Article, Chapter, ChapterData, UserData, WordOfTheDay

from quiz.serializers import QuizSerializer


class ArticleSerializer(serializers.ModelSerializer):
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')

    class Meta:
        model = Article
        fields = '__all__'


class ChapterSerializer(serializers.ModelSerializer):
    quiz = serializers.ReadOnlyField(source='quiz.id')
    articles = ArticleSerializer(
        source='article_set', many=True, read_only=True)

    class Meta:
        model = Chapter
        fields = '__all__'


class ChapterDataSerializer(serializers.ModelSerializer):
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')

    class Meta:
        model = ChapterData
        fields = '__all__'


class WordOfTheDaySerializer(serializers.ModelSerializer):

    class Meta:
        model = WordOfTheDay
        fields = '__all__'

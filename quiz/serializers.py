from rest_framework import serializers
from .models import Quiz, Question, Answer


class AnswerSerializer(serializers.ModelSerializer):
    chapterTitle = serializers.ReadOnlyField(source='chapter.title')

    class Meta:
        model = Answer
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(source='answer_set', many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(source='question_set', many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = '__all__'

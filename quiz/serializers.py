from rest_framework import serializers
from .models import Quiz, Question, Answer, QuizTakers, Response

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'


class QuizTakersSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizTakers
        fields = ['correct_answers', 'completed', 'user', 'quiz']


class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'

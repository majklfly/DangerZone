from rest_framework import generics
from braces.views import CsrfExemptMixin

from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer, ResponseSerializer
from .models import Quiz, Question, Answer, Response

class QuizView(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer


class QuestionView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerView(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class ResponseView(generics.ListCreateAPIView):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer

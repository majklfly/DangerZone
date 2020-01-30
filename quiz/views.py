from rest_framework import generics
from braces.views import CsrfExemptMixin

from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer, QuizTakersSerializer, ResponseSerializer
from .models import Quiz, Question, Answer, QuizTakers, Response

class QuizView(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer


class QuestionView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerView(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class QuizTakersView(CsrfExemptMixin, generics.ListCreateAPIView):
    queryset = QuizTakers.objects.all()
    serializer_class = QuizTakersSerializer


class ResponseView(generics.ListCreateAPIView):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer

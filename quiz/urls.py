from django.urls import path
from .views import QuizView, QuestionView, AnswerView, QuizDetailView

urlpatterns = [
    path('quiz/', QuizView.as_view()),
    path('quiz/<pk>/', QuizDetailView.as_view()),
    path('question/', QuestionView.as_view()),
    path('answer/', AnswerView.as_view()),
]

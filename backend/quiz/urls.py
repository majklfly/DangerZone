from django.urls import path
from .views import QuizView, QuestionView, AnswerView, QuizTakersView, ResponseView

urlpatterns = [
    path('quiz/', QuizView.as_view()),
    path('question/', QuestionView.as_view()),
    path('answer/', AnswerView.as_view()),
    path('quiztaker/', QuizTakersView.as_view()),
    path('ResponseView/', ResponseView.as_view()),
]

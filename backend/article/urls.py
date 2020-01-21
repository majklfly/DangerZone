from django.urls import path
from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]

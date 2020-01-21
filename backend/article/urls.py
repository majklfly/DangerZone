from django.urls import path
from .views import ArticleListView, ArticleDetailView, ChapterListView

urlpatterns = [
    path('chapters/', ChapterListView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]

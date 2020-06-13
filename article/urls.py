from django.urls import path
from .views import ArticleListView, ArticleDetailView, ChapterListView, ChapterDataListCreateView, ChapterDetailView

urlpatterns = [
    path('chapters/', ChapterListView.as_view()),
    path('chapters/<pk>/', ChapterDetailView.as_view()),
    path('chapterdata/', ChapterDataListCreateView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]

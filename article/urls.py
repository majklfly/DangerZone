from django.urls import path
from .views import ArticleListView, ArticleDetailView, ChapterListView, ChapterUserListCreateView, UserDataListCreateView

urlpatterns = [
    path('chapters/', ChapterListView.as_view()),
    path('chapteruser/', ChapterUserListCreateView.as_view()),
    path('userdata/', UserDataListCreateView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]

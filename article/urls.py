from django.urls import path
from .views import ArticleListView, ArticleDetailView, ChapterListView, ChapterDataListCreateView, UserDataListCreateView, UserDataDetailView

urlpatterns = [
    path('chapters/', ChapterListView.as_view()),
    path('chapterdata/', ChapterDataListCreateView.as_view()),
    path('userdata/', UserDataListCreateView.as_view()),
    path('userdata/<pk>/', UserDataDetailView.as_view()),
    path('articles/', ArticleListView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]

from rest_framework import generics

from .models import Article, Chapter, ChapterUser, UserData
from .serializers import ArticleSerializer, ChapterSerializer, ChapterUserSerializer, UserDataSerializer

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ChapterListView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterUserListCreateView(generics.ListCreateAPIView):
    queryset = ChapterUser.objects.all()
    serializer_class = ChapterUserSerializer

class UserDataListCreateView(generics.ListCreateAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer

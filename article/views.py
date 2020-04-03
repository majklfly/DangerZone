from rest_framework import generics

from .models import Article, Chapter, ChapterData, UserData
from .serializers import ArticleSerializer, ChapterSerializer, ChapterDataSerializer, UserDataSerializer

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ChapterListView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterDataListCreateView(generics.ListCreateAPIView):
    queryset = ChapterData.objects.all()
    serializer_class = ChapterDataSerializer

class UserDataListCreateView(generics.ListCreateAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer

class UserDataDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer

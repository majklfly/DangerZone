from rest_framework import generics

from .models import Article, Chapter
from .serializers import ArticleSerializer, ChapterSerializer

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ChapterListView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

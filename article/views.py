from rest_framework import generics

from .models import Article, Chapter, ChapterData, UserData
from .serializers import ArticleSerializer, ChapterSerializer, ChapterDataSerializer

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ChapterListView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterDetailView(generics.RetrieveAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterDataListCreateView(generics.ListCreateAPIView):
    queryset = ChapterData.objects.all()
    serializer_class = ChapterDataSerializer

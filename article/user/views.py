from src.models import CustomUser
from src.serializers import UserSerializer
from rest_framework import generics

class UserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

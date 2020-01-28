from .models import CustomUser
from .serializers import UserSerializer
from braces.views import CsrfExemptMixin
from rest_framework import generics

class UserListView(CsrfExemptMixin, generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

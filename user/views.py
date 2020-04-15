from .models import CustomUser, Profile
from .serializers import UserSerializer, ProfileSerializer
from braces.views import CsrfExemptMixin
from rest_framework import generics

class UserListView(CsrfExemptMixin, generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class UserDetailView(CsrfExemptMixin, generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class ProfileListUpdateView(CsrfExemptMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

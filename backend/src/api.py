from rest_framework import generics, permissions, status
from knox.models import AuthToken
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.response import Response

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer


    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "token": AuthToken.objects.create(user)[1]
                })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

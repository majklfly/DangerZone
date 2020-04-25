from .models import CustomUser, Profile
from .serializers import UserSerializer, ProfileSerializer, SocialSerializer
from rest_framework.response import Response
from braces.views import CsrfExemptMixin
from rest_framework import generics, permissions, status, views
from rest_framework_jwt.settings import api_settings
from django.http import JsonResponse
from requests.exceptions import HTTPError
from social_django.utils import load_strategy, load_backend
from social_core.backends.oauth import BaseOAuth2
from social_core.exceptions import MissingBackend, AuthTokenError, AuthForbidden

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class UserListView(CsrfExemptMixin, generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class ProfileListUpdateView(CsrfExemptMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SocialLoginView(generics.GenericAPIView):
    """Log in using facebook"""
    serializer_class = SocialSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """Authenticate user through the provider and access_token"""
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        provider = serializer.data.get('provider', None)
        strategy = load_strategy(request)

        try:
            backend = load_backend(strategy=strategy, name=provider,
            redirect_uri=None)

        except MissingBackend:
            return Response({'error': 'Please provide a valid provider'},
            status=status.HTTP_400_BAD_REQUEST)
        try:
            if isinstance(backend, BaseOAuth2):
                access_token = serializer.data.get('access_token')
            user = backend.do_auth(access_token)
        except HTTPError as error:
            return Response({
                "error": {
                    "access_token": "Invalid token",
                    "details": str(error)
                }
            }, status=status.HTTP_400_BAD_REQUEST)
        except AuthTokenError as error:
            return Response({
                "error": "Invalid credentials",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            authenticated_user = backend.do_auth(access_token, user=user)

        except HTTPError as error:
            return Response({
                "error":"invalid token",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)

        except AuthForbidden as error:
            return Response({
                "error":"invalid token",
                "details": str(error)
            }, status=status.HTTP_400_BAD_REQUEST)

        if authenticated_user and authenticated_user.is_active:
			#generate JWT token
            data={
                "token": jwt_encode_handler(
                    jwt_payload_handler(user)
                )}
			#customize the response to your needs
            response = {
                "id": authenticated_user.id,
                "email": authenticated_user.email,
                "username": authenticated_user.username,
                "firstName": authenticated_user.first_name,
                "lastName": authenticated_user.last_name,
                "token": data.get('token')
            }
            return Response(status=status.HTTP_200_OK, data=response)

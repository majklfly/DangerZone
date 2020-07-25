from django.urls import path, include, re_path
from knox import views as knox_views
from django.views.generic import TemplateView

from . import views
from .api import RegisterAPI

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration', include('rest_auth.registration.urls')),
    path('users/', views.UserListView.as_view()),
    path('userdata/', views.UserDataListCreateView.as_view()),
    path('userdata/<pk>/', views.UserDataDetailView.as_view()),
    path('social/', views.SocialLoginView.as_view()),
    path('api/auth/', include('knox.urls')),
    path('api/auth/register/', RegisterAPI.as_view()),
    path('api/change-password/', views.ChangePasswordView.as_view(),
         name='change-password'),
    path('request-reset-email/', views.RequestPasswordResetEmail.as_view(),
         name='request-reset-email'),
    path('password-reset/<uidb64>/<token>/',
         views.PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete/', views.SetNewPasswordAPIView.as_view(),
         name="password-reset-complete"),
]

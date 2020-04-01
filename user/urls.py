from django.urls import path, include
from knox import views as knox_views

from . import views
from .api import RegisterAPI

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls') ),
    path('rest-auth/registration', include('rest_auth.registration.urls')),
    path('users/', views.UserListView.as_view()),
    path('profile/', views.ProfileListUpdateView.as_view()),
    path('api/auth/', include('knox.urls')),
    path('api/auth/register/', RegisterAPI.as_view()),
]

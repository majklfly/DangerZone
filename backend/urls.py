from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('nested_admin/', include('nested_admin.urls')),
    path('', include('user.urls')),
    path('', include('quiz.urls')),
    path('', include('article.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/auth/oauth/', include('rest_framework_social_oauth2.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]

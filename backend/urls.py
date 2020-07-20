from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('nested_admin/', include('nested_admin.urls')),
    path('', include('user.urls')),
    path('', include('quiz.urls')),
    path('', include('article.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/auth/oauth/', include('rest_framework_social_oauth2.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

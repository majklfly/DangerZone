from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('nested_admin/', include('nested_admin.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('', include('user.urls')),
    path('', include('quiz.urls')),
    path('', include('article.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/auth/oauth/', include('rest_framework_social_oauth2.urls')),
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^', include('django.contrib.auth.urls')),
    re_path(r'.*', TemplateView.as_view(template_name='index.html')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

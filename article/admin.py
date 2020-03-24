from django.contrib import admin
from .models import *

admin.site.site_header = 'DangerZone'

class SnippetAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

admin.site.register(Chapter)
admin.site.register(Article, SnippetAdmin)

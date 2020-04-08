from django.contrib import admin
from .models import *

admin.site.site_header = 'DangerZone'

class SnippetAdmin(admin.ModelAdmin):
    list_display = ('name', 'chapter', 'description')

admin.site.register(Chapter)
admin.site.register(Article, SnippetAdmin)
admin.site.register(ChapterData)
admin.site.register(UserData)

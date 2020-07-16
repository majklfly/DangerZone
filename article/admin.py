from django.contrib import admin
from .models import *

admin.site.site_header = 'DangerZone'


class SnippetAdmin(admin.ModelAdmin):
    list_display = ('name', 'chapter', 'description', 'id')


class SnippetChapter(admin.ModelAdmin):
    list_display = ('chapter', 'user', 'correct_answers',
                    'completed', 'timestamp')


admin.site.register(Chapter)
admin.site.register(Article, SnippetAdmin)
admin.site.register(ChapterData, SnippetChapter)
admin.site.register(UserData)
admin.site.register(WordOfTheDay)

from django.db import models
from user.models import CustomUser, UserData
from django.db.models.signals import m2m_changed
from django.dispatch import receiver


class Chapter(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=100, default=' ')

    def __str__(self):
        return self.title


class ChapterData(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    correct_answers = models.IntegerField(default=0)
    userData = models.ForeignKey(UserData, on_delete=models.CASCADE, null=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['-timestamp', ]

    def __str__(self):
        return self.chapter.title


def upload_path(instance, filename):
    return '/'.join(['articles', filename])


class Article(models.Model):
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000, default=' ')
    content = models.TextField(max_length=10000)
    line1 = models.CharField(max_length=1000, null=True, blank=True)
    line2 = models.CharField(max_length=1000, null=True, blank=True)
    line3 = models.CharField(max_length=1000, null=True, blank=True)
    line4 = models.CharField(max_length=1000, null=True, blank=True)
    line5 = models.CharField(max_length=1000, null=True, blank=True)
    line6 = models.CharField(max_length=1000, null=True, blank=True)
    line7 = models.CharField(max_length=1000, null=True, blank=True)
    line8 = models.CharField(max_length=1000, null=True, blank=True)
    line9 = models.CharField(max_length=1000, null=True, blank=True)
    line10 = models.CharField(max_length=1000, null=True, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to=upload_path)
    created = models.DateTimeField(auto_now_add=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['created', ]

    def __str__(self):
        return self.name

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.CharField(max_length=100)
    chapters = models.ManyToManyField('article.Chapter', through='article.ChapterUser')

    def __str__(self):
        return self.username

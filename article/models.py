from django.db import models
from user.models import CustomUser

class Chapter(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=100, default=' ')
    users = models.ManyToManyField('user.CustomUser', through='ChapterData', null=True)

    def __str__(self):
        return self.title


class Article(models.Model):
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000, default=' ')
    content = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.name


class ChapterData(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    correct_answers = models.IntegerField(default=0)

    class Meta:
        ordering = ['-timestamp',]

    def __str__(self):
        return self.chapter.title + ';  account:  ' + self.user.username


class UserData(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, null=True)
    chapterData = models.ForeignKey(ChapterData, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['-chapter',]

    def __str__(self):
        return self.user.username

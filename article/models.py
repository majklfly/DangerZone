from django.db import models

class Chapter(models.Model):
    title = models.CharField(max_length=500)
    description = models.CharField(max_length=100, default=' ')

    def __str__(self):
        return self.title


class Article(models.Model):
    name = models.CharField(max_length=1000)
    content = models.TextField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.name

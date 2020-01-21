from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=1000)
    content = models.CharField(max_length=10000)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.name

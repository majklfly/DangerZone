from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from article.models import Chapter

from user.models import CustomUser

class Quiz(models.Model):
    name = models.CharField(max_length=1000)
    questions_count = models.IntegerField(default=0)
    description = models.CharField(max_length=70)
    created = models.DateTimeField(auto_now_add=True)
    roll_out = models.BooleanField(default=False)
    chapter = models.OneToOneField(Chapter, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        ordering = ['created',]

    def __str__(self):
        return self.name


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    label = models.CharField(max_length=1000)
    order = models.IntegerField(default=0)


    def __str__(self):
        return self.label


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=1000)
    is_correct = models.BooleanField(default=False)


    def __str__(self):
        return self.text


@receiver(post_save, sender=Quiz)
def set_default_quiz(sender, instance, created, **kwargs):
    quiz = Quiz.objects.filter(id=instance.id)
    quiz.update(questions_count=instance.question_set.filter(quiz=instance.pk).count())

@receiver(post_save, sender=Question)
def set_default(sender, instance, created, **kwargs):
    quiz = Quiz.objects.filter(id=instance.quiz.id)
    quiz.update(questions_count=instance.quiz.question_set.filter(quiz=instance.quiz.pk).count())

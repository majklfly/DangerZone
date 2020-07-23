from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail


class CustomUser(AbstractUser):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class UserData(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    firstName = models.CharField(max_length=200, default=' ')
    lastName = models.CharField(max_length=200, default=' ')
    company = models.CharField(max_length=200, default=' ')
    position = models.CharField(max_length=200, default=' ')
    country = models.CharField(max_length=200, default=' ')
    facebook = models.CharField(max_length=200, default=' ')
    twitter = models.CharField(max_length=200, default=' ')
    instagram = models.CharField(max_length=200, default=' ')
    reddit = models.CharField(max_length=200, default=' ')

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=CustomUser)
def create_userdata(sender, instance, created, **kwargs):

    if created:
        UserData.objects.create(user=instance)


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(
        reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="DangerZone"),
        # message:
        email_plaintext_message,
        # from:
        "donotreplay@dangerzone.com",
        # to:
        [reset_password_token.user.email]
    )

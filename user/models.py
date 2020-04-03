from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class CustomUser(AbstractUser):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, blank=True, null=True)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    company = models.CharField(max_length=200, null=True, blank=True)
    position = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    facebook = models.CharField(max_length=200, null=True, blank=True)
    twitter = models.CharField(max_length=200, null=True, blank=True)
    instagram = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.user.username

@receiver(post_save, sender=CustomUser)
def create_profile(sender,instance, created, **kwargs):

    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=CustomUser)
def update_profile(sender, instance, created, **kwargs):

    if created == False:
        instance.profile.save()

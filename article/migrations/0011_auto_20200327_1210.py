# Generated by Django 2.1.15 on 2020-03-27 12:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('article', '0010_userdata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdata',
            name='chapterUser',
        ),
        migrations.AddField(
            model_name='userdata',
            name='chapter',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='article.Chapter'),
        ),
        migrations.AddField(
            model_name='userdata',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

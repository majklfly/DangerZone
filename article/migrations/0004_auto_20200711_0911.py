# Generated by Django 2.1.15 on 2020-07-11 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_article_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.TextField(blank=True, max_length=10000, null=True),
        ),
    ]

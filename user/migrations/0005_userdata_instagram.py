# Generated by Django 2.1.15 on 2020-06-19 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20200619_0903'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdata',
            name='instagram',
            field=models.CharField(default=' ', max_length=200),
        ),
    ]

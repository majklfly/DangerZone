# Generated by Django 2.1.15 on 2020-06-16 06:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user',
            new_name='userData',
        ),
    ]

# Generated by Django 2.1.15 on 2020-07-23 08:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0005_auto_20200716_0902'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['created']},
        ),
    ]

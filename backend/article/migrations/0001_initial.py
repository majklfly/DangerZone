# Generated by Django 3.0.2 on 2020-01-21 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1000)),
                ('content', models.CharField(max_length=10000)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]

# Generated by Django 4.1.2 on 2022-12-14 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0007_alter_comment_article"),
    ]

    operations = [
        migrations.AddField(
            model_name="article",
            name="photos",
            field=models.ImageField(blank=True, null=True, upload_to="photos"),
        ),
    ]

# Generated by Django 4.1.2 on 2022-12-13 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0005_alter_article_author"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="article",
            field=models.ForeignKey(
                blank=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="articles.article",
            ),
        ),
    ]

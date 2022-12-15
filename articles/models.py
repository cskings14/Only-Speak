from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# these are the article and comment models
# the title/content/description models are similar in that they all use text
# created/updated at are all dates that wont be changed
# author is the user who created the article/comment
# photos is basically a link to the google cloud storage. The input is a photo and the output is a link to photo in google cloud storage
class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, default='')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    photos = models.ImageField(upload_to='photos', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'articles'
        ordering = ['-created_at']

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

   

    def __str__(self):
        return self.content

    class Meta:
        db_table = 'comments'
        ordering = ['-created_at']
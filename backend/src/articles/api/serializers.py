from rest_framework import serializers
from articles.models import Article, Comment
from django.contrib.auth.models import User




class ArticleSerializer(serializers.ModelSerializer):
    # author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
   
    class Meta:
        model = Article
        fields = ('author', 'id', 'title', 'content', 'description', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')
        depth = 1


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    article = serializers.SlugRelatedField(queryset=Article.objects.all(), slug_field='id')
    class Meta:
        model = Comment
        fields = ('author','id', 'article', 'content', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at', 'article')
        depth = 1
        # depth = 1 means that the serializer will include the article object.
        # depth = 2 means that the serializer will include the article object and the article object's author.
        # depth = 3 means that the serializer will include the article object and the article object's author and the article object's author's profile.
        # depth = 4 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address.
        # depth = 5 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address and the article object's author's profile's address's city.
        # depth = 6 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address and the article object's author's profile's address's city and the article object's author's profile's address's city's country.
        # depth = 7 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address and the article object's author's profile's address's city and the article object's author's profile's address's city's country.
        # depth = 8 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address and the article object's author's profile's address's city and the article object's author's profile's address's city's country.
        # depth = 9 means that the serializer will include the article object and the article object's author and the article object's author's profile and the article object's author's profile's address and the article object's author's profile's address's city and the article object's author's profile's address's city's country.
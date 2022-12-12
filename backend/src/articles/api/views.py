
from rest_framework import viewsets

from articles.models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# @api_view(['GET'])
# def getRoutes(request):
#     routes = [
#         '/api/token',
#         '/api/token/refresh',
#     ]
#     return Response(routes)

class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    # def form_valid(self, form):
    #     article = form.save(commit=False)
    #     article.author = self.request.user
    #     #article.save()  # This is redundant, see comments.
    #     return super(ArticleViewSet, self).form_valid(form)
    



# class CommentViewSet(viewsets.ModelViewSet):
#     """
#     A viewset for viewing and editing user instances.
#     """
#     serializer_class = CommentSerializer
#     queryset = Comment.objects.all()



from rest_framework.generics import (ListAPIView,
ListCreateAPIView,
DestroyAPIView,
UpdateAPIView)

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

# class ArticleCreateView(ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
#     # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.






class CommentListView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

class CommentCreateView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

class CommentUpdateView(UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.

class CommentDeleteView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # The serializer_class attribute is used to specify the serializer class that will be used to serialize the queryset.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is sent to the server.
    # The serializer_class attribute is also used to specify the serializer class that will be used to deserialize the data that is received from the server.
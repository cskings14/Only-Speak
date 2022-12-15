
from rest_framework import viewsets

from articles.models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# this is how we are able to interact with the info we obtain 
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

# class CommentViewSet(viewsets.ModelViewSet):
#     """
#     A viewset for viewing and editing user instances.
#     """
#     serializer_class = CommentSerializer
#     queryset = Article.objects.all()

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

# class CommentViewSet(viewsets.ModelViewSet):
#     """
#     A viewset for viewing and editing user instances.
#     """
#     serializer_class = CommentSerializer
#     queryset = Comment.objects.all()



# from rest_framework.generics import (ListAPIView,
# ListCreateAPIView,
# DestroyAPIView,
# UpdateAPIView)


# class CommentListView(ListAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class CommentCreateView(ListCreateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class CommentUpdateView(UpdateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

# class CommentDeleteView(DestroyAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer

from django.urls import path, include
from . import views
from articles.api.views import ArticleViewSet, CommentListView, CommentCreateView, CommentUpdateView, CommentDeleteView
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register('', ArticleViewSet, basename='articles')

# urlpatterns = router.urls

urlpatterns = [
    path('articles/', include(router.urls)),
    # path('', views.getRoutes),
    path('articles/<int:pk>/comments/', CommentListView.as_view()),
    path('articles/<int:pk>/comments/create/', CommentCreateView.as_view()),
    path('articles/<int:pk>/comments/<int:comment_pk>/update/', CommentUpdateView.as_view()),
    path('articles/<int:pk>/comments/<int:comment_pk>/delete/', CommentDeleteView.as_view()),
    
]

# from .views import (
#     ArticleListView, 
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView, 
#     CommentListView,
#     CommentCreateView,
#     CommentUpdateView,
#     CommentDeleteView
#     )

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<int:pk>/', ArticleDetailView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<int:pk>/update/', ArticleUpdateView.as_view()),
#     path('<int:pk>/delete/', ArticleDeleteView.as_view()),
#     path('<int:pk>/comments/', CommentListView.as_view()),
#     path('<int:pk>/comments/create/', CommentCreateView.as_view()),
#     path('<int:pk>/comments/<int:comment_pk>/update/', CommentUpdateView.as_view()),
#     path('<int:pk>/comments/<int:comment_pk>/delete/', CommentDeleteView.as_view()),
# ]
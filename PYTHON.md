# Django/Python Readme file for more information

*​Note: this is just how I started the django side of the project. Several Changes have been made...*

### 1) Dependencies
To run the backend in a local server we are going to need some dependencies. Below is the list of dependencies. Note that these are not all of the dependencies, but the rest were only used for the heroku server which is already available. __These packages will be talked about when going over starting from scratch.__

1.  Python. We will first need python which is the programming language for the django backend framework. Go to [Python Downloader](https://www.python.org/downloads/) and download the latest version for your designated os. 

2. Django. Django is the backend framework that we are using. To download it, put __python -m pip install Django__ into your terminal.

3. Django Rest Framework. This is a powerful web toolkit which allows us to build web APIs for Django. This is how we can go to /api/articles/ in our heroku server. To install this tool, put __pip install djangorestframework__ into your terminal. 

4. Cors. Cors or Django Cors Headers is a package that allows other domains to get and send data. This is how the frontend from a local server will be able to get/send articles. To download Cors, put __python -m pip install django-cors-headers__ into your terminal. 


​
### 2) Files And Their Meanings
Now, let's go over the important files that will be used, edited, and added over the next phases.

* requirements.txt - This is the file that heroku uses in order to install the necessary packages to run the backend framework.

* Procfile - This file is mainly used to add gunicorn in the heroku server. Gunicorn is used to run multiple python files at the same time. Django in the local server does this naturally but heroku needs this package in order to run.

* manage.py - This file is very important. It doesn't have much meaning by just reading it. It is used for various commands for django. For example, to commit changes to the database, you need to do __python manage.py makemigrations__ and then __python manage.py migrate__. To run the server locally, run __python manage.py runserver__. To make a new app folder, run __python manage.py startapp (appname)__. These are some of many commands that make django very powerful. 

* 
  App Folders - The current app folders are __articles__ and __onlyspeak__. The onlyspeak folder is the main app folder for our django project. You can tell it is the main app for multiple reasons. In the folder, you can view __settings.py__. This is a very important file which is only in the main app folder. In this file, we add packages into our install apps. When making a new app folder, the name of the app folder has to be put in the installed apps. That is also true for packages like rest_framework for django rest framework or django-cors-headers for cors. Additionally, we also have settings for our packages inside this folder. For example, we have permission settings for the django rest framework inside the settings file. 

  The __articles__ apps folder is the main folder for our article functionality inside the django backend framework. One very important file is the __models.py__ file. Think of models in python as higher level object oriented programming. In this file, we have our __Article class__. In our article class, we can see some of the needed parameters for a __article object__. For example, every article has a title, description, content, etc. Make sure to look at the different classes used for the parameter. For example, the __TextField__ class is exactly what you would expect. It allows text to be inputed into the variable which is then added to the database once the article object is sent. 

  Now, Let's look at the __admin.py file inside the articles folder__. This file allows the /admin/ part of our heroku website to edit/delete/create articles.

  The __api__ folder is the main folder for functionality of the __django rest framework__. In this folder, we have __serializers.py__. This file is the way we implement the api. The reason we can add a title in the api is due to the title field in fields in the class meta for the ArticleSerializer. The reason we can click on the author field instead of inputing an author is due to the code: __author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')__. Another big part of the api folder is the __views.py__ file. The ArticleViewSet is what allows the api to be able to create/update/delete/view a article object. The __urls.py__ file is important for both app folders. This is what allows us to go to __api/__ and __api/articles/__ in our heroku website. 

* media - In our article model, we have the image parameter which allows for a article object to include a picture. The media file holds all of the picture. The database holds pointers to the media file. The media file doesn't have to be changed locally at all. 

There are of course other files throughout the backend but they are less important. You should still look through these files and try to get an understanding for yourself. 

### 3) Starting From Scratch

## BASIC STARTUP

1. Let's start with installing dependencies
- Install the dependencies from the first section

2. Creating the app structure
- create the app structure first by typing __django-admin startproject onlyspeak__ into the terminal
- create a new app folder for articles by typing __python manage.py startapp articles__

3. Add to settings.py
- add this to the installed apps inside settings.py
```
'articles',
'onlyspeak',
'rest_framework',
'corsheaders',
``` 
- This will allow the program to implement features in the articles app folder as well as the onlyspeak app folder. The django rest framework is also being added to be used inside the api folder of articles / the authentication folder later down the road. Corsheaders is also being added so that the flutter side and web frontend can send requests to the api.

- Next, we will add to the middleware. To be able to use corsheaders. we have to add the following into our middleware in settings.py.
```
"corsheaders.middleware.CorsMiddleware",
```

- To be able to add pictures into a Article model, we will need a folder to hold the image files so that the model object can point to its image. To do this, we will add the following to settings.py

```
MEDIA_ROOt = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```
- This will make a media folder in the base directory which holds pictures and then the urls in the urls.py will be able to get the files for /media/

- The last part of this phase is to add the following to settings.py

```
CORS_ALLOW_ALL_ORIGINS = True
```
- This will allow the programmers on other machines to send requests without being blocked. This will later be removed for security purposes.

## CREATING THE ARTICLE MODEL

- To start, let's look at the models.py file inside the articles app folder. We will add the following.

```
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, default='')
    content = models.TextField(max_length=2000, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True, upload_to="images/")

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'articles'
        ordering = ['-created_at']
```
- What does this do? It does a lot. An Article model is being created. This article model will be added into the database after we run python manage.py makemigrations and then and then python manage.py migrate. This model includes a title with a max length of 100 characters, a description with a max length of 500 characters, and content with a max length of 2000 characters. There is then a created and updated article item which is automatically added to the database when an article model is created. There is an author tag which is pretty much a pointer to a User object. Then, there is an image field in which a user could input an image. This will add the image to the media folder which we have previously created and the image item on the article model will be a location for thhe image. The def ____str____ just returns a title of the article object and the class meta just has the database table name as articles and the ordering of the article is first at the top and older articles at the bottom. 

- Now let's go to admin.py in the articles folder. We will now add the following so that the admin user can engage with articles.

```
from django.contrib import admin

# Register your models here.
from .models import Article
admin.site.register(Article)
```

## CREATING THE API

- To start, let's create a folder for the api inside articles. We then have to add 4 .py files. We have to create __init__.py which will be blank (we just need the init.py file so that the rest of the files can run), serializers.py, urls.py, and views.py. 

- Let's talk about serializers.py. A serializer in django is responsible for changing the model data into data types that are understandable by javascript/frontend frameworks. This is how we will be able to send JSON data to the api and get JSON data. We have to add the following to the file.

```
from rest_framework import serializers
from articles.models import Article
from django.contrib.auth.models import User




class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='username')
    image = serializers.ImageField(required=False)
   
    class Meta:
        model = Article
        fields = ( 'author', 'id', 'title','description', 'content', 'image', 'created_at', 'updated_at')
        read_only_fields = ('created_at', 'updated_at')
        depth = 1



```

- The will make a article serializer for the article model. The author variable will be used to be able to send a user by having their username. The image variable will allow the client side to send pictures which will be sent to the media folder. The Meta class is responsible for setting all of the fields that can be seen/used in the api. The read_only_fields stops the api from being able to change the created and updated data points. The depth is responsible for how much information we are allowed to see. Depth equalling 1 just means that we see the basic amount of info.

- Let's now take a look at the views.py file. Inside this file, add the following. 

```

from rest_framework import viewsets

from articles.models import Article
from .serializers import ArticleSerializer



class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

 
```

- This imports the viewsets class from the django rest framework. This viewset states what we are able to do with the api. With this specific viewset, we can do all of the needed api requests like article to send an article object, put to update an article object, get to get 1 or more article objects, delete to delete an article object, etc. 

- Now, let's talk about urls.py. This is where we specify routes. In this file, we will add the following.

```
from django.urls import path, include
from . import views
from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register('', ArticleViewSet, basename='articles')



urlpatterns = [
    path('articles/', include(router.urls)),
    
]


```

- This will add an article route which is the api that has the views from articleviewset.

- We now have to add more to the onlyspeak folder. Go to urls.py inside the onlyspeak folder and add the following. 
```
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('articles.api.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

```

- This will add a route for the api. When we want to work with articles, this is why we go to api/articles. When we create different models like a comment model for example, the routes would like api/comments. We also have admin/ for the admin page. The + static is so that the user can input images and it will be sent to the media folder. 

- Now, let's go back to settings.py in the onlyspeak folder. We will add the following to it.

```
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],

}
```

- This adds permissions to the django rest framework. For right now, anyone can use the api (as long as they can get into the depoloyment). This will later change once we deploy the full project. 

## DEPLOYING TO HEROKU

- I pretty much did [this](https://www.youtube.com/watch?v=HgDEFnMV16k&t=878s&ab_channel=LegionScript) tutorial line for line. Note, this is how I did the heroku deployment.


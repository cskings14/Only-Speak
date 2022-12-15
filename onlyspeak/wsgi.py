"""
WSGI config for onlyspeak project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

import os
from whitenoise.django import DjangoWhiteNoise
from pathlib import Path
from whitenoise import WhiteNoise

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'onlyspeak.settings')

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
BASE_DIR = Path(__file__).resolve().parent.parent
application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'build/static'))
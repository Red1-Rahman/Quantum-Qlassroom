# Import necessary modules
from pathlib import Path

# Define the base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# ...existing code...

# Add allowed hosts
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

# Add installed apps
INSTALLED_APPS = [
    # ...existing apps...
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'quantum_api',  # Add your app here
    'corsheaders',
]

# Configure the database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Enable debug mode for development
DEBUG = True

# Static files configuration
STATIC_URL = '/static/'

# REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
}

# CORS settings
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ...existing code...
]

CORS_ALLOW_ALL_ORIGINS = True  # Only for development

# ...existing code...
#!/bin/sh
python manage.py migrate --noinput
gunicorn config.wsgi:application --bind 0.0.0.0:8000
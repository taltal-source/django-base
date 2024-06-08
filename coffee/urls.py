from django.urls import path
from coffee.views.index import IndexView

app_name = "coffee"

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
]

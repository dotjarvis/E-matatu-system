from django.shortcuts import render

from .firebase_config import firebaseConfig
import pyrebase

firebase = pyrebase.initialize_app(firebaseConfig)

# Create your views here.
auth = firebase.auth()


def signin(request):
    return render(request, 'matatu/signin.html')

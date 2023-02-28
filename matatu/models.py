import datetime
from django.db import models


# Create your models here.

class Role(models.Model):
    CATEGORY = (
        ('Owner', 'Owner'),
        ('Driver', 'Driver'),
        ('Conductor', 'Conductor'),
    )
    role = models.CharField(max_length=200, null=True, choices=CATEGORY)
    date_created = models.DateTimeField(auto_now_add=True, default=datetime.datetime.now())

    def __str__(self):
        return self.role


class Person(models.Model):
    GENDER = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Prefer not to say', 'Prefer not to say'),
    )

    id_number = models.IntegerField(unique=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    DOB = models.DateTimeField()
    gender = models.CharField(max_length=200, choices=GENDER)
    email = models.CharField(max_length=200, unique=True)
    phone_number = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    Role_ID = models.ForeignKey(Role, default=1, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.first_name


class Route(models.Model):
    route_name = models.CharField(max_length=1000, null=True)
    distance_in_km = models.FloatField(max_length=15)
    price = models.FloatField(max_length=15)
    date_created = models.DateTimeField(auto_now_add=True, default=datetime.datetime.now())

    def __str__(self):
        return self.route_name


class Vehicle(models.Model):
    CAPACITY = (
        ('11', '11'),
        ('14', '14'),
    )
    person = models.ForeignKey(Person, null=True, on_delete=models.SET_NULL)
    route = models.ForeignKey(Route, null=True, on_delete=models.SET_NULL)

    reg_no = models.CharField(max_length=30, unique=True)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=30)
    sacco = models.CharField(max_length=30, null=True)
    seat_capacity = models.CharField(max_length=30, choices=CAPACITY)
    date_created = models.DateTimeField(auto_now_add=True, default=datetime.datetime.now())

    def __str__(self):
        return self.reg_no


class Activity(models.Model):
    STATUS = (
        ('Full', 'Full'),
        ('Chance', 'Chance'),
    )

    vehicle = models.ForeignKey(Vehicle, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    direction = models.CharField(max_length=1000, null=True)

    price = models.models.FloatField(max_length=15)
    status = models.CharField(max_length=30, choices=STATUS)

    def __str__(self):
        return self.name


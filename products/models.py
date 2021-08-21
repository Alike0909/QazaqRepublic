from django.db import models
from datetime import datetime
from jsonfield import JSONField

# Create your models here.

class Type(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    feature = models.CharField(max_length=30)
    types = models.ForeignKey("Type", on_delete=models.CASCADE)
    price = models.IntegerField(default=0)
    amount = models.IntegerField(default=0)

    def __str__(self):
        return "{} {}".format(self.name, self.feature)

class Image(models.Model):
    name = models.CharField(max_length=255)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True, upload_to='images/')

    def __str__(self):
        return self.name

class Review(models.Model):
    review_input = models.CharField(max_length=600)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    date = models.DateTimeField(default=datetime.now())
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return "{} {}".format(self.name, self.surname)

class Cart(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    date = models.DateTimeField(default=datetime.now())
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone = models.IntegerField(default=0)
    email = models.CharField(max_length=255)
    payment = models.CharField(max_length=255)
    total = models.IntegerField(default=0)
    arrive = models.CharField(max_length=500)
    product = JSONField()
    done = models.BooleanField(default=0)

    def __str__(self):
        return "{} {}".format(self.name, self.surname)

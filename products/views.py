from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect
from datetime import date
from .models import *
from .forms import *
from .tests import *
import json
import ast
# Create your views here.

def home_page(request):

    objects = []
    products = Product.objects.all()
    photos = Image.objects.all()
    for product in products:
        id = product.id
        photo = photos.filter(product=id).first()
        objects.append([product, photo.image])

    context = {
        "objects" : objects,
    }
    
    return render(request, "products/home_page.html", context)

def login(request):

    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            redirect('products/dashboard.html')
    else:
        form = AuthenticationForm()

    context = {
        "form" : form,
    }

    return render(request, "products/login.html", context)

def dashboard(request):

    totalMoneyArray = []
    carts = Cart.objects.all()
    for i in carts:
        totalMoneyArray.append(i.total)
    totalMoney = sum(totalMoneyArray)

    today = date.today()
    todayMoneyArray = []
    today_cart =  Cart.objects.filter(date__year=today.year,
                                       date__month=today.month,
                                       date__day=today.day)
    for i in today_cart:
        todayMoneyArray.append(i.total)
    todayMoney = sum(todayMoneyArray)

    clients = len(carts)
    clientsToday = len(today_cart)

    reviews = len(Review.objects.all())

    customers = Cart.objects.filter(done=0)
    objects = []
    for customer in customers:
        objects.append([customer.id, customer.product])

    if request.method == "POST":
        customerId = request.POST.get("customer-id")
        customer = Cart.objects.filter(id=customerId).update(done=1)
    
    context = {
        "today" : today,
        "totalMoney" : totalMoney,
        "todayMoney" : todayMoney,
        "clients" : clients,
        "clientsToday" : clientsToday,
        "reviews" : reviews,
        "customers" : customers,
        "objects": objects,
    }

    return render(request, "products/dashboard.html", context)

def kiim(request):

    objects = []
    products = Product.objects.filter(types__name="Одежда")
    photos = Image.objects.all()
    for product in products:
        id = product.id
        photo_first = photos.filter(product=id).first()
        photo_last = photos.filter(product=id).last()
        objects.append([product, photo_first.image, photo_last.image])

    context = {
        "objects" : objects,
    }

    return render(request, "products/kiim.html", context)

def syvenir(request):

    objects = []
    products = Product.objects.filter(types__name="Сувенир")
    photos = Image.objects.all()
    for product in products:
        id = product.id
        photo_first = photos.filter(product=id).first()
        photo_last = photos.filter(product=id).last()
        objects.append([product, photo_first.image, photo_last.image])

    context = {
        "objects" : objects,
    }

    return render(request, "products/syvenir.html", context)

def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    photos = Image.objects.filter(product=pk)
    if str(product.types) == "Одежда":
        is_size = 1
    else:
        is_size = 0

    if request.method == 'POST':
        review_input = request.POST.get('review-input')
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        review = Review(
            review_input='{}'.format(review_input),
            name='{}'.format(name),
            surname='{}'.format(surname),
            product=product,
        )
        review.save()
        return HttpResponseRedirect(request.path_info)

    reviews = Review.objects.filter(product=pk)
    reviewsLen = len(reviews)

    context = {
        "product" : product,
        "photos" : photos,
        "is_size" : is_size,
        "reviews" : reviews,
        "reviewsLen" : reviewsLen,
    }
    return render(request, "products/product_detail.html", context)

def cart(request):
    
    context = {}

    return render(request, "products/cart.html", context)

def billing(request):

    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        city = request.POST.get('city')
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        payment = request.POST.get('payment')
        total = request.POST.get('total')
        arrive = request.POST.get('arrive')
        product = request.POST.get('product')
        print(product)
        cart = Cart(
            name='{}'.format(name),
            surname='{}'.format(surname),
            city='{}'.format(city),
            address='{}'.format(address),
            phone='{}'.format(phone),
            email='{}'.format(email),
            payment='{}'.format(payment),
            total='{}'.format(total),
            arrive='{}'.format(arrive),
            product=product,
        )
        cart.save()
        return redirect("/products/")
    context = {}

    return render(request, "products/billing.html", context)

from django.urls import path
from .views import *

app_name = "leads"

urlpatterns = [
    path('', home_page, name='home-page'),
    path('cart', cart, name='cart'),
    path('<int:pk>/', product_detail, name='product-detail'),
    path('login', login, name='login'),
    path('dashboard', dashboard, name='dashboard'),
    path('kiim', kiim, name='kiim'),
    path('syvenir', syvenir, name='syvenir'),
    path('billing', billing, name='billing'),
]
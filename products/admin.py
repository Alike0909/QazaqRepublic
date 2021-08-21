from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Type)

admin.site.register(Review)

admin.site.register(Cart)
# admin.site.register(CartProduct)

class ProductImageAdmin(admin.StackedInline):
    model = Image

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin]

    class Meta:
        model = Product

@admin.register(Image)
class ProductImageAdmin(admin.ModelAdmin):
    pass
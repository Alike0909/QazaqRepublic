# Generated by Django 3.1.4 on 2021-02-17 09:10

import datetime
from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('surname', models.CharField(max_length=255)),
                ('date', models.DateTimeField(default=datetime.datetime(2021, 2, 17, 9, 10, 38, 750008))),
                ('city', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=500)),
                ('phone', models.IntegerField(default=0)),
                ('email', models.CharField(max_length=255)),
                ('payment', models.CharField(max_length=255)),
                ('total', models.IntegerField(default=0)),
                ('arrive', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('feature', models.CharField(max_length=30)),
                ('price', models.IntegerField(default=0)),
                ('amount', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review_input', models.CharField(max_length=600)),
                ('name', models.CharField(max_length=255)),
                ('surname', models.CharField(max_length=255)),
                ('date', models.DateTimeField(default=datetime.datetime(2021, 2, 17, 9, 10, 38, 749582))),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='types',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.type'),
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product', jsonfield.fields.JSONField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.cart')),
            ],
        ),
    ]

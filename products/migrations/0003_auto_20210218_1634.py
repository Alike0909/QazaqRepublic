# Generated by Django 3.1.4 on 2021-02-18 16:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20210217_1311'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='done',
            field=models.BooleanField(default=0),
        ),
        migrations.AlterField(
            model_name='cart',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 2, 18, 16, 34, 33, 976880)),
        ),
        migrations.AlterField(
            model_name='review',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 2, 18, 16, 34, 33, 976470)),
        ),
    ]
# Generated by Django 4.1.7 on 2023-02-28 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matatu', '0006_rename_activity_dailyactivity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyactivity',
            name='status',
            field=models.CharField(max_length=30),
        ),
    ]
# Generated by Django 4.1.7 on 2023-02-28 13:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matatu', '0005_activity_town_role_date_created_route_date_created_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Activity',
            new_name='DailyActivity',
        ),
    ]
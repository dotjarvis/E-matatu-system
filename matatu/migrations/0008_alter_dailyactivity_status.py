# Generated by Django 4.1.7 on 2023-02-28 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matatu', '0007_alter_dailyactivity_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyactivity',
            name='status',
            field=models.CharField(choices=[('Full', 'Full'), ('Chance', 'Chance')], max_length=30),
        ),
    ]
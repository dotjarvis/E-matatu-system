# Generated by Django 4.1.7 on 2023-02-28 06:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_number', models.IntegerField(unique=True)),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('username', models.CharField(max_length=200, unique=True)),
                ('password', models.CharField(max_length=200)),
                ('DOB', models.DateTimeField()),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Prefer not to say', 'Prefer not to say')], max_length=200)),
                ('email', models.CharField(max_length=200, unique=True)),
                ('phone_number', models.IntegerField()),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(choices=[('Owner', 'Owner'), ('Driver', 'Driver'), ('Conductor', 'Conductor')], max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('route_name', models.CharField(max_length=200)),
                ('distance_in_km', models.FloatField(max_length=15)),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reg_no', models.CharField(max_length=30)),
                ('make', models.CharField(max_length=30)),
                ('model', models.CharField(max_length=30)),
                ('seat_capacity', models.IntegerField(choices=[('11', '11'), ('14', '14')])),
                ('person', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='matatu.person')),
                ('route', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='matatu.route')),
            ],
        ),
        migrations.AddField(
            model_name='person',
            name='Role_ID',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='matatu.role'),
        ),
    ]

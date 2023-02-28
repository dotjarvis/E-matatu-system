from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Role)
admin.site.register(Person)
admin.site.register(Route)
admin.site.register(Vehicle)
admin.site.register(Town)
admin.site.register(DailyActivity)
admin.site.register(Cordinates_activity)


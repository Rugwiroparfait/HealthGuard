# filepath: backend/records/admin.py
from django.contrib import admin
from .models import MedicalRecord

@admin.register(MedicalRecord)
class MedicalRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'patient', 'doctor', 'created_at', 'updated_at')
    list_filter = ('doctor', 'created_at')
    search_fields = ('title', 'patient__username', 'doctor__username', 'description', 'diagnosis', 'treatment')
    date_hierarchy = 'created_at'
    raw_id_fields = ('patient', 'doctor')
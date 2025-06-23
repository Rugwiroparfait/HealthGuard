from rest_framework import serializers
from .models import MedicalRecord
from django.contrib.auth import get_user_model

User = get_user_model()

class MedicalRecordSerializer(serializers.ModelSerializer):
    doctor_name = serializers.SerializerMethodField()
    patient_name = serializers.SerializerMethodField()
    
    class Meta:
        model = MedicalRecord
        fields = ['id', 'title', 'description', 'diagnosis', 'treatment', 
                  'created_at', 'updated_at', 'doctor', 'doctor_name', 
                  'patient', 'patient_name']
        read_only_fields = ['id', 'created_at', 'updated_at', 'doctor', 'doctor_name', 'patient_name']
    
    def get_doctor_name(self, obj):
        return f"{obj.doctor.first_name} {obj.doctor.last_name}"
    
    def get_patient_name(self, obj):
        return f"{obj.patient.first_name} {obj.patient.last_name}"

class MedicalRecordCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = ['id', 'title', 'description', 'diagnosis', 'treatment', 'patient']
        read_only_fields = ['id']
    
    def create(self, validated_data):
        # Set the doctor to the current user (who is creating the record)
        validated_data['doctor'] = self.context['request'].user
        return super().create(validated_data)
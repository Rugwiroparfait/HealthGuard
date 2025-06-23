from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    PATIENT = 'patient'
    DOCTOR = 'doctor'
    
    ROLE_CHOICES = [
        (PATIENT, 'Patient'),
        (DOCTOR, 'Doctor/Nurse'),
    ]
    
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default=PATIENT)
    
    def is_doctor(self):
        return self.role == self.DOCTOR
    
    def is_patient(self):
        return self.role == self.PATIENT
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MedicalRecord
from .serializers import MedicalRecordSerializer, MedicalRecordCreateSerializer
from django.contrib.auth import get_user_model
from django.http import HttpResponse
import pdfkit
from django.template.loader import render_to_string

User = get_user_model()

class IsDoctor(permissions.BasePermission):
    """
    Permission check for doctors/nurses only.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_doctor()

class PatientRecordListView(generics.ListCreateAPIView):
    """
    GET: Doctors can view a specific patient's records
    POST: Doctors can create a new record for a patient
    """
    permission_classes = [IsDoctor]
    serializer_class = MedicalRecordSerializer
    
    def get_queryset(self):
        patient_id = self.kwargs.get('patient_id')
        return MedicalRecord.objects.filter(patient__id=patient_id)
    
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return MedicalRecordCreateSerializer
        return MedicalRecordSerializer
    
    def create(self, request, *args, **kwargs):
        # Add patient_id from URL to request data
        patient_id = self.kwargs.get('patient_id')
        
        try:
            patient = User.objects.get(id=patient_id, role=User.PATIENT)
        except User.DoesNotExist:
            return Response(
                {"error": "Patient not found"}, 
                status=status.HTTP_404_NOT_FOUND
            )
            
        # Add patient to request data
        mutable_data = request.data.copy()
        mutable_data['patient'] = patient_id
        
        serializer = self.get_serializer(data=mutable_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class RecordDetailView(generics.RetrieveUpdateAPIView):
    """
    GET: Doctors can view a specific record
    PUT: Doctors can update a specific record
    """
    permission_classes = [IsDoctor]
    serializer_class = MedicalRecordSerializer
    queryset = MedicalRecord.objects.all()
    lookup_url_kwarg = 'record_id'

class PatientOwnRecordListView(generics.ListAPIView):
    """
    GET: Patients can view their own records
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = MedicalRecordSerializer
    
    def get_queryset(self):
        # Only return records that belong to the requesting user
        return MedicalRecord.objects.filter(patient=self.request.user)

class PatientRecordDownloadView(APIView):
    """
    GET: Patients can download their own records as PDF
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        # Only fetch records that belong to the requesting user
        records = MedicalRecord.objects.filter(patient=request.user)
        
        if not records:
            return Response(
                {"error": "No medical records found"}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Generate HTML content
        html_content = render_to_string('records/medical_records_pdf.html', {
            'records': records,
            'patient': request.user
        })
        
        # Convert HTML to PDF
        pdf = pdfkit.from_string(html_content, False)
        
        # Create HTTP response with PDF
        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="medical_records_{request.user.username}.pdf"'
        
        return response
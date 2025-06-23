from django.urls import path
from .views import (
    PatientRecordListView, 
    RecordDetailView,
    PatientOwnRecordListView,
    PatientRecordDownloadView
)

urlpatterns = [
    path('patients/<int:patient_id>/records/', PatientRecordListView.as_view(), name='patient_records'),
    path('records/<int:record_id>/', RecordDetailView.as_view(), name='record_detail'),
    path('me/records/', PatientOwnRecordListView.as_view(), name='my_records'),
    path('me/records/download/', PatientRecordDownloadView.as_view(), name='download_records'),
]
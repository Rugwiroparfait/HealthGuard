import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '../services/api';

export const useRecordStore = defineStore('records', () => {
  const patientRecords = ref([]);
  const loading = ref(false);
  const error = ref('');
  
  // Fetch records for a specific patient (doctor view)
  async function fetchPatientRecords(patientId) {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await api.get(`/patients/${patientId}/records/`);
      patientRecords.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch patient records';
      console.error('Error fetching patient records:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  // Fetch records for the current authenticated patient
  async function fetchOwnRecords() {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await api.get('/me/records/');
      patientRecords.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to fetch your records';
      console.error('Error fetching own records:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  // Create a new medical record
  async function createRecord(patientId, recordData) {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await api.post(`/patients/${patientId}/records/`, recordData);
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to create record';
      console.error('Error creating record:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  // Update an existing medical record
  async function updateRecord(recordId, recordData) {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await api.put(`/records/${recordId}/`, recordData);
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to update record';
      console.error('Error updating record:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  // Download records as PDF (patient only)
  async function downloadRecords() {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await api.get('/me/records/download/', {
        responseType: 'blob'
      });
      
      // Create a download link and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'medical_records.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (err) {
      error.value = 'Failed to download records';
      console.error('Error downloading records:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  return {
    patientRecords,
    loading,
    error,
    fetchPatientRecords,
    fetchOwnRecords,
    createRecord,
    updateRecord,
    downloadRecords
  };
});
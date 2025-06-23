<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/doctor/PatientRecordView.vue -->
<template>
  <div class="records-container">
    <AppHeader />
    
    <div class="records-content">
      <div class="records-header">
        <div class="header-left">
          <router-link :to="{ name: 'doctor-dashboard' }" class="btn-back">
            &larr; Back to Dashboard
          </router-link>
          <h1>Patient Records</h1>
        </div>
        <div class="header-right">
          <router-link 
            :to="{ name: 'create-record', params: { id: patientId } }" 
            class="btn-create"
          >
            + Create New Record
          </router-link>
        </div>
      </div>
      
      <div v-if="patient" class="patient-info-card">
        <div class="patient-details">
          <h2>{{ patient.first_name }} {{ patient.last_name }}</h2>
          <p><strong>Patient ID:</strong> {{ patient.id }}</p>
          <p><strong>Email:</strong> {{ patient.email }}</p>
        </div>
      </div>
      
      <div v-if="recordStore.loading" class="loading">
        Loading records...
      </div>
      
      <div v-else-if="recordStore.error" class="error-message">
        {{ recordStore.error }}
      </div>
      
      <div v-else-if="recordStore.patientRecords.length === 0" class="no-records">
        <p>No medical records found for this patient.</p>
      </div>
      
      <div v-else class="records-list">
        <RecordItem 
          v-for="record in recordStore.patientRecords" 
          :key="record.id" 
          :record="record" 
          :isDoctor="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRecordStore } from '@/stores/records';
import AppHeader from '@/components/AppHeader.vue';
import RecordItem from '@/components/RecordItem.vue';
import api from '@/services/api';

const route = useRoute();
const recordStore = useRecordStore();

const patientId = ref(route.params.id);
const patient = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    // Fetch patient details
    const response = await api.get(`/auth/users/${patientId.value}/`);
    patient.value = response.data;
    
    // Fetch patient records
    await recordStore.fetchPatientRecords(patientId.value);
  } catch (err) {
    error.value = 'Failed to load patient information';
    console.error(err);
  }
});
</script>

<style scoped>
.records-container {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.records-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.records-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header-left {
  display: flex;
  align-items: center;
}

h1 {
  margin: 0;
  margin-left: 16px;
}

.btn-back {
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.btn-create {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
}

.patient-info-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.patient-details h2 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #2c3e50;
}

.patient-details p {
  margin: 6px 0;
  color: #666;
}

.loading, .no-records {
  background-color: #fff;
  border-radius: 8px;
  padding: 60px 24px;
  text-align: center;
  color: #7f8c8d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.records-list {
  margin-top: 24px;
}
</style>
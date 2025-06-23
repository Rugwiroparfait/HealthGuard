<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/patient/DashboardView.vue -->
<template>
  <div class="dashboard-container">
    <AppHeader />
    
    <div class="dashboard-content">
      <div class="dashboard-header">
        <h1>My Medical Records</h1>
        <button @click="downloadRecords" class="btn-download" :disabled="recordStore.loading">
          <span v-if="recordStore.loading">Downloading...</span>
          <span v-else>Download as PDF</span>
        </button>
      </div>
      
      <div v-if="recordStore.loading" class="loading">
        Loading records...
      </div>
      
      <div v-else-if="recordStore.error" class="error-message">
        {{ recordStore.error }}
      </div>
      
      <div v-else-if="recordStore.patientRecords.length === 0" class="no-records">
        <p>You don't have any medical records yet.</p>
      </div>
      
      <div v-else class="records-list">
        <RecordItem 
          v-for="record in recordStore.patientRecords" 
          :key="record.id" 
          :record="record" 
          :isDoctor="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRecordStore } from '../../stores/records';
import AppHeader from '../../components/AppHeader.vue';
import RecordItem from '../../components/RecordItem.vue';

const authStore = useAuthStore();
const recordStore = useRecordStore();

onMounted(async () => {
  await recordStore.fetchOwnRecords();
});

const downloadRecords = async () => {
  await recordStore.downloadRecords();
};
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.dashboard-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

h1 {
  margin: 0;
  color: #2c3e50;
}

.btn-download {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-download:hover {
  background-color: #2980b9;
}

.btn-download:disabled {
  background-color: #a4c9e3;
  cursor: not-allowed;
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
  margin-bottom: 20px;
}

.records-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
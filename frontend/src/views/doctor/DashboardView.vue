<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/doctor/DashboardView.vue -->
<template>
  <div class="dashboard-container">
    <AppHeader />
    
    <div class="dashboard-content">
      <h1>Doctor Dashboard</h1>
      <p class="welcome-text">Welcome, Dr. {{ authStore.user.first_name }} {{ authStore.user.last_name }}</p>
      
      <div class="search-section">
        <h2>Find Patient</h2>
        <PatientSearchForm />
      </div>
      
      <div class="recent-patients">
        <h2>Recent Patients</h2>
        <p class="info-text">Search for a patient ID above to view and manage their records.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import AppHeader from '@/components/AppHeader.vue';
import PatientSearchForm from '@/components/PatientSearchForm.vue';

const authStore = useAuthStore();
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

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.welcome-text {
  color: #7f8c8d;
  margin-bottom: 40px;
  font-size: 18px;
}

.search-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h2 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 16px;
}

.recent-patients {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.info-text {
  color: #7f8c8d;
}
</style>
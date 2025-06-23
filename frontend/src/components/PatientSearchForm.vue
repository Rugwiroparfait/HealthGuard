<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/components/PatientSearchForm.vue -->
<template>
  <div class="search-form">
    <div class="search-input-wrapper">
      <input 
        type="text" 
        v-model="searchQuery"
        placeholder="Search patient by ID..." 
        @keyup.enter="searchPatient"
      />
      <button class="search-btn" @click="searchPatient">
        Search
      </button>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
    
    <div v-if="searchResult" class="search-result">
      <div class="patient-info">
        <h3>{{ searchResult.first_name }} {{ searchResult.last_name }}</h3>
        <p>Patient ID: {{ searchResult.id }}</p>
        <p>Email: {{ searchResult.email }}</p>
      </div>
      <router-link 
        :to="{ name: 'patient-records', params: { id: searchResult.id } }" 
        class="view-records-btn"
      >
        View Records
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/services/api';

const searchQuery = ref('');
const searchResult = ref(null);
const error = ref('');

async function searchPatient() {
  if (!searchQuery.value.trim()) {
    error.value = 'Please enter a patient ID';
    return;
  }
  
  error.value = '';
  
  try {
    // Search by exact ID
    const response = await api.get(`/auth/users/${searchQuery.value}/`);
    searchResult.value = response.data;
    
    // Clear the search field after a successful search
    searchQuery.value = '';
  } catch (err) {
    if (err.response && err.response.status === 404) {
      error.value = 'Patient not found';
    } else {
      error.value = 'An error occurred. Please try again.';
    }
    searchResult.value = null;
  }
}
</script>

<style scoped>
.search-form {
  margin-bottom: 24px;
  width: 100%;
}

.search-input-wrapper {
  display: flex;
  width: 100%;
}

input {
  flex-grow: 1;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.search-btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 600;
}

.search-btn:hover {
  background-color: #3aa876;
}

.error-message {
  margin-top: 8px;
  color: #e74c3c;
  font-size: 14px;
}

.search-result {
  margin-top: 16px;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.patient-info h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

.patient-info p {
  margin: 4px 0;
  color: #666;
}

.view-records-btn {
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
}

.view-records-btn:hover {
  background-color: #2980b9;
}
</style>
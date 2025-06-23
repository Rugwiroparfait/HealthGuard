<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/doctor/CreateRecordView.vue -->
<template>
  <div class="create-record-container">
    <header class="page-header">
      <div class="header-left">
        <router-link :to="{ name: 'patient-records', params: { id: patientId } }" class="btn btn-back">
          &larr; Back to Records
        </router-link>
        <h1>Create New Medical Record</h1>
      </div>
      <div class="header-right">
        <button class="btn btn-logout" @click="logout">Logout</button>
      </div>
    </header>
    
    <div v-if="patient" class="patient-info-card">
      <div class="patient-details">
        <h2>Patient: {{ patient.first_name }} {{ patient.last_name }}</h2>
        <p><strong>ID:</strong> {{ patient.id }}</p>
      </div>
    </div>
    
    <div class="form-card">
      <div v-if="error" class="alert error">{{ error }}</div>
      <div v-if="success" class="alert success">{{ success }}</div>
      
      <form @submit.prevent="createRecord">
        <div class="form-group">
          <label for="title">Record Title*</label>
          <input 
            id="title" 
            v-model="form.title" 
            type="text" 
            required
            placeholder="Enter record title"
          />
        </div>
        
        <div class="form-group">
          <label for="description">Description*</label>
          <textarea 
            id="description" 
            v-model="form.description" 
            rows="4" 
            required
            placeholder="Enter detailed description of the patient's condition"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="diagnosis">Diagnosis*</label>
          <textarea 
            id="diagnosis" 
            v-model="form.diagnosis" 
            rows="3" 
            required
            placeholder="Enter diagnosis details"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="treatment">Treatment Plan*</label>
          <textarea 
            id="treatment" 
            v-model="form.treatment" 
            rows="4" 
            required
            placeholder="Enter treatment plan details"
          ></textarea>
        </div>
        
        <div class="form-actions">
          <button type="button" class="btn btn-cancel" @click="cancel">Cancel</button>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Saving...' : 'Create Record' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import { useRecordStore } from '../../stores/records';
import api from '../../services/api';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const recordStore = useRecordStore();

const patientId = ref(route.params.id);
const patient = ref(null);
const error = ref('');
const success = ref('');
const isSubmitting = ref(false);

const form = reactive({
  title: '',
  description: '',
  diagnosis: '',
  treatment: '',
});

onMounted(async () => {
  try {
    // Fetch patient details
    const response = await api.get(`/auth/users/${patientId.value}/`);
    patient.value = response.data;
  } catch (err) {
    error.value = 'Failed to load patient information';
    console.error(err);
  }
});

const createRecord = async () => {
  isSubmitting.value = true;
  error.value = '';
  success.value = '';
  
  try {
    await recordStore.createRecord(patientId.value, form);
    success.value = 'Medical record created successfully';
    
    // Reset form after successful submission
    form.title = '';
    form.description = '';
    form.diagnosis = '';
    form.treatment = '';
    
    // Redirect after a brief delay to show success message
    setTimeout(() => {
      router.push({ 
        name: 'patient-records',
        params: { id: patientId.value }
      });
    }, 1500);
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to create record. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};

const cancel = () => {
  router.push({ 
    name: 'patient-records',
    params: { id: patientId.value }
  });
};

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
.create-record-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

h1 {
  color: #2c3e50;
  margin: 0;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}

.btn-back {
  background-color: #f1f1f1;
  color: #333;
}

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-cancel {
  background-color: #95a5a6;
  color: white;
}

.btn-logout {
  background-color: #e74c3c;
  color: white;
}

.patient-info-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #eee;
}

.patient-details h2 {
  margin-top: 0;
  color: #2c3e50;
}

.form-card {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #eee;
  padding: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
}

.alert {
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
</style>
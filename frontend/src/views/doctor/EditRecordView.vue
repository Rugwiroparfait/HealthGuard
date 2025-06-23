<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/doctor/EditRecordView.vue -->
<template>
  <div class="edit-record-container">
    <AppHeader />
    
    <div class="content">
      <div class="content-header">
        <router-link 
          :to="{ name: 'patient-records', params: { id: recordStore.currentRecord?.patient } }" 
          class="btn-back"
          v-if="recordStore.currentRecord"
        >
          &larr; Back to Records
        </router-link>
        <h1>Edit Medical Record</h1>
      </div>
      
      <div v-if="loading" class="loading">Loading record...</div>
      
      <template v-else>
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-if="success" class="success-message">{{ success }}</div>
        
        <div class="form-card" v-if="recordStore.currentRecord">
          <form @submit.prevent="updateRecord">
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
            
            <div class="record-meta">
              <p><strong>Created:</strong> {{ formatDate(recordStore.currentRecord.created_at) }}</p>
              <p><strong>Last Updated:</strong> {{ formatDate(recordStore.currentRecord.updated_at) }}</p>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn-cancel" @click="cancel">Cancel</button>
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Saving...' : 'Update Record' }}
              </button>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRecordStore } from '@/stores/records';
import AppHeader from '@/components/AppHeader.vue';

const route = useRoute();
const router = useRouter();
const recordStore = useRecordStore();

const recordId = ref(route.params.id);
const loading = ref(true);
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
    // Fetch record details
    const record = await recordStore.getRecord(recordId.value);
    
    // Populate form with record data
    form.title = record.title;
    form.description = record.description;
    form.diagnosis = record.diagnosis;
    form.treatment = record.treatment;
  } catch (err) {
    error.value = 'Failed to load record information';
  } finally {
    loading.value = false;
  }
});

const updateRecord = async () => {
  isSubmitting.value = true;
  error.value = '';
  
  try {
    await recordStore.updateRecord(recordId.value, form);
    success.value = 'Medical record updated successfully!';
    
    // Navigate back to patient records after a short delay
    setTimeout(() => {
      router.push({ 
        name: 'patient-records',
        params: { id: recordStore.currentRecord.patient }
      });
    }, 1500);
    
  } catch (err) {
    error.value = 'Failed to update record. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};

const cancel = () => {
  router.push({ 
    name: 'patient-records',
    params: { id: recordStore.currentRecord.patient }
  });
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>

<style scoped>
.edit-record-container {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.content-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

h1 {
  margin: 0;
}

.btn-back {
  align-self: flex-start;
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.loading {
  background-color: #fff;
  border-radius: 8px;
  padding: 60px 24px;
  text-align: center;
  color: #7f8c8d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

input, textarea {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #42b983;
}

.record-meta {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 14px;
  margin: 20px 0;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.btn-cancel {
  padding: 10px 20px;
  background-color: #95a5a6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-submit:disabled {
  background-color: #a8d5c5;
  cursor: not-allowed;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
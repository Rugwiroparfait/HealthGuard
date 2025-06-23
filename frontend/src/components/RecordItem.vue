<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/components/RecordItem.vue -->
<template>
  <div class="record-item">
    <h3 class="record-title">{{ record.title }}</h3>
    <div class="record-meta">
      <span class="date">{{ formatDate(record.created_at) }}</span>
      <span class="doctor">Dr. {{ record.doctor_name }}</span>
    </div>
    <div class="record-content">
      <p><strong>Description:</strong> {{ record.description }}</p>
      <p><strong>Diagnosis:</strong> {{ record.diagnosis }}</p>
      <p><strong>Treatment:</strong> {{ record.treatment }}</p>
    </div>
    <div v-if="isDoctor" class="record-actions">
      <router-link :to="{ name: 'edit-record', params: { id: record.id } }" class="btn-edit">
        Edit Record
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  record: {
    type: Object,
    required: true
  },
  isDoctor: {
    type: Boolean,
    default: false
  }
});

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>

<style scoped>
.record-item {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.record-title {
  margin-top: 0;
  margin-bottom: 8px;
  color: #2c3e50;
}

.record-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.record-content p {
  margin: 8px 0;
  line-height: 1.5;
}

.record-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.btn-edit {
  padding: 6px 12px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
}

.btn-edit:hover {
  background-color: #2980b9;
}
</style>
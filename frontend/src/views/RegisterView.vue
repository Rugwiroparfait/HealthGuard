<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/RegisterView.vue -->
<template>
  <div class="register-container">
    <div class="register-card">
      <h1>Create an Account</h1>
      
      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username*</label>
          <input 
            type="text" 
            id="username" 
            v-model="form.username" 
            required
            placeholder="Choose a username"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            placeholder="Enter your email address"
          />
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name*</label>
            <input 
              type="text" 
              id="firstName" 
              v-model="form.first_name" 
              required
              placeholder="Your first name"
            />
          </div>
          
          <div class="form-group">
            <label for="lastName">Last Name*</label>
            <input 
              type="text" 
              id="lastName" 
              v-model="form.last_name" 
              required
              placeholder="Your last name"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="role">Role*</label>
          <select id="role" v-model="form.role" required>
            <option value="" disabled>Select your role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor/Nurse</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="password">Password*</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password" 
            required
            placeholder="Create a strong password"
          />
        </div>
        
        <div class="form-group">
          <label for="password2">Confirm Password*</label>
          <input 
            type="password" 
            id="password2" 
            v-model="form.password2" 
            required
            placeholder="Confirm your password"
          />
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            class="btn-register" 
            :disabled="authStore.loading"
          >
            {{ authStore.loading ? 'Creating Account...' : 'Register' }}
          </button>
        </div>
      </form>
      
      <div class="register-footer">
        Already have an account? 
        <router-link to="/login">Log In</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const form = reactive({
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  role: '',
  password: '',
  password2: ''
});

const handleSubmit = async () => {
  await authStore.register(form);
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f7fa;
}

.register-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 500px;
}

h1 {
  margin-top: 0;
  margin-bottom: 24px;
  color: #2c3e50;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
}

input, select {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus, select:focus {
  outline: none;
  border-color: #42b983;
}

.form-actions {
  margin-top: 30px;
}

.btn-register {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-register:hover {
  background-color: #3aa876;
}

.btn-register:disabled {
  background-color: #a8d5c5;
  cursor: not-allowed;
}

.register-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #7f8c8d;
}

.register-footer a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
}

.register-footer a:hover {
  text-decoration: underline;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
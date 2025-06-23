<template>
  <div class="home-container">
    <div class="hero">
      <h1>Welcome to HealthGuard</h1>
      <p class="subtitle">Secure Medical Record Management System</p>
      
      <div class="cta-buttons">
        <router-link to="/login" class="btn btn-primary">Log In</router-link>
        <router-link to="/register" class="btn btn-secondary">Register</router-link>
      </div>
    </div>
    
    <div class="features">
      <div class="feature">
        <div class="feature-icon">🔒</div>
        <h2>Secure Access</h2>
        <p>Role-based access control ensures that patients can only view their own records while medical professionals can manage patient data.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">📋</div>
        <h2>Digital Records</h2>
        <p>Store and manage medical records digitally, making it easy to access important health information when needed.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">📱</div>
        <h2>Anytime Access</h2>
        <p>Access your medical records anytime, anywhere, and download them as PDFs for offline use.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  // If user is already logged in, redirect to appropriate dashboard
  if (authStore.isAuthenticated) {
    if (authStore.isDoctor) {
      router.push({ name: 'doctor-dashboard' });
    } else {
      router.push({ name: 'patient-dashboard' });
    }
  }
});
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-primary:hover {
  background-color: #3aa876;
}

.btn-secondary {
  background-color: #3498db;
  color: white;
}

.btn-secondary:hover {
  background-color: #2980b9;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px 0;
}

.feature {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature h2 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.feature p {
  color: #7f8c8d;
  line-height: 1.6;
}
</style>
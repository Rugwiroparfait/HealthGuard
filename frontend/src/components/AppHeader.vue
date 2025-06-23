<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/components/AppHeader.vue -->
<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/logo.svg" alt="HealthGuard Logo" />
        <span>HealthGuard</span>
      </div>
      
      <div class="user-info">
        <span class="welcome">Welcome, {{ authStore.user?.first_name }}</span>
        <button class="btn-logout" @click="logout">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
.app-header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 30px;
}

.logo span {
  font-size: 18px;
  font-weight: 700;
  color: #42b983;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.welcome {
  font-size: 14px;
  color: #2c3e50;
}

.btn-logout {
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-logout:hover {
  background-color: #c0392b;
}
</style>
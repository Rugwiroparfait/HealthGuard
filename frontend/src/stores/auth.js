import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';
import router from '../router';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '');
  const refreshToken = ref(localStorage.getItem('refreshToken') || '');
  const user = ref(JSON.parse(localStorage.getItem('user') || 'null'));
  const error = ref('');
  const loading = ref(false);

  // Computed properties
  const isAuthenticated = computed(() => !!token.value);
  const isDoctor = computed(() => user.value?.role === 'doctor');
  const isPatient = computed(() => user.value?.role === 'patient');
  
  // Actions
  async function register(userData) {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await axios.post(`${API_URL}/auth/register/`, userData);
      // Registration successful, now login
      await login({
        username: userData.username,
        password: userData.password
      });
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed. Please try again.';
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  async function login(credentials) {
    loading.value = true;
    error.value = '';
    
    try {
      const response = await axios.post(`${API_URL}/auth/login/`, credentials);
      token.value = response.data.access;
      refreshToken.value = response.data.refresh;
      
      // Store tokens in localStorage
      localStorage.setItem('token', token.value);
      localStorage.setItem('refreshToken', refreshToken.value);
      
      // Get user profile
      await fetchUserProfile();
      
      // Redirect based on role
      if (isDoctor.value) {
        router.push({ name: 'doctor-dashboard' });
      } else {
        router.push({ name: 'patient-dashboard' });
      }
      
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.detail || 'Login failed. Please check your credentials.';
      throw err;
    } finally {
      loading.value = false;
    }
  }
  
  async function fetchUserProfile() {
    try {
      const response = await axios.get(`${API_URL}/auth/me/`, {
        headers: { Authorization: `Bearer ${token.value}` }
      });
      user.value = response.data;
      localStorage.setItem('user', JSON.stringify(user.value));
      return response.data;
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      logout();
      throw err;
    }
  }
  
  async function refreshAuthToken() {
    try {
      const response = await axios.post(`${API_URL}/auth/token/refresh/`, {
        refresh: refreshToken.value
      });
      token.value = response.data.access;
      localStorage.setItem('token', token.value);
      return response.data;
    } catch (err) {
      console.error('Token refresh failed:', err);
      logout();
      throw err;
    }
  }
  
  function logout() {
    token.value = '';
    refreshToken.value = '';
    user.value = null;
    
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    
    // Redirect to login
    router.push({ name: 'login' });
  }

  return {
    token,
    refreshToken,
    user,
    error,
    loading,
    isAuthenticated,
    isDoctor,
    isPatient,
    register,
    login,
    logout,
    fetchUserProfile,
    refreshAuthToken
  };
});
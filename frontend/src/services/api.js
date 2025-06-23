import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh or logout on auth errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const authStore = useAuthStore();
    
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired
      if (authStore.token && !error.config._isRetry) {
        try {
          // Try to refresh token
          await authStore.refreshAuthToken();
          
          // Retry the original request
          const config = error.config;
          config._isRetry = true;
          config.headers.Authorization = `Bearer ${authStore.token}`;
          return api(config);
        } catch (refreshError) {
          // If refresh fails, logout user
          authStore.logout();
          return Promise.reject(refreshError);
        }
      } else {
        // No token or already retried, logout
        authStore.logout();
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
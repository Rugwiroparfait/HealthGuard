<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/LoginView.vue -->
<template>
  <div class="login-container">
    <!-- Floating background elements -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    
    <div class="login-card ios-glass">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img src="../assets/logo.svg" alt="HealthGuard Logo" class="logo" />
        </div>
        <h1>Health<span>Guard</span></h1>
      </div>
      
      <h2>Welcome Back</h2>
      
      <div v-if="authStore.error" class="error-message">
        {{ authStore.error }}
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-wrapper">
            <input 
              type="text" 
              id="username" 
              v-model="form.username" 
              required
              placeholder="Enter your username"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <input 
              type="password" 
              id="password" 
              v-model="form.password" 
              required
              placeholder="Enter your password"
            />
          </div>
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            class="btn-login" 
            :disabled="authStore.loading"
          >
            <span class="btn-text">{{ authStore.loading ? 'Logging in...' : 'Access Records' }}</span>
            <span class="btn-icon">→</span>
          </button>
        </div>
      </form>
      
      <div class="login-footer">
        Don't have an account yet?
        <router-link to="/register" class="register-link">Create Account</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const form = reactive({
  username: '',
  password: ''
});

const handleSubmit = async () => {
  await authStore.login(form);
};

onMounted(() => {
  // Add highlight elements to glass elements
  const glassElements = document.querySelectorAll('.ios-glass');
  glassElements.forEach(el => {
    if (!el.querySelector('.highlight')) {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight');
      el.appendChild(highlight);
    }
  });
  
  // iOS-style glass effect interactions
  document.addEventListener('mousemove', (e) => {
    const glassElements = document.querySelectorAll('.ios-glass');
    
    // Calculate mouse position relative to viewport
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    glassElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to element center
      const distanceX = Math.abs(e.clientX - elCenterX);
      const distanceY = Math.abs(e.clientY - elCenterY);
      
      if (distanceX < rect.width * 2 && distanceY < rect.height * 2) {
        // Calculate intensity based on distance
        const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        const maxDistance = Math.sqrt(Math.pow(rect.width * 2, 2) + Math.pow(rect.height * 2, 2));
        const intensity = 0.4 * (1 - distance / maxDistance);
        
        // Calculate angle based on mouse position relative to element
        const angleX = (e.clientY - elCenterY) / rect.height * intensity;
        const angleY = (e.clientX - elCenterX) / rect.width * intensity;
        
        el.style.transform = `
          perspective(1000px)
          rotateX(${-angleX}deg)
          rotateY(${angleY}deg)
          translateZ(10px)
        `;
        
        // Adjust highlight position
        const highlight = el.querySelector('.highlight');
        if (highlight) {
          const highlightX = (mouseX - (rect.left / window.innerWidth)) / (rect.width / window.innerWidth) * 100;
          const highlightY = (mouseY - (rect.top / window.innerHeight)) / (rect.height / window.innerHeight) * 100;
          highlight.style.background = `radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%)`;
        }
      } else {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      }
    });
  });
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #074FE0 0%, #079DE0 25%, #07E0D6 50%, #0FE185 75%, #07E02F 100%);
  color: #fff;
}

/* iOS-style liquid glass effect */
.ios-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px 0 rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  border-radius: 24px;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.ios-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  border-radius: 24px 24px 0 0;
  z-index: 0;
}

.highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  pointer-events: none;
  z-index: 1;
}

/* Background elements */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  opacity: 0.6;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 30s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
  25% { transform: translate(3%, 2%) scale(1.05); opacity: 0.5; }
  50% { transform: translate(1%, 7%) scale(0.95); opacity: 0.4; }
  75% { transform: translate(-3%, 3%) scale(1.05); opacity: 0.5; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
}

.shape-1 {
  bottom: -150px;
  right: 10%;
  width: 600px;
  height: 600px;
  background: rgba(15, 225, 133, 0.4);
  animation-delay: -5s;
}

.shape-2 {
  top: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: rgba(7, 158, 224, 0.4);
  animation-delay: -12s;
}

.shape-3 {
  top: 40%;
  right: -200px;
  width: 500px;
  height: 500px;
  background: rgba(7, 79, 224, 0.4);
  animation-delay: -7s;
}

.shape-4 {
  bottom: 10%;
  left: 20%;
  width: 400px;
  height: 400px;
  background: rgba(7, 224, 47, 0.4);
  animation-delay: -20s;
}

.login-card {
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  z-index: 1;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.logo {
  height: 50px;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
}

h1 {
  font-size: 2.4rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -1px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 span {
  color: #51E06B;
  text-shadow: 0 0 20px rgba(81, 224, 107, 0.5);
}

h2 {
  font-size: 1.6rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
  z-index: 2;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.input-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

input {
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: white;
  outline: none;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-actions {
  margin-top: 40px;
  position: relative;
  z-index: 2;
}

.btn-login {
  width: 100%;
  padding: 14px 28px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  background: rgba(7, 79, 224, 0.8);
  color: white;
  box-shadow: 
    0 4px 20px rgba(7, 79, 224, 0.4),
    0 0 0 1px rgba(7, 79, 224, 0.2) inset;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.btn-login:hover {
  background: rgba(7, 79, 224, 0.9);
  box-shadow: 
    0 8px 30px rgba(7, 79, 224, 0.6),
    0 0 0 1px rgba(7, 79, 224, 0.3) inset;
  transform: translateY(-5px);
}

.btn-login:disabled {
  background: rgba(7, 79, 224, 0.4);
  cursor: not-allowed;
  transform: translateY(0);
}

.btn-text {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.btn-icon {
  position: relative;
  z-index: 2;
  font-size: 18px;
  transition: transform 0.3s ease;
}

.btn-login:hover:not(:disabled) .btn-text {
  transform: translateX(-3px);
}

.btn-login:hover:not(:disabled) .btn-icon {
  transform: translateX(5px);
}

.login-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
}

.register-link {
  color: #51E06B;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
  position: relative;
  transition: all 0.3s ease;
}

.register-link:hover {
  text-shadow: 0 0 10px rgba(81, 224, 107, 0.7);
}

.register-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #51E06B;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.register-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.error-message {
  background: rgba(231, 76, 60, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(231, 76, 60, 0.3);
  position: relative;
  z-index: 2;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  input {
    padding: 12px 14px;
  }
  
  .form-actions {
    margin-top: 30px;
  }
}
</style>
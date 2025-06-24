<!-- filepath: /home/kali/Documents/Projects/HealthGuard/frontend/src/views/RegisterView.vue -->
<template>
  <div class="register-container">
    <!-- Floating background elements -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    
    <div class="register-card ios-glass">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img src="../assets/logo.svg" alt="HealthGuard Logo" class="logo" />
        </div>
        <h1>Health<span>Guard</span></h1>
      </div>
      
      <h2>Create Your Account</h2>
      
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
              placeholder="Choose a username"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              placeholder="Enter your email address"
            />
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <div class="input-wrapper">
              <input 
                type="text" 
                id="firstName" 
                v-model="form.first_name" 
                required
                placeholder="Your first name"
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <div class="input-wrapper">
              <input 
                type="text" 
                id="lastName" 
                v-model="form.last_name" 
                required
                placeholder="Your last name"
              />
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label for="role">Role</label>
          <div class="input-wrapper">
            <select id="role" v-model="form.role" required>
              <option value="" disabled>Select your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor/Nurse</option>
            </select>
          </div>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper password-wrapper">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="form.password" 
              required
              placeholder="Create a strong password"
            />
            <button 
              type="button" 
              class="toggle-password" 
              @click="showPassword = !showPassword"
              tabindex="-1"
            >
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16c3.691 0 6.915-2.534 7.736-6C18.915 9.534 15.691 7 12 7c-3.691 0-6.915 2.534-7.736 6 .821 3.466 4.045 6 7.736 6zm0-10c2.21 0 4 1.791 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" fill="rgba(255,255,255,0.7)"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.309-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" fill="rgba(255,255,255,0.7)"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <div class="input-wrapper password-wrapper">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'"
              id="password2" 
              v-model="form.password2" 
              required
              placeholder="Confirm your password"
            />
            <button 
              type="button" 
              class="toggle-password" 
              @click="showConfirmPassword = !showConfirmPassword"
              tabindex="-1"
            >
              <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16c3.691 0 6.915-2.534 7.736-6C18.915 9.534 15.691 7 12 7c-3.691 0-6.915 2.534-7.736 6 .821 3.466 4.045 6 7.736 6zm0-10c2.21 0 4 1.791 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" fill="rgba(255,255,255,0.7)"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.309-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" fill="rgba(255,255,255,0.7)"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            class="btn-register" 
            :disabled="authStore.loading"
          >
            <span class="btn-text">{{ authStore.loading ? 'Creating Account...' : 'Register' }}</span>
            <span class="btn-icon">+</span>
          </button>
        </div>
      </form>
      
      <div class="register-footer">
        Already have an account? 
        <router-link to="/login" class="login-link">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
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

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const handleSubmit = async () => {
  await authStore.register(form);
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
      
      // Distance from mouse to element center
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
.register-container {
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

.register-card {
  width: 100%;
  max-width: 500px;
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
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 0;
}

.form-row .form-group {
  flex: 1;
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

.password-wrapper {
  display: flex;
  align-items: center;
}

input, select {
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: white;
  outline: none;
}

select {
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255, 255, 255, 0.7)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat;
  background-position: right 16px center;
  background-size: 16px;
}

input::placeholder, select::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.toggle-password {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.toggle-password:focus {
  outline: none;
}

.form-actions {
  margin-top: 30px;
  position: relative;
  z-index: 2;
}

.btn-register {
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
  background: rgba(15, 225, 133, 0.8);
  color: white;
  box-shadow: 
    0 4px 20px rgba(15, 225, 133, 0.4),
    0 0 0 1px rgba(15, 225, 133, 0.2) inset;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.btn-register:hover {
  background: rgba(15, 225, 133, 0.9);
  box-shadow: 
    0 8px 30px rgba(15, 225, 133, 0.6),
    0 0 0 1px rgba(15, 225, 133, 0.3) inset;
  transform: translateY(-5px);
  border: 1px solid rgba(0, 0, 0, 0.8);
}

.btn-register:disabled {
  background: rgba(15, 225, 133, 0.4);
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

.btn-register:hover:not(:disabled) .btn-text {
  transform: translateX(-3px);
}

.btn-register:hover:not(:disabled) .btn-icon {
  transform: translateX(5px) scale(1.2);
}

.register-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
}

.login-link {
  color: #51E06B;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
  position: relative;
  transition: all 0.3s ease;
}

.login-link:hover {
  text-shadow: 0 0 10px rgba(81, 224, 107, 0.7);
}

.login-link::after {
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

.login-link:hover::after {
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

@media (max-width: 576px) {
  .register-card {
    padding: 30px 20px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  input, select {
    padding: 12px 14px;
  }
  
  .form-actions {
    margin-top: 20px;
  }
}
</style>
<template>
  <div class="home-container">
    <!-- Enhanced floating elements with animation -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="light-beam"></div>
    </div>
    
    <!-- Enhanced hero section with improved glass effect -->
    <div class="hero liquid-glass">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img src="../assets/logo.svg" alt="HealthGuard Logo" class="logo" />
        </div>
        <h1>Health<span>Guard</span></h1>
      </div>
      <p class="subtitle">Next-Generation Medical Record Management</p>
      
      <div class="cta-buttons">
        <router-link to="/login" class="btn btn-primary">
          <span class="btn-text">Access System</span>
          <span class="btn-icon">→</span>
          <span class="btn-glow"></span>
        </router-link>
        <router-link to="/register" class="btn btn-secondary">
          <span class="btn-text">Create Account</span>
          <span class="btn-icon">+</span>
          <span class="btn-glow"></span>
        </router-link>
      </div>
    </div>
    
    <!-- Enhanced feature cards -->
    <div class="features">
      <div class="feature liquid-glass" data-aos="fade-up" data-aos-delay="100">
        <div class="feature-icon-container">
          <div class="feature-icon">🔒</div>
        </div>
        <h2>Secure Access</h2>
        <p>Role-based access control ensures that patients can only view their own records while medical professionals can manage patient data.</p>
        <div class="feature-highlight"></div>
      </div>
      
      <div class="feature liquid-glass" data-aos="fade-up" data-aos-delay="200">
        <div class="feature-icon-container">
          <div class="feature-icon">📋</div>
        </div>
        <h2>Digital Records</h2>
        <p>Store and manage medical records digitally, making it easy to access important health information when needed.</p>
        <div class="feature-highlight"></div>
      </div>
      
      <div class="feature liquid-glass" data-aos="fade-up" data-aos-delay="300">
        <div class="feature-icon-container">
          <div class="feature-icon">📱</div>
        </div>
        <h2>Anytime Access</h2>
        <p>Access your medical records anytime, anywhere, and download them as PDFs for offline use.</p>
        <div class="feature-highlight"></div>
      </div>
    </div>

    <!-- New section: Technology showcase -->
    <div class="tech-showcase liquid-glass">
      <h2>Powered by Advanced Technology</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <div class="tech-icon">🔐</div>
          <h3>End-to-End Encryption</h3>
        </div>
        <div class="tech-item">
          <div class="tech-icon">🔍</div>
          <h3>Intelligent Search</h3>
        </div>
        <div class="tech-item">
          <div class="tech-icon">📊</div>
          <h3>Health Analytics</h3>
        </div>
        <div class="tech-item">
          <div class="tech-icon">🔄</div>
          <h3>Real-time Updates</h3>
        </div>
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
  
  // Add mouse move effect for liquid glass
  document.addEventListener('mousemove', (e) => {
    const features = document.querySelectorAll('.feature');
    const hero = document.querySelector('.hero');
    
    // Calculate mouse position relative to viewport
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Apply subtle transform to hero based on mouse position
    if (hero) {
      hero.style.transform = `
        perspective(1000px) 
        rotateX(${2 - mouseY * 2}deg) 
        rotateY(${-2 + mouseX * 4}deg)
      `;
    }
    
    // Apply subtle transforms to features
    features.forEach(feature => {
      const rect = feature.getBoundingClientRect();
      const featureCenterX = rect.left + rect.width / 2;
      const featureCenterY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - featureCenterX) / 30;
      const deltaY = (e.clientY - featureCenterY) / 30;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Only apply effect if mouse is relatively close
      if (distance < 100) {
        feature.style.transform = `
          perspective(1000px) 
          rotateX(${-deltaY / 10}deg) 
          rotateY(${deltaX / 10}deg) 
          translateZ(10px)
        `;
        
        // Move the highlight
        const highlight = feature.querySelector('.feature-highlight');
        if (highlight) {
          highlight.style.opacity = '0.8';
          highlight.style.left = `${mouseX * 100}%`;
          highlight.style.top = `${mouseY * 100}%`;
        }
      } else {
        feature.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        
        const highlight = feature.querySelector('.feature-highlight');
        if (highlight) {
          highlight.style.opacity = '0.3';
        }
      }
    });
  });
});
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1f35 0%, #2c3e50 100%);
  color: #fff;
}

/* Advanced liquid glass effect */
.liquid-glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
  pointer-events: none;
}

.liquid-glass:hover::before {
  left: 100%;
}

/* Enhanced floating shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: float 20s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
  25% { transform: translate(5%, 5%) rotate(5deg); opacity: 0.8; }
  50% { transform: translate(0, 10%) rotate(0deg); opacity: 0.6; }
  75% { transform: translate(-5%, 5%) rotate(-5deg); opacity: 0.8; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
}

.shape-1 {
  bottom: -150px;
  right: 10%;
  width: 600px;
  height: 600px;
  background: rgba(66, 185, 131, 0.3);
  animation-delay: -5s;
}

.shape-2 {
  top: -100px;
  left: -200px;
  width: 500px;
  height: 500px;
  background: rgba(52, 152, 219, 0.3);
  animation-delay: -2s;
}

.shape-3 {
  top: 40%;
  right: -200px;
  width: 400px;
  height: 400px;
  background: rgba(155, 89, 182, 0.3);
  animation-delay: -7s;
}

.shape-4 {
  bottom: 10%;
  left: 20%;
  width: 300px;
  height: 300px;
  background: rgba(241, 196, 15, 0.3);
  animation-delay: -3s;
}

.shape-5 {
  top: 30%;
  left: 30%;
  width: 200px;
  height: 200px;
  background: rgba(231, 76, 60, 0.3);
  animation-delay: -10s;
}

/* Light beam effect */
.light-beam {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0.5;
  transform: rotate(45deg);
  animation: beam 15s infinite linear;
  pointer-events: none;
}

@keyframes beam {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* Enhanced hero section */
.hero {
  text-align: center;
  padding: 70px 40px;
  margin: 60px auto;
  max-width: 800px;
  transform: perspective(1000px) rotateX(2deg);
  z-index: 2;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-wrapper {
  position: relative;
  width: 70px;
  height: 70px;
  margin-right: 15px;
}

.logo-wrapper::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: rgba(66, 185, 131, 0.2);
  filter: blur(15px);
  z-index: -1;
  animation: pulse 4s infinite ease-in-out;
}

.logo {
  height: 70px;
  filter: drop-shadow(0 0 15px rgba(66, 185, 131, 0.7));
  animation: float 6s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.6; }
}

h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #ffffff 0%, #42b983 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(66, 185, 131, 0.5);
}

h1 span {
  background: linear-gradient(135deg, #42b983 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  font-weight: 300;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* Enhanced button styles */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.btn {
  padding: 18px 36px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  min-width: 200px;
}

.btn-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
}

.btn:hover .btn-glow {
  opacity: 1;
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

.btn:hover .btn-text {
  transform: translateX(-3px);
}

.btn:hover .btn-icon {
  transform: translateX(5px) scale(1.2);
}

.btn-primary {
  background: linear-gradient(135deg, #42b983 0%, #3aa876 100%);
  color: white;
  box-shadow: 
    0 4px 15px rgba(66, 185, 131, 0.4),
    0 0 0 1px rgba(66, 185, 131, 0.1) inset;
}

.btn-primary:hover {
  box-shadow: 
    0 8px 25px rgba(66, 185, 131, 0.6),
    0 0 0 1px rgba(66, 185, 131, 0.2) inset;
  transform: translateY(-5px);
}

.btn-secondary {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  box-shadow: 
    0 4px 15px rgba(52, 152, 219, 0.4),
    0 0 0 1px rgba(52, 152, 219, 0.1) inset;
}

.btn-secondary:hover {
  box-shadow: 
    0 8px 25px rgba(52, 152, 219, 0.6),
    0 0 0 1px rgba(52, 152, 219, 0.2) inset;
  transform: translateY(-5px);
}

/* Enhanced features section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px 0;
  margin-top: 30px;
}

.feature {
  padding: 40px 30px;
  text-align: center;
  position: relative;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
}

.feature:hover {
  transform: translateY(-10px) scale(1.03);
}

.feature-highlight {
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  opacity: 0.3;
  pointer-events: none;
  transition: all 0.3s ease;
}

.feature-icon-container {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  position: relative;
}

.feature-icon-container::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: pulse-border 2s infinite ease-in-out;
}

@keyframes pulse-border {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.feature-icon {
  font-size: 2.5rem;
}

.feature h2 {
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 1.5rem;
}

.feature p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* New technology showcase section */
.tech-showcase {
  margin: 60px auto;
  max-width: 1000px;
  padding: 50px 40px;
  text-align: center;
}

.tech-showcase h2 {
  margin-bottom: 40px;
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.tech-item {
  padding: 20px;
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-10px);
}

.tech-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.1);
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 15px;
}

.tech-item h3 {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero {
    padding: 50px 20px;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 20px 10px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .logo {
    height: 50px;
  }
  
  .feature {
    min-height: 300px;
    padding: 30px 20px;
  }
}
</style>
<template>
  <div class="home-container">
    <!-- Enhanced floating background elements -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>
    
    <!-- Professional hero section with enhanced glass effect -->
    <header class="hero ios-glass">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img src="../assets/logo.svg" alt="HealthGuard Logo" class="logo" />
        </div>
        <h1>Health<span>Guard</span></h1>
      </div>
      <p class="subtitle">Your Health Records, Simplified</p>
      
      <div class="cta-buttons">
        <router-link to="/login" class="btn btn-primary">
          <span class="btn-text">Access Your Records</span>
          <span class="btn-icon">→</span>
        </router-link>
        <router-link to="/register" class="btn btn-secondary">
          <span class="btn-text">Join HealthGuard</span>
          <span class="btn-icon">+</span>
        </router-link>
      </div>
    </header>
    
    <!-- Introduction section with enhanced iOS glass -->
    <section class="system-intro ios-glass">
      <h2>Your Health Information, Always at Hand</h2>
      <p class="intro-text">
        We designed HealthGuard with you in mind. A simple, secure way to keep track of your medical history 
        and communicate with your healthcare providers. Everything you need in one place, accessible whenever you need it.
      </p>
      
      <div class="intro-stats">
        <div class="stat-item ios-glass">
          <div class="stat-number">Simple</div>
          <div class="stat-label">Easy to Use</div>
        </div>
        <div class="stat-item ios-glass">
          <div class="stat-number">Secure</div>
          <div class="stat-label">Privacy Protected</div>
        </div>
        <div class="stat-item ios-glass">
          <div class="stat-number">Trusted</div>
          <div class="stat-label">By Doctors & Patients</div>
        </div>
      </div>
    </section>

    <!-- User roles section with card layout -->
    <section class="roles-section">
      <div class="role-card ios-glass">
        <div class="role-header">
          <div class="role-icon-container">
            <svg class="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="currentColor"/>
            </svg>
          </div>
          <h3>For You, The Patient</h3>
        </div>
        <ul class="feature-list">
          <li>See your complete health history in one place</li>
          <li>Understand your treatment plans and test results</li>
          <li>Download your records when needed</li>
          <li>Stay on top of appointments and medications</li>
          <li>Get reminders for upcoming visits</li>
        </ul>
      </div>
      
      <div class="role-card ios-glass">
        <div class="role-header">
          <div class="role-icon-container">
            <svg class="role-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3a1 1 0 0 1 1 1v5a6.002 6.002 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.775 1.237 1 1 0 1 1 1.932.496A5.502 5.502 0 0 1 13 22a5.5 5.5 0 0 1-5.225-3.787A4.988 4.988 0 0 1 5 14.5V4a1 1 0 0 1 1-1h2z" fill="currentColor"/>
            </svg>
          </div>
          <h3>For Your Healthcare Team</h3>
        </div>
        <ul class="feature-list">
          <li>Quick access to your complete medical profile</li>
          <li>Tools to update your records after each visit</li>
          <li>Easy searching of your past treatments</li>
          <li>Monitoring your health progress over time</li>
          <li>Creating comprehensive reports for your care</li>
        </ul>
      </div>
    </section>

    <!-- System features section with enhanced iOS glass -->
    <div class="features-wrapper">
      <section class="features-section ios-glass">
        <h2>Features Designed With Your Care in Mind</h2>
        
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Privacy Protection</h3>
            <p>Your information is only visible to you and your chosen healthcare providers.</p>
          </div>
          
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Complete Health Story</h3>
            <p>All your health records in one place, organized and easy to understand.</p>
          </div>
          
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Instant Updates</h3>
            <p>See new test results and doctor's notes as soon as they're available.</p>
          </div>
          
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Easy Sharing</h3>
            <p>Share your records with specialists or family members when needed.</p>
          </div>
          
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Test Results</h3>
            <p>View lab reports, imaging studies, and other diagnostics in simple terms.</p>
          </div>
          
          <div class="feature">
            <div class="feature-icon-container">
              <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm0-10v4h-2V5h-4V3h6v2zm-16 0v2H3V3h6v2H5z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Works With Other Systems</h3>
            <p>Connects with other healthcare platforms your providers might use.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Security cards with enhanced iOS glass -->
    <div class="security-wrapper">
      <section class="security-section">
        <h2>Your Trust Is Our Priority</h2>
        
        <div class="security-grid">
          <div class="security-item ios-glass">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M4 15h16v5H4v-5zm16-4H4v-3h16v3zm0-4H4V5h16v2zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 6h2v4H7V9zm4 0h2v4h-2V9zm4 0h2v4h-2V9z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Privacy Protected</h4>
            <p>We follow all health privacy laws to keep your information safe and confidential.</p>
          </div>
          
          <div class="security-item ios-glass">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zm4.452 5.173l1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Strong Encryption</h4>
            <p>Your data is protected with the same security technology used by major banks.</p>
          </div>
          
          <div class="security-item ios-glass">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z" fill="currentColor"/>
              </svg>
            </div>
            <h4>You Control Access</h4>
            <p>Only you decide which healthcare providers can see your information.</p>
          </div>
          
          <div class="security-item ios-glass">
            <div class="security-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Activity Tracking</h4>
            <p>See exactly who has viewed your records and when they accessed them.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- See HealthGuard in Action section -->
    <section class="testimonials-section">
      <h2>See HealthGuard in Action</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card ios-glass">
          <div class="image-container">
            <img src="../assets/doctor_headphonespexels-negativespace-48604.jpg" alt="Doctor with headphones" class="testimonial-image" />
            <div class="image-credit">Photo by Negative Space</div>
          </div>
          <div class="card-content">
            <h3>Virtual Consultations</h3>
            <p>Connect with healthcare providers remotely and discuss your medical records in real-time.</p>
          </div>
        </div>
        
        <div class="testimonial-card ios-glass">
          <div class="image-container">
            <img src="../assets/doctor_checking_his patients_ on tabletexels-tima-miroshnichenko-5355866.jpg" alt="Doctor checking patient records on tablet" class="testimonial-image" />
            <div class="image-credit">Photo by Tima Miroshnichenko</div>
          </div>
          <div class="card-content">
            <h3>Mobile Record Access</h3>
            <p>Healthcare professionals can access your information securely from any device, ensuring you receive informed care.</p>
          </div>
        </div>
        
        <div class="testimonial-card ios-glass">
          <div class="image-container">
            <img src="../assets/backshort_of_doctor_pexels-thirdman-5327647.jpg" alt="Doctor working at computer" class="testimonial-image" />
            <div class="image-credit">Photo by Thirdman</div>
          </div>
          <div class="card-content">
            <h3>Comprehensive Health Management</h3>
            <p>Doctors can view your complete medical history to make better informed decisions about your care.</p>
          </div>
        </div>
        
        <div class="testimonial-card ios-glass">
          <div class="image-container">
            <img src="../assets/doing_online_realtimeideo_online_consultancy_pexels-shvetsa-4225881.jpg" alt="Online video consultation" class="testimonial-image" />
            <div class="image-credit">Photo by Shvetsa</div>
          </div>
          <div class="card-content">
            <h3>Real-time Online Consultancy</h3>
            <p>Get expert medical advice through secure video calls while referencing your health records.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action section with enhanced iOS glass -->
    <section class="cta-section ios-glass">
      <h2>Ready to Take Control of Your Health Records?</h2>
      <p>Join thousands of patients who've simplified their healthcare experience with HealthGuard.</p>
      <div class="cta-buttons large">
        <router-link to="/register" class="btn btn-primary">
          <span class="btn-text">Create Your Account</span>
          <span class="btn-icon">→</span>
        </router-link>
        <router-link to="/login" class="btn btn-secondary">
          <span class="btn-text">Sign In</span>
          <span class="btn-icon">→</span>
        </router-link>
      </div>
    </section>
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
  
  // Enhanced iOS-style glass effect interactions
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
        // Calculate intensity based on distance (closer = stronger effect)
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
  
  // Add highlight elements to all glass elements
  const glassElements = document.querySelectorAll('.ios-glass');
  glassElements.forEach(el => {
    if (!el.querySelector('.highlight')) {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight');
      el.appendChild(highlight);
    }
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

/* Improved floating shapes */
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

.shape-5 {
  top: 20%;
  left: 30%;
  width: 350px;
  height: 350px;
  background: rgba(7, 224, 214, 0.4);
  animation-delay: -15s;
}

/* Hero section */
.hero {
  text-align: center;
  padding: 60px 40px;
  margin: 20px auto 60px;
  max-width: 800px;
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
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.logo {
  height: 60px;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 span {
  color: #51E06B;
  text-shadow: 0 0 20px rgba(81, 224, 107, 0.5);
}

.subtitle {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  font-weight: 300;
}

/* Button styles */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.cta-buttons.large .btn {
  padding: 18px 36px;
  font-size: 18px;
}

.btn {
  padding: 14px 28px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  min-width: 180px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
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
  transform: translateX(5px);
}

.btn-primary {
  background: rgba(7, 79, 224, 0.8);
  color: white;
  box-shadow: 
    0 4px 20px rgba(7, 79, 224, 0.4),
    0 0 0 1px rgba(7, 79, 224, 0.2) inset;
}

.btn-primary:hover {
  background: rgba(7, 79, 224, 0.9);
  box-shadow: 
    0 8px 30px rgba(7, 79, 224, 0.6),
    0 0 0 1px rgba(7, 79, 224, 0.3) inset;
  transform: translateY(-5px);
}

.btn-secondary {
  background: rgba(15, 225, 133, 0.8);
  color: white;
  box-shadow: 
    0 4px 20px rgba(15, 225, 133, 0.4),
    0 0 0 1px rgba(15, 225, 133, 0.2) inset;
}

.btn-secondary:hover {
  background: rgba(15, 225, 133, 0.9);
  box-shadow: 
    0 8px 30px rgba(15, 225, 133, 0.6),
    0 0 0 1px rgba(15, 225, 133, 0.3) inset;
  transform: translateY(-5px);
}

/* Introduction section */
.system-intro {
  max-width: 1000px;
  margin: 0 auto 60px;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.system-intro h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.intro-stats {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.stat-item {
  text-align: center;
  padding: 20px 30px;
  width: 180px;
  border-radius: 20px;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

/* User roles section */
.roles-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 2;
}

.role-card {
  padding: 30px;
  position: relative;
  transform-style: preserve-3d;
  height: 100%;
}

.role-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.role-icon-container {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  position: relative;
}

.role-icon {
  width: 24px;
  height: 24px;
  color: #ffffff;
}

.role-header h3 {
  font-size: 1.4rem;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.feature-list {
  padding-left: 25px;
  position: relative;
  z-index: 2;
}

.feature-list li {
  margin-bottom: 12px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

/* Features section */
.features-wrapper {
  max-width: 1200px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 2;
}

.features-section {
  padding: 40px;
}

.features-section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
}

.feature {
  text-align: center;
  padding: 20px;
  position: relative;
}

.feature-icon-container {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  position: relative;
}

.feature-icon {
  width: 30px;
  height: 30px;
  color: #ffffff;
}

.feature h3 {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 1.2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.feature p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
}

/* Security section */
.security-wrapper {
  max-width: 1200px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 2;
}

.security-section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.security-item {
  text-align: center;
  padding: 30px 20px;
  position: relative;
  border-radius: 24px;
  height: 100%;
}

.security-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  position: relative;
  z-index: 2;
}

.security-icon svg {
  width: 25px;
  height: 25px;
  color: #ffffff;
}

.security-item h4 {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 1.2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.security-item p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
  position: relative;
  z-index: 2;
}

/* Testimonials section */
.testimonials-section {
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.testimonials-section h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
}

.testimonial-card {
  padding: 20px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  text-align: left;
}

.image-container {
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
}

.testimonial-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-credit {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-content h3 {
  font-size: 1.4rem;
  margin: 0 0 10px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-content p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0;
  font-size: 0.95rem;
}

/* CTA section */
.cta-section {
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 50px 30px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

/* Media queries for enhanced responsiveness */
@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .system-intro {
    padding: 30px 20px;
  }
  
  .intro-stats {
    gap: 20px;
  }
  
  .stat-item {
    width: 130px;
    padding: 15px;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  
  .security-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 20px 15px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .logo {
    height: 50px;
  }
  
  .system-intro h2,
  .features-section h2,
  .security-section h2,
  .cta-section h2 {
    font-size: 1.6rem;
  }
  
  .role-card {
    padding: 20px;
  }
}
</style>
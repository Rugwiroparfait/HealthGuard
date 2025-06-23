import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Doctor views
import DoctorDashboardView from '../views/doctor/DashboardView.vue'
import PatientRecordView from '../views/doctor/PatientRecordView.vue'
import CreateRecordView from '../views/doctor/CreateRecordView.vue'
import EditRecordView from '../views/doctor/EditRecordView.vue'

// Patient views
import PatientDashboardView from '../views/patient/DashboardView.vue'

// Auth store
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    // Doctor routes
    {
      path: '/doctor/dashboard',
      name: 'doctor-dashboard',
      component: DoctorDashboardView,
      meta: { requiresAuth: true, requiresDoctor: true }
    },
    {
      path: '/doctor/patients/:id',
      name: 'patient-records',
      component: PatientRecordView,
      meta: { requiresAuth: true, requiresDoctor: true }
    },
    {
      path: '/doctor/patients/:id/create',
      name: 'create-record',
      component: CreateRecordView,
      meta: { requiresAuth: true, requiresDoctor: true }
    },
    {
      path: '/doctor/records/:id/edit',
      name: 'edit-record',
      component: EditRecordView,
      meta: { requiresAuth: true, requiresDoctor: true }
    },
    // Patient routes
    {
      path: '/patient/dashboard',
      name: 'patient-dashboard',
      component: PatientDashboardView,
      meta: { requiresAuth: true, requiresPatient: true }
    },
    // 404 not found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next({ name: 'login' })
  }
  
  // Check if route requires doctor role
  if (to.meta.requiresDoctor && !authStore.isDoctor) {
    return next({ name: 'home' })
  }
  
  // Check if route requires patient role
  if (to.meta.requiresPatient && !authStore.isPatient) {
    return next({ name: 'home' })
  }
  
  next()
})

export default router
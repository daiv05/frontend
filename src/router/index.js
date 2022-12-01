import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartamentoView from '../views/DepartamentoView.vue'
import AlquilerView from '../views/CrearPublicacion.vue'
import subir_foto from '../views/subir_foto.vue'
import VerCardAlquiler from '../views/VerCardAlquiler.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vercard',
    name: 'vercard',
    component: VerCardAlquiler
  },
  {
    path: '/departamento',
    name: 'departamento',
    component: DepartamentoView
  },
  {
    path: '/edit_alquiler',
    name: 'alquiler_edit',
    component: AlquilerView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : "/login",
    name : "login",
    component : () => import('../views/ViewFormLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

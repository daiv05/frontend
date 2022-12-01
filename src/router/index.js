import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartamentoView from '../views/DepartamentoView.vue'
import AlquilerView from '../views/CrearPublicacion.vue'
import modificarPublicacion from '../views/modificarPublicacion.vue'
import subir_foto from '../views/subir_foto.vue'
import Alquiler from '../views/AlquilerView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/modificar_publicacion',
    name: 'Mod_Publicacion',
    component: modificarPublicacion
  },
  {
    path: '/alquiler',
    name: 'alquiler',
    component: Alquiler
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
  },
  {
    path : "/register",
    name : "register",
    component : () => import("../views/RegisterView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

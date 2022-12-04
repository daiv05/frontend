import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartamentoView from '../views/DepartamentoView.vue'
import AlquilerView from '../views/CrearPublicacion.vue'
import modificarPublicacion from '../views/modificarPublicacion.vue'
import subir_foto from '../views/subir_foto.vue'
import VerCardAlquiler from '../views/VerCardAlquiler.vue'
import { store } from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vercard',
    name: 'vercard',
    meta : {
      requiresAuth : true
    },
    component: VerCardAlquiler
    
  },
  {
    path: '/departamento',
    name: 'departamento',
    meta : {
      requiresAuth : true
    },
    component: DepartamentoView,
  },
  {
    path: '/edit_alquiler',
    name: 'alquiler_edit',
    meta : {
      requiresAuth : true
    },
    component: AlquilerView
  },
  {
    path: '/modificar_publicacion',
    name: 'Mod_Publicacion',
    meta : {
      requiresAuth : true
    },
    component: modificarPublicacion
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
  },
  {
    path : "/room",
    name : "room",
    meta : {
      requiresAuth : true
    },
    component : () => import("../views/home.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router

router.beforeEach((to,from,next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)){ 
      if(store.state.auth){
          next()
      }
      else{
        next({name:"login"})
      }
  }
  else{
    next()
  }
})

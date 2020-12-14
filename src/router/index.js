import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/SitioWebInfo/Nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'Nosotros',
    component: Home
  },
  {
    path: '/contactos',
    name: 'Contactos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SitioWebInfo/Contactos.vue')
  },
  {
    path: '/avisos',
    name: 'Avisos',
    component: () => import('../views/SitioWebInfo/AvisosLegales.vue')
  },
  {
    path: '/soyclienteenvia',
    name: 'ClienteEnvia',
    component: () => import('../views/SitioWebInfo/SoyClienteEnvia.vue')
  },
  {
    path: '/soytransportista',
    name: 'SoyTransportista',
    component: () => import('../views/SitioWebInfo/SoyTransportista.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/GestionUsuarios/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/GestionUsuarios/Registro.vue')
  },
  {
    path: '/ejemplo',
    name: 'Tablero',
    component: () => import('../views/Ejemplo.vue')
  },
  {
    path: '/envios',
    name: 'Envios',
    component: () => import('../views/UserEnvia/Envios/PublicarEnvio.vue')
  },
  {
    path: '/mensajes',
    name: 'Mensajes',
    component: () => import('../views/UserEnvia/Mensajes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

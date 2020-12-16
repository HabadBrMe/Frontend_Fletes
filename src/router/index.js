import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/SitioWebInfo/Nosotros.vue'
import store from '@/store/index.js'

const routes = [{
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SitioWebInfo/Contactos.vue')
    },
    {
        path: '/avisos',
        name: 'Avisos',
        component: () =>
            import ('../views/SitioWebInfo/AvisosLegales.vue')
    },
    {
        path: '/soyclienteenvia',
        name: 'ClienteEnvia',
        component: () =>
            import ('../views/SitioWebInfo/SoyClienteEnvia.vue')
    },
    {
        path: '/soytransportista',
        name: 'SoyTransportista',
        component: () =>
            import ('../views/SitioWebInfo/SoyTransportista.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/GestionUsuarios/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/GestionUsuarios/Registro.vue')
    },
    //----------------------Usuarios----------------------------------------------
    {
        path: '/ejemplo',
        name: 'Tablero',
        component: () =>
            import ('../views/Ejemplo.vue')
    },
    {
        path: '/mensajes',
        name: 'Mensajes',
        component: () =>
            import ('../views/UserEnvia/Mensajes.vue'),
        meta: {
            requiresAuth: true
        }
    },
    //-----------------------Usuario que envia------------------------------------------
    {
        path: '/envios',
        name: 'Envios',
        component: () =>
            import ('../views/UserEnvia/Envios/PublicarEnvio.vue'),
        meta: {
            requiresAuth: true,
            requiresRol: "Cliente que envia"
        }
    },

    {
        path: '/calificaciones',
        name: 'Calificaciones',
        component: () =>
            import ('../views/UserEnvia/Envios/Calificaciones/CalificarTransportista.vue'),
        meta: {
            requiresAuth: true,

        }
    },
    //-----------------------Usuario transportista--------------------------------------
    {
        path: '/vehiculos',
        name: 'Vehiculos',
        component: () =>
            import ('../views/UsuarioTransportista/moduloVehiculo/Vehiculos.vue'),
        meta: {
            requiresAuth: true,
            requiresRol: "Transportista"
        }
    },
    {
        path: '/choferes',
        name: 'Choferes',
        component: () =>
            import ('../views/UsuarioTransportista/moduloChofer/Choferes.vue'),
        meta: {
            requiresAuth: true,
            requiresRol: "Transportista"
        }
    },
    //-----------------------Usuario monitorista----------------------------------------
    {
        path: '/monitoreo',
        name: 'Monitoreo',
        component: () =>
            import ('../views/UserEnvia/Mensajes.vue'),
        meta: {
            requiresAuth: true,
            requiresRol: "Monitorista"
        }
    },
    {
        path: '/historial',
        name: 'Historial',
        component: () =>
            import ('../views/UserEnvia/Mensajes.vue'),
        meta: {
            requiresAuth: true,
            requiresRol: "Monitorista"
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.Uinfo && localStorage.Utoken && localStorage.Urole) {
            store.commit('saveUser')
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nuevo from '../views/Nuevo.vue'
import almacenamiento from '../views/ConvertirAlmacenamiento.vue'
import masa from '../views/ConvertirMasa.vue'
import longitud from '../views/ConvertirLongitud.vue'
import tiempo from '../views/ConvertirTiempo.vue'
import monedas from '../views/ConvertirMonedas.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'/nuevo',
    name:'Nuevo',
    component:Nuevo
  },

  {
    path:'/almacenamiento',
    name:'Almacenamiento',
    component: almacenamiento
  },
  {
    path:'/masa',
    name:'Masa',
    component: masa
  },
  {
    path:'/longitud',
    name:'Longitud',
    component: longitud
  },

  {
    path:'/tiempo',
    name:'Tiempo',
    component: tiempo
  },
  {
    path:'/monedas',
    name:'Monedas',
    component: monedas
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

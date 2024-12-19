import { createRouter, createWebHistory } from 'vue-router';
import Event from '../components/Event.vue';
import Faqs from '../components/Faqs.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Shop from '../components/Shop/Shop.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // page routes
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: Faqs
    },

    // auth routes
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

    // Redirect root path to '/5173/home'
    {
      path: '/',
      redirect: '/home', 
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/home',
    }
  ]
})

export default router;

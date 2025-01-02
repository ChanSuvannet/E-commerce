import { createRouter, createWebHistory } from 'vue-router';
import Event from '../components/Event.vue';
import Faqs from '../components/Faqs.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import CardList from '../components/Shop/CardList.vue';
import Shop from '../components/Shop/Shop.vue';
import ShopCard from '../components/Shop/ShopCard.vue';
import ShopCardDetail from '../components/Shop/ShopCardDetail.vue';

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
      component: Shop,
      children: [
        {
          path: '',
          name: 'all',
          component: ShopCard,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: ShopCardDetail,
        },
        {
          path: 'list',
          name: 'list',
          component: CardList,
        }
      ],
    },
    
    {
      path: '/event',
      name: 'event',
      component: Event,
         
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
    },

  ]
})

export default router;

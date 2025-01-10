import { createRouter, createWebHistory  } from 'vue-router';
import Event from '../components/Event.vue';
import Faqs from '../components/Faqs.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import CardList from '../components/Shop/CardList.vue';
import Shop from '../components/Shop/Shop.vue';
import ShopCard from '../components/Shop/ShopCard.vue';
import ShopCardDetail from '../components/Shop/ShopCardDetail.vue';

import Book from '../components/Shop/Category/Book.vue';
import Sticker from '../components/Shop/Category/Sticker.vue'
import OfficeMaterial from '../components/Shop/Category/OfficeMaterial.vue'
import Pen from '../components/Shop/Category/Pen.vue';
import Pencil from '../components/Shop/Category/Pencil.vue';
import Ruler from '../components/Shop/Category/Ruler.vue';


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
      path: '/shop/list',
      name: 'list',
      component: CardList,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: 'category/ruler',
          name: 'ruler',
          component: Ruler
        },
        {
          path: 'category/book',
          name: 'book',
          component: Book
        },
        {
          path: 'category/pen',
          name: 'pen',
          component: Pen
        },
        {
          path: 'category/pencil',
          name: 'pencil',
          component: Pencil
        },
        {
          path: 'category/sticker',
          name: 'sticker',
          component: Sticker
        },
        {
          path: 'category/officematerial',
          name: 'officematerial',
          component: OfficeMaterial
        },
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

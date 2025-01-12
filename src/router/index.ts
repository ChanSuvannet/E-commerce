import { createRouter, createWebHistory  } from 'vue-router';
import Event from '../components/Event.vue';
import Faqs from '../components/Faqs.vue';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Shop from '../components/Shop.vue';


import CardList from '../views/Shop/CardList.vue';
import ShopCard from '../views/Shop/ShopCard.vue';
import ShopCardDetail from '../views/Shop/ShopCardDetail.vue';
import Book from '../views/Shop/Category/Book.vue';
import Sticker from '../views/Shop/Category/Sticker.vue'
import OfficeMaterial from '../views/Shop/Category/OfficeMaterial.vue'
import Pen from '../views/Shop/Category/Pen.vue';
import Pencil from '../views/Shop/Category/Pencil.vue';
import Ruler from '../views/Shop/Category/Ruler.vue';


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
      path: '/checkout',
      name: 'checkout',
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

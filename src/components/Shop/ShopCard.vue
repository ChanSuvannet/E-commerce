<template>
    <div id="app">
      <div v-for="product in products" :key="product.title" class="card">
        <img :src="product.image" :alt="product.title" class="product-image"/>
        <h3 class="title">{{product.title}}</h3>
        <div class="rating">
          <div class="stars">
            <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= product.rating }">★</span>
          </div>
          <span class="reviews">{{product.reviews}} Reviews</span>
        </div>
        <div class="price">
          <span class="current">${{ product.currentPrice }}</span>
          <span class="original">${{ product.originalPrice }}</span>
          <span class="discount">{{ product.discount }}</span>
        </div>
        <div class="buttons">
          <RouterLink :to="`/shop/detail/${product.id}`" class="buy-now">Buy Now</RouterLink>
          <button @click="addToCart(product.title)" class="add-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Add to cart
          </button>
          <!-- Show the Cart Notification -->
          <!-- Show the Cart Notification -->
           <CartNotification v-if="cartStore.notificationMessage" :message="cartStore.setNotificationMessage" />
        </div>
      </div>
    </div>
  </template>
  
<script>
import { computed } from 'vue';
import book from '../../assets/shop/book.png'
import caculator from '../../assets/shop/caculator.png'
import {useCartstore} from '../../stores/counter'
import CartNotification from './CartNotification.vue'
  
  export default {
    name: 'ShopCard',
    components: {
      CartNotification
    },
    computed: {
      cartStore() {
        return useCartstore();
      }
    },

    methods: {
      addToCart(title) {
        // console.log(`Added to cart: ${title}`);
        let message = 'Added to cart: ' + title ;
        const cartStore = useCartstore();
        cartStore.setNotificationMessage(message);  // Set the notification message
        cartStore.addItemToCart(); // Update the global store count
      },

    },
    data() {
      return {
        products: [
          {
            id: 1,
            image: book,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 2,
            image: book,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 3,
            image: book,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 4,
            image: book,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 5,
            image: book,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 6,
            image: caculator,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 7,
            image: caculator,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 8,
            image: caculator,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
          {
            id: 9,
            image: caculator,
            title: 'Black Notebook',
            rating: 4,
            reviews: '4,778',
            currentPrice: '1.60',
            originalPrice: '2.00',
            discount: '20% Off',
          },
  
        ],
      }
    },
    
  }
  </script>
  
  <style scoped>
  #app {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    width: calc(25% - 15px); 
    padding: 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 100%;
    height: 180px;
    object-fit: contain;
    margin-bottom: 12px;
  }
  
  .title {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
  }
  
  .rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  
  .stars {
    display: flex;
    gap: 2px;
  }
  
  .star {
    color: #ddd;
    font-size: 18px;
  }
  
  .star.filled {
    color: #ff9800;
  }
  
  .reviews {
    color: #666;
    font-size: 14px;
  }
  
  .price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .current {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  
  .original {
    color: #999;
    text-decoration: line-through;
    font-size: 14px;
  }
  
  .discount {
    color: #e53935;
    font-size: 14px;
    font-weight: 500;
  }
  
  .buttons {
    display: flex;
    gap: 8px;
  }
  
  .buy-now {
    background: #002966;
    padding: 2px 2px;
    padding: 8px 10px;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .add-cart {
    flex: 1;
    padding: 8px;
    background: rgb(231, 228, 228);
    color: #333;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

  }
  
  .add-cart svg {
    width: 16px;
    height: 16px;
  }
  
  .buy-now:hover {
    background: #001f4d;
  }
  
  .add-cart:hover {
    background: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
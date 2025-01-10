<template>
  <div id="app">
    <div v-for="product in products" :key="product.title" class="card">
      <img :src="product.image" :alt="product.title" class="product-image"/>
      <div class="title-container"><h3 class="title">{{product.title}}</h3></div>
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
      </div>
    </div>
     <!-- Show the Cart Notification -->
    <CartNotification v-if="message" :message="message"  />
  </div>
</template>

<script>
import { computed } from 'vue';
import {useCartstore} from '../../../stores/counter'
import CartNotification from '../CartNotification.vue'
import {useProductStore } from '../../../stores/useProductStore'

export default {
  name: 'OfficeMaterial',
  components: {
    CartNotification
  },
  data() {
      return {
        notificationMessage : false,
        setNotificationMessage: '',
      }
  },
  methods: {
    addToCart(title) {
      this.cartStore.addItemToCart();
      this.cartStore.showNotifications(title);
      this.cartStore.hideNotifications(title); 
    }
  },
  computed: {
    cartStore() {
      return useCartstore();
    },
    products() {
      const productStore = useProductStore();
      const start = 15;
      const end = 24;
      return productStore.getLimitProducts(start, end);
    },
    message() {
      return this.cartStore.message; 
    }
  },

  
}
</script>

<style scoped>



#app {
display: flex;
flex-wrap: wrap;
gap: 5px; 
}
@media (max-width: 768px) {
#app{
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
  gap: 5px;
}

.notification {
position: fixed;
top: 20px;
right: 20px;
background-color: #4caf50;
color: white;
padding: 10px 20px;
border-radius: 5px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.buy-now, .add-cart {
  font-size: 10px;
  padding: 4px 6px;
}

.add-cart svg {
  width: 12px;
  height: 12px;
}
}
/* .card {
width: 250px; 
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
overflow: hidden;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
transition: transform 0.2s ease, box-shadow 0.2s ease;
} */

.card {
width: 100%; 
max-width: 220px; 
margin: 0 auto; 
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
overflow: hidden;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
transition: transform 0.2s ease, box-shadow 0.2s ease;
} 



.card:hover {
transform: translateY(-5px);
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
width: 100%;
height: 150px; 
object-fit: contain ;
background: #f8f8f8;
}
.title-container{
width: 100%;
}

.title {
font-size: 13px;
font-family: 'Roboto', sans-serif;
font-weight: bold;
width: 100%;
text-align: center;
margin-bottom: 8px;
color: #333;
}

.rating {
display: flex;
align-items: center;
gap: 6px;
}

.stars {
display: flex;
gap: 2px;
}

.star {
color: #ddd;
font-size: 14px; 
}

.star.filled {
color: #ffa41b;
}

.reviews {
font-size: 12px;
color: #888;
}

.price {
display: flex;
align-items: baseline;
gap: 6px;
margin-bottom: 12px;
}

.current {
font-size: 16px; 
font-weight: bold;
color: #1a73e8; 
}

.original {
font-size: 12px; 
text-decoration: line-through;
color: #999;
}

.discount {
font-size: 12px;
color: #e63946; 
}

.buttons {
display: flex;
gap: 6px;
width: 100%;
justify-content: space-around ;
}

.buy-now {
flex: 1;
text-align: center;
padding: 8px 4px; /* Reduced padding */
background-color: #1a73e8;
color: white;
border-radius: 4px;
font-size: 10px; /* Reduced font size */
font-weight: bold;
text-decoration: none;
transition: background-color 0.2s ease;
font-size: small;

}

.buy-now:hover {
background-color: #155bb5;
}

.add-cart {
flex: 1;
display: flex;
align-items: center;
justify-content: center;
padding: 5px 10px; /* Reduced padding */
border: 1px solid #1a73e8;
color: #1a73e8;
background-color: white;
border-radius: 4px;
font-size: 10px; /* Reduced font size */
font-weight: bold;
cursor: pointer;
transition: background-color 0.2s ease, color 0.2s ease;
}

.add-cart:hover {
background-color: #1a73e8;
color: white;
}

.add-cart svg {
stroke: currentColor;
}

@media (max-width: 480px) {
#app {
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
}
}

</style>
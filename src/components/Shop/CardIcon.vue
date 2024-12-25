<template>
  <div id="app">
    <div v-for="product in products" :key="product.title" class="card">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h3 class="title">{{ product.title }}</h3>
      <div class="rating">
        <div class="stars">
          <span
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{ filled: n <= product.rating }"
          >
            ★
          </span>
        </div>
        <span class="reviews">{{ product.reviews }} Reviews</span>
      </div>
      <div class="price">
        <span class="current">${{ product.currentPrice }}</span>
        <span class="original">${{ product.originalPrice }}</span>
        <span class="discount">{{ product.discount }}</span>
      </div>
      <div class="buttons">
        <RouterLink :to="`/shop/detail/${product.id}`" class="buy-now">
          Buy Now
        </RouterLink>
        <button @click="addToCart(product.title)" class="add-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store";

export default {
  name: "Cart",
  data() {
    return {
      products: [
        {
          title: "Product 1",
          image: "image1.jpg",
          rating: 4,
          reviews: 120,
          currentPrice: 50,
          originalPrice: 70,
          discount: "20% off",
          id: 1,
        },
        // Add more products here
      ],
    };
  },
  methods: {
    addToCart(title) {
      console.log(`Added to cart: ${title}`);
      store.addItemToCart(); // Update the global store
    },
  },
};
</script>

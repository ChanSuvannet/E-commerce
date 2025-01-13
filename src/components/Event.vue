<template>
  <div class="event-page">
    <PromoSection />
    <div class="slider" ref="slider" @scroll="handleScroll">
      <img
        id="slider1"
        src="/src/image/pro.png"
        alt="Christmas Image 1"
        class="image"
        @click="navigateTo('/shop')"
      />
      <img
        id="slider2"
        src="/src/image/pro1.png"
        alt="Christmas Image 2"
        class="image"
        @click="navigateTo('/shop')"
      />
      <img
        id="slider3"
        src="/src/image/pro2.png"
        alt="Christmas Image 3"
        class="image"
        @click="navigateTo('/shop')"
      />
    </div>
    <div class="slider-nav">
      <a
        href="#slider1"
        :class="{ active: currentSlide === 0 }"
        @click.prevent="scrollToSlide(0)"
      ></a>
      <a
        href="#slider2"
        :class="{ active: currentSlide === 1 }"
        @click.prevent="scrollToSlide(1)"
      ></a>
      <a
        href="#slider3"
        :class="{ active: currentSlide === 2 }"
        @click.prevent="scrollToSlide(2)"
      ></a>
    </div>

    <!-- Discount Filter Buttons -->
    <div class="discount-buttons">
      <button @click="selectDiscount('All')">All Discounts</button>
      <button @click="selectDiscount('10% Off')">10% Off</button>
      <button @click="selectDiscount('20% Off')">20% Off</button>
      <button @click="selectDiscount('25% Off')">25% Off</button>
      <button @click="selectDiscount('30% Off')">30% Off</button>
      <button @click="selectDiscount('50% Off')">50% Off</button>
    </div>

    <!-- Display filtered products -->
    <div v-if="filteredProducts.length > 0" class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      <div v-for="product in filteredProducts" :key="product.id">
        <div class="w-auto min-h-[435px] h-auto cursor-pointer space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
          <div class="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-hover duration-300 ease-in-out">
            <img :src="product.image" :alt="product.title" class="product-image scale-95 rounded-lg min-h-[220px]" />
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p class="text-lg font-bold">{{ product.title }}</p>
              <div class="flex justify-between items-center">
                <!-- Star Ratings -->
                <div class="stars flex">
                  <span v-for="n in 5" :key="n" class="text-gray-400 text-lg" :class="{ 'text-yellow-500': n <= product.rating }">
                    ★
                  </span>
                </div>
                <!-- Number of Reviews -->
                <span class="text-gray-600 text-sm ml-2">{{ product.reviews }} Reviews</span>
              </div>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900">${{ product.currentPrice }}</p>
                <p class="text-base font-medium text-gray-500 line-through">${{ product.originalPrice }}</p>
                <p class="ml-auto text-base font-medium text-red-500">{{ product.discount }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between pt-3 gap-4">
              <router-link :to="`/shop/detail/${product.id}`" class="flex justify-center items-center w-full px-1 py-2.5 rounded-lg font-medium text-white bg-[#022d5a] hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                Buy Now
              </router-link>
              <button @click="addToCart(product)" class="flex justify-center items-center w-full px-1 py-2.5 rounded-lg font-medium text-[#022d5a] border-[#022d5a] border hover:bg-[#022d5a] hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span class="ml-2">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- If no products are found -->
    <p v-else class="font-3xl font-semibold">No products found with this discount.</p>

    <!-- Pagination Controls -->
    <div v-if="!loading" class="flex items-end justify-center w-full mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-10 text-base">
          
        </ul>
      </nav>
    </div>

    <!-- Show the Cart Notification -->
    <CartNotification v-if="notificationMessage" :message="notificationMessage" />
  </div>
</template>
<script>
import { computed } from 'vue';
import { useCartstore } from '../stores/counter';
import CartNotification from '../views/Shop/CartNotification.vue';
import { useProductStore } from '../stores/useProductStore';
import PromoSection from '../views/Event/PromoSection.vue';

export default {
  name: 'Event',
  components: {
    CartNotification,
    PromoSection,
  },
  data() {
    return {
      selectedDiscount: 'All', // Default to "All Discounts"
      notificationMessage: "", // Message to be shown when adding a product to cart
    };
  },

  computed: {
    filteredProducts() {
      const productStore = useProductStore();
      return productStore.products.filter(product => {
        // Check if the product discount matches the selected discount filter
        if (this.selectedDiscount === 'All') {
          return true; // No discount filter applied
        } else {
          return product.discount === this.selectedDiscount;
        }
      });
    },
  },

  methods: {
    selectDiscount(discount) {
      this.selectedDiscount = discount; // Update the selected discount filter
    },

    addToCart(product) {
      const cartStore = useCartstore();
      cartStore.addToCart(product);
      this.notificationMessage = `${product.title} added to cart!`;
      setTimeout(() => {
        this.notificationMessage = "";
      }, 2000);
    },
  },
};
</script>
<style>
/* Slider and Navigation */
.slider-wrapper {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.slider {
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slider img {
  flex: 0 0 100%; /* Full slide width */
  scroll-snap-align: start;
  object-fit: cover; /* Make the image cover the container */
  border-radius: 10%;
  height: 90%;
  transition: transform 0.3s ease; /* Smooth zoom effect */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
}

.slider img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.slider-nav {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  top: 142%; /* Adjusted to place at the bottom */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.slider-nav a {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #0f1253;
  opacity: 0.75;
  transition: opacity 0.3s, background-color 0.3s ease;
  display: inline-block;
  cursor: pointer;
}

.slider-nav a.active {
  opacity: 1;
  background-color: #ffff;
}


/* Discount Buttons */
.discount-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.discount-buttons button {
  padding: 12px 20px;
  background-color: #022d5a;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 150px;
  margin: 5px;
}

.discount-buttons button:hover {
  background-color: #0d3b6c;
}

/* Product Image */
.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

/* Product Card */
.product-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-details {
  padding: 15px;
}

.product-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1.1rem;
  color: #022d5a;
  font-weight: 600;
}

.product-rating {
  display: flex;
  gap: 5px;
}

.product-rating span {
  font-size: 1.2rem;
  color: gold;
}
</style>

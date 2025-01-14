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
      <button @click="selectDiscount('50% Off')">50% Off</button>
      <button @click="selectDiscount('30% Off')">30% Off</button>
      <button @click="selectDiscount('20% Off')">20% Off</button>
      
    </div>

    <div
      v-if="filteredProducts.length > 0"
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 pl-48  h-screen pr-48 justify-center"
    >
      <div v-for="product in filteredProducts" :key="product.id">
        <!-- Navigate to product details on click -->
        <router-link :to="`/shop/detail/${product.id}`" class="w-full">
          <div
            class="w-full h-auto cursor-pointer space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
          >
            <div
              class="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 p-4"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="object-contain w-[150px] h-[150px] rounded-lg"
              />
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <!-- Product Title -->
              <p class="text-md font-semibold text-gray-800">
                {{ product.title }}
              </p>
              <!-- Star Ratings and Reviews -->
              <div class="flex justify-between items-center">
                <div class="stars flex">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="text-gray-400 text-sm"
                    :class="{ 'text-yellow-500': n <= product.rating }"
                  >
                    ★
                  </span>
                </div>
                <span class="text-gray-600 text-xs">
                  {{ product.reviews }} Reviews
                </span>
              </div>
              <!-- Prices and Discount -->
              <div class="flex items-center">
                <p class="mr-2 text-lg font-bold text-gray-900">
                  {{ product.currentPrice }}
                </p>
                <p class="text-sm font-medium text-gray-500 line-through">
                  {{ product.originalPrice }}
                </p>
                <p class="ml-auto text-sm font-medium text-red-500">
                  {{ product.discount }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductStore } from "../stores/productStore";
import PromoSection from "../views/Event/PromoSection.vue";

export default {
  name: "Event",
  components: {
    PromoSection,
  },
  data() {
    return {
      notificationMessage: "", // Message to be shown when adding a product to cart
    };
  },
  computed: {
    filteredProducts() {
      const store = ProductStore(); // Accessing the store
      return store.filteredProducts;
    },
  },
  methods: {
    selectDiscount(discount) {
      const store = ProductStore(); // Accessing the store
      store.selectDiscount(discount); // Update the selected discount filter in the store
    },
    navigateTo(path) {
      this.$router.push(path); // Navigate programmatically
    },
    handleScroll() {
      // Placeholder for scroll handling logic
    },
  },
};
</script>

<style scoped>
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
  padding-top: 2%;
  padding-bottom: 5%;
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

/* Slider image */
.slider img {
  flex: 0 0 100%; /* Full slide width */
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  scroll-snap-align: start;
  object-fit: cover; /* Make the image cover the container */
  border-radius: 10%;
  height: 90%;
  transition: transform 0.3s ease; /* Smooth zoom effect */
}

.slider img:hover {
  transform: scale(1.1); /* Only apply scale effect on hover */
}

/* Add a new class for the active state (on click) */
.slider img.active {
  filter: brightness(1.2); /* Apply brightness only when clicked */
}

.slider-nav {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  top: 150%;
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
  object-fit: contain;
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
  transition: transform 0.3s ease, box-shadow 0s ease;
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

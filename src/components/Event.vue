<template>
  <div>
    <PromoSection />
    <div class="slider-wrapper">
      <div class="slider" ref="slider" @scroll="handleScroll">
        <img
          id="slider1"
          src="/src/image/pro.png"
          alt="Christmas Image 1"
          class="image"
          @click="navigateTo('shop')"
        />
        <img
          id="slider2"
          src="/src/image/pro1.png"
          alt="Christmas Image 2"
          class="image"
          @click="navigateTo('shop')"
        />
        <img
          id="slider3"
          src="/src/image/pro2.png"
          alt="Christmas Image 3"
          class="image"
          @click="navigateTo('shop')"
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
    </div>

    <!-- Promotion and Discount Section -->
    <div class="discount">
      <p>Promotion and Discount</p>
      <button>
        <ul class="countdown-list">
          <li @click="handleClick('20% Off')">Discount 20%</li>
          <li @click="handleClick('10% Off')">Discount 10%</li>
          <li @click="handleClick('Buy One Get One')">Buy One Get One</li>
        </ul>
      </button>
    </div>

    <!-- Discounted Products List -->
    <div class="product-list">
      <div v-if="filteredProducts.length > 0">
        <div v-for="product in filteredProducts" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.title" class="product-image" />
          <div class="product-details">
            <h4>{{ product.title }}</h4>
            <p>Price: ${{ product.currentPrice }} <span class="original-price">${{ product.originalPrice }}</span></p>
            <p>Discount: {{ product.discount }}</p>
            <button @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No products found for this discount.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCartstore } from '../stores/counter';
import PromoSection from './PromoSection.vue';
// import { useProductStore } from '../stores/useProductStore';
export default {
  name: 'Event',
  components: {
    PromoSection,
  },
  data() {
    return {
      
      selectedDiscount: '',  // Store selected discount type
      filteredProducts: [],  // Store filtered products
    };
  },
  methods: {
    // Handle discount selection and filter products accordingly
    handleClick(discount) {
      this.selectedDiscount = discount;
      this.filterProductsByDiscount(discount);
    },

    // Filter products based on the selected discount
    filterProductsByDiscount(discount) {
      const productStore = useProductStore();
      if (discount === '20% Off') {
        this.filteredProducts = productStore.getProductsByDiscount('20% Off');
      } else if (discount === '10% Off') {
        this.filteredProducts = productStore.getProductsByDiscount('10% Off');
      } else if (discount === 'Buy One Get One') {
        this.filteredProducts = productStore.getProductsByDiscount('Buy One Get One');
      }
    },

    // Navigate to another page when image is clicked
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style scoped>
.slider-wrapper {
  position: relative;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
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
  flex: 0 0 100%;
  scroll-snap-align: start;
  object-fit: cover;
  width: 100%;
  height: 90%;
  transition: transform 0.3s ease;
}

.slider img:hover {
  transform: scale(1.1);
}

.slider-nav {
  display: flex;
  column-gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.slider-nav a {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #0f1253;
  opacity: 0.75;
  transition: opacity 0.3s;
  display: inline-block;
  cursor: pointer;
}

.slider-nav a.active {
  opacity: 1;
  background-color: #ffff;
}

.discount {
  font-family: Arial, Helvetica, sans-serif;
  color: #0f1253;
  font-weight: bold;
  font-size: 48px;
}

.countdown-list {
  display: flex;
  flex-direction: row; /* Arrange items in a row */
  gap: 20px; /* Adds space between items */
  justify-content: center; /* Center the items horizontally */
  overflow-x: auto; /* Add horizontal scrolling if needed */
}

.countdown-list li {
  color: rgb(0, 0, 0);
  font-size: 28px;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0; /* Optional for visibility */
}


@media (max-width: 600px) {
  .slider img {
    max-height: 250px;
  }
}

@media (min-width: 600px) and (max-width: 1024px) {
  .slider img {
    max-height: 400px;
  }
}

@media (min-width: 1024px) {
  .slider img {
    max-height: 1000px;
  }
}
</style>

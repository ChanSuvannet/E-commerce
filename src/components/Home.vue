<template>
  <div v-if="loading">
    <div class="w-full h-screen flex justify-center items-center z-999">
      <div class="loader"></div>
    </div>
  </div>
  <div v-if="!loading">
    <div>
      <!-- section one  -->
      <div class="flex justify-between items-center py-12 px-20">
        <div
          class="w-full md:w-[50%] flex flex-col items-center md:items-start"
        >
          <div
            class="text-3xl sm:text-4xl lg:text-5xl font-semibold font-serif text-center md:text-left mb-4"
          >
            <div class="flex flex-col gap-5">
              <span>Best Products for</span>
              <span class="text-yellow-400">Your Education</span>
            </div>
          </div>
          <div class="text-lg sm:text-xl mb-8 text-center md:text-left">
            Exclusive Discounts for Students!
          </div>
          <div class="flex gap-6 justify-center md:justify-start">
            <div
              class="inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 cursor-pointer"
            >
              20% Off
            </div>
            <div
              class="inline-block px-8 py-4 bg-[#022d5a] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#01467b] cursor-pointer"
            >
              Shop Now
            </div>
          </div>
        </div>
        <div class="w-full md:w-[50%] mt-10 md:mt-0">
          <img
            class="w-full h-auto rounded-xl bg-transparent"
            src="../assets/photo/intro.jpg"
            alt="banner"
          />
        </div>
      </div>

      <!-- section two -->
      <div>
        <section class="max-w-7xl mx-auto px-4 py-16">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">You may also like</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
            </p>
          </div>

          <!-- Products Grid -->
          <div class="relative overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform transform" :style="gridStyle">
              <div
                v-for="(product, index) in products"
                :key="product.id"
                class="rounded-lg shadow-sm p-4 relative bg-slate-50 transition-transform transform hover:scale-105 hover:shadow-lg"
                v-show="currentIndex <= index && index < currentIndex + 4"
              >
                <!-- Discount/New Label -->
                <div
                  v-if="product.label"
                  :class="[
                    'absolute top-4 left-4 px-2 py-1 text-sm rounded',
                    product.label === 'New' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white',
                  ]"
                >
                  {{ product.label }}
                </div>

                <!-- Product Image -->
                <img :src="product.image" :alt="product.name" class="w-full h-64 object-contain mb-4" />

                <!-- Product Name -->
                <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>

                <!-- Product Price -->
                <div class="flex items-center mb-2">
                  <span class="text-lg font-bold">£{{ product.price }}</span>
                  <span v-if="product.originalPrice" class="ml-2 text-gray-400 line-through">
                    £{{ product.originalPrice }}
                  </span>
                </div>

                <!-- Rating -->
                <div class="flex mb-4">
                  <StarIcon
                    v-for="i in 5"
                    :key="i"
                    :class="['w-5 h-5', i <= product.rating ? 'text-yellow-400' : 'text-gray-300']"
                  />
                </div>

                <!-- Add to Cart Button -->
                <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <div class="flex justify-center mt-8 gap-4">
            <!-- Left Arrow to go to previous set of products -->
            <button @click="goToPrevious" class="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronLeftIcon class="w-6 h-6" />
            </button>
            <!-- Right Arrow to go to next set of products -->
            <button @click="goToNext" class="p-2 rounded-full border hover:bg-gray-100 transition-colors">
              <ChevronRightIcon class="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
 
      <!-- section three -->
      <div>
        <section class="max-w-7xl mx-auto px-4 py-16">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">New Arrival</h2>
            <p class="text-gray-500 mb-4">Here is our new arrival products that you may like.</p>
            <div class="w-24 h-0.5 bg-red-500 mx-auto"></div>
          </div>
          
          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <a
              href="#"
              class="group relative bg-slate-50 transition-transform transform hover:scale-105 hover:shadow-lg"
              v-for="(product, index) in productss"
              :key="index"
            >
              <!-- Image Container -->
              <div class="mb-6 relative">
                <img
                  :src="product.imageUrl"
                  :alt="product.name"
                  class="w-full aspect-[3/4] object-contain rounded-lg transition-transform group-hover:scale-110"
                />
                <button
                  class="absolute right-4 top-4 rounded-full p-2 transition-colors"
                  :class="[product.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-gray-700']"
                  @click="toggleLike(index)"
                >
                  <HeartIcon 
                    class="h-5 w-5" 
                    :fill="product.isLiked ? 'currentColor' : 'none'" 
                    :stroke="product.isLiked ? 'none' : 'currentColor'"
                  />
                </button>
              </div>

              <!-- Product Info -->
              <div class="text-center">
                <h3 class="text-lg font-medium text-gray-900 mb-2">{{ product.name }}</h3>
                <div class="flex items-center justify-center space-x-3">
                  <span class="text-gray-400 line-through">£{{ product.originalPrice.toFixed(2) }}</span>
                  <span class="text-red-500">£{{ product.salePrice.toFixed(2) }}</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>


      <!-- section four -->
       <div>
        <section class="py-5 px-4">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3">
              <!-- Free Delivery -->
              <div class="text-center p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <TruckIcon class="w-8 h-8 text-blue-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Free delivery</h3>
                <p class="text-gray-500 max-w-xs mx-auto">
                  Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                </p>
              </div>

              <!-- Online Payment -->
              <div class="text-center p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <WalletIcon class="w-8 h-8 text-blue-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Online Payment</h3>
                <p class="text-gray-500 max-w-xs mx-auto">
                  Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                </p>
              </div>

              <!-- Easy Return -->
              <div class="text-center p-8">
                <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <RefreshCcwIcon class="w-8 h-8 text-blue-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Easy Return.</h3>
                <p class="text-gray-500 max-w-xs mx-auto">
                  Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                </p>
              </div>
            </div>
          </div>
        </section>
       </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import BestSellingBook from "../views/BestSellingBook.vue";
import BestSellingPro from "../views/BestSellingPro.vue";
import homeCard from "../views/homeCard.vue";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon, HeartIcon, TruckIcon, WalletIcon, RefreshCcwIcon } from 'lucide-vue-next'
import book from '../assets/shop/book.png'
import { reactive } from 'vue';
import {newproduct} from '../db/newproduct.ts'
import {newarrival} from '../db/newarrival.ts'



export default {
  components: {
    BestSellingBook,
    homeCard,
    BestSellingPro,
    StarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HeartIcon,
    TruckIcon,
    WalletIcon,
    RefreshCcwIcon
  },
  data(){
    return{
      products: newproduct,
      productss: newarrival,
      currentIndex: 0,
    }
  },
  computed: {
    visibleProducts() {
      // Only show the next 4 products based on current index
      return this.products.slice(this.currentIndex, this.currentIndex + 4);
    },
  },
  methods: {
    goToNext() {
      if (this.currentIndex + 4 < this.products.length) {
        this.currentIndex++;
      }
    },
    goToPrevious() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    toggleLike(index) {
      this.productss[index].isLiked = !this.productss[index].isLiked;
    }
  },
  setup() {
    const loading = ref(true);
    // Simulate loading with setTimeout
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });

    return {
      loading,
    };
  },
};
</script>

<style scoped>

</style>

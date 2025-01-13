<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">Product Details</h1>
        <router-link :to="{ name: 'home' }">
          <button class="text-gray-600 hover:text-gray-800">
            <HomeIcon class="w-6 h-6" />
          </button>
        </router-link>
      </div>
      <Loading v-if="loading" />
      <div v-else-if="product" class="grid md:grid-cols-2 gap-8">
        <!-- Product Images -->
        <div class="space-y-4">
        <div class="aspect-square w-5/6 h-5/6 mx-auto rounded-lg overflow-hidden bg-gray-50">
          <img :src="product.image" :alt="product.title" class="w-full h-full object-contain" />
        </div>
      </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-gray-900">{{ product.title }}</h2>
          
          <div class="flex items-center space-x-2">
            <div class="flex">
              <StarIcon v-for="i in product.rating" :key="i" class="w-5 h-5 text-yellow-400" />
              <StarIcon v-for="i in 5 - product.rating" :key="i + 5" class="w-5 h-5 text-gray-300" />
            </div>
            <span class="text-gray-600">({{ product.reviews }} Reviews)</span>
          </div>

          <div>
            <div class="flex items-center space-x-3">
              <span class="text-3xl font-bold text-gray-900">${{ product.currentPrice }}</span>
              <span class="text-lg text-gray-500 line-through">${{ product.originalPrice }}</span>
              <span class="px-2 py-1 bg-red-100 text-red-600 rounded-md text-sm font-medium">
                {{ product.discount }}
              </span>
            </div>
          </div>

          <p class="text-gray-600">{{ product.description }}</p>

          <div class="space-y-4">
            <div class="flex gap-10 items-center">
              <span class="text-gray-700">Available:</span>
              <span class="text-green-500 font-medium">In Stock ({{ product.no_default }})</span>
            </div>
            <div class="flex gap-10 items-center">
              <span class="text-gray-700">Category:</span>
              <span class="text-gray-600 capitalize">{{ product.category }}</span>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center border rounded-md">
              <button class="p-2 hover:bg-gray-100" @click="decrementQuantity">
                <MinusIcon class="w-5 h-5" />
              </button>
              <input 
                type="number" 
                v-model="quantity" 
                class="w-16 text-center border-x p-2"
                min="1"
                :max="product.no_default"
              >
              <button class="p-2 hover:bg-gray-100" @click="incrementQuantity">
                <PlusIcon class="w-5 h-5" />
              </button>
            </div>
            <span class="text-gray-500 text-sm">{{ product.no_default }} pieces available</span>
          </div>

          <div class="flex space-x-3">
            <button class="w-32 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Buy Now
            </button>
            <button class="w-32 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Add To Cart
            </button>
            <button class="p-3 border rounded-lg hover:bg-gray-50">
              <HeartIcon class="w-6 h-6 text-gray-600" />
            </button>
            <button class="p-3 border rounded-lg hover:bg-gray-50">
              <ShareIcon class="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">Product not found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../../stores/useProductStore';
import Loading from '../../shared/Loading.vue';
import {  StarIcon, PlusIcon, MinusIcon, HeartIcon, ShareIcon,HomeIcon } from 'lucide-vue-next';

const route = useRoute();
const store = useProductStore();
const product = ref(null);
const loading = ref(true);
const quantity = ref(1);

const incrementQuantity = () => {
  if (quantity.value < product.value.no_default) {
    quantity.value++;
  }
};
 
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Load product by ID 
const loadProduct = async (id) => {
  try {
    console.log(id);
    loading.value = true;
    product.value = await store.fetchProductById(id); // Fetch product by ID
    quantity.value = 1;
  } catch (error) {
    console.error('Error fetching product:', error);
  } finally {
    loading.value = false;
  }
};

// Fetch product on initial mount
onMounted(async () => {
  const id = Number(route.params.id);
  if (isNaN(id)) {
    console.error('Invalid product ID:', id);
    return;
  }
  await loadProduct(id);
});


// Watch for route changes and reload product
watch(() => route.params.id, async (newId) => {
  await loadProduct(newId);
});
</script>



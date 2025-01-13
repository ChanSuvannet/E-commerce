<script setup>
import { 
  StarIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  HomeIcon, MinusIcon, PlusIcon
} from 'lucide-vue-next';
import { onMounted, ref, watch } from 'vue'; // Add 'watch' to the import
import { useRoute } from 'vue-router'; // Import useRoute to access route params and state
import { ProductStore } from "../../stores/productStore";
import Loading from "../../shared/Loading.vue";
import { useCartstore } from "../../stores/counter";


const route = useRoute(); // Get the route object
const product = ref(null); // Create a reactive reference for the product
const loading = ref(true); // Loading state
const store = ProductStore(); // Assuming a product store for fetching product data
const quantity = ref(1); // the default quantity 1
const cartStore = useCartstore(); // Use your counter store.

const incrementQuantity = () => {
  if(quantity.value < product.value.no_default){
    quantity.value ++;
  }
}
const decrementQuantity = () => {
  if(quantity.value > 1){
    quantity.value --;
  }
}

//=======================================
function addToCart(product) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const existingProduct = cartItems.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the cart store
  cartStore.addItemToCart(product.title);
  cartStore.showNotifications(`${product.title} added to cart!`);
  cartStore.hideNotifications(); // Automatically hide the notification
}

// Fetch the product based on route state or route params
const loadProduct = async () => {
  try {
    loading.value = true;
    if (route.state && route.state.product) {
      product.value = route.state.product;
    } else if (route.params.id) {
      const id = parseInt(route.params.id, 10); // Make sure the ID is a number
      console.log("Product ID:", id); // Log the ID to ensure it's correct
      product.value = await store.fetchProductById(id);
    } else {
      console.error('Product ID not found in route params');
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  } finally {
    loading.value = false;
  }
};


// Fetch the product when the component is mounted or route changes
onMounted(() => {
  loadProduct();
});

watch(() => route.params.id, loadProduct); // Re-fetch the product if the route ID changes
</script>

<template>
  
  <div class="min-h-screen bg-gray-50 p-6">
    <Loading v-if="loading"></Loading>
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <div class="flex justify-between items-center mb-6">
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
            <router-link to="/checkout">
              <button class="w-32 bg-[#022d5a] text-white py-3 rounded-lg transition-colors"
              @click="addToCart(product)">
              Buy Now
            </button>
            </router-link>
            <button class="flex justify-center items-center w-64 px-1 py-2.5 rounded-lg font-medium text-[#022d5a] border-[#022d5a] border hover:bg-[#022d5a] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
              @click="addToCart(product)">
              Add To Cart
            </button>
            <button class="p-3 border rounded-lg hover:bg-gray-50">
              <HeartIcon class="w-6 h-6 text-gray-600" />
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
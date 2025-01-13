<template>
  <div>
    <Loading v-if="loading"></Loading>

    <!-- No Data Message -->
    <div v-else-if="!currentPageProducts.length" class="flex flex-col justify-center items-center mb-4">
      <mat-icon class="icon-size-24" svgIcon="toc"></mat-icon>
      <span class="text-2xl">គ្មានទិន្នន័យ</span>
    </div>

    <!-- Display Products -->
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      <div v-for="product in currentPageProducts" :key="product.id">
        <div
          class="w-auto min-h-[435px] h-auto cursor-pointer space-y-4 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
          <div
            class="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-hover duration-300 ease-in-out">
            <router-link :to="`/shop/detail/${product.id}`" class="flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 transition-hover duration-300 ease-in-out">
              <img :src="product.image" :alt="product.title" class="product-image scale-95 rounded-lg min-h-[220px]" />
            </router-link>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p class="text-lg font-bold">
                {{ product.title }}
              </p>
              <div class="flex justify-between items-center">
                <!-- Star Ratings -->
                <div class="stars flex">
                  <span v-for="n in 5" :key="n" class="text-gray-400 text-lg"
                    :class="{ 'text-yellow-500': n <= product.rating }">
                    ★
                  </span>
                </div>

                <!-- Number of Reviews -->
                <span class="text-gray-600 text-sm ml-2">
                  {{ product.reviews }} Reviews
                </span>
              </div>
              <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900">
                  ${{ product.currentPrice }}
                </p>
                <p class="text-base font-medium text-gray-500 line-through">
                  ${{ product.originalPrice }}
                </p>
                <p class="ml-auto text-base font-medium text-red-500">
                  {{ product.discount }}
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between pt-3 gap-4">
              <div
                class="flex justify-center items-center w-full px-1 py-2.5 rounded-lg font-medium text-white bg-[#022d5a] hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                Buy Now
              </div>
              
              <div
                class="flex justify-center items-center w-full px-1 py-2.5 rounded-lg font-medium text-[#022d5a] border-[#022d5a] border hover:bg-[#022d5a] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                @click="addToCart(product.name)"
              >
                <svg-icon type="mdi" :path="mdiShoppingOutline" />
                  Cart
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!loading" class="flex items-end justify-center w-full mt-5 mb-5">
        <!-- Pagination Controls -->
        <nav aria-label="Page navigation example">
          <ul class="flex items-center -space-x-px h-10 text-base">
            <!-- Previous Button -->
            <li>
              <a href="#" @click.prevent="previousPage" :disabled="currentPage === 1"
                class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
                <span class="sr-only">Previous</span>
                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>

            <!-- Page Numbers -->
            <li v-for="page in totalPages" :key="page">
              <a href="#" @click.prevent="goToPage(page)" :class="{
                'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ':
                  currentPage === page,
                'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700':
                  currentPage !== page,
              }">
                {{ page }}
              </a>
            </li>

            <!-- Next Button -->
            <li>
              <a href="#" @click.prevent="nextPage" :disabled="currentPage === totalPages"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                <span class="sr-only">Next</span>
                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiShoppingOutline } from "@mdi/js";
import { computed, onMounted, ref } from "@vue/runtime-dom";
import Loading from "../../shared/Loading.vue";
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductStore } from "../../stores/productStore";
=======
>>>>>>> 25868701a9ed12066224d1431b0d8c6f370b5cf2
=======
>>>>>>> 25868701a9ed12066224d1431b0d8c6f370b5cf2
import { useCartstore } from "../../stores/counter";
import { useProductStore } from "../../stores/productStore";

// Store instance
const store = ProductStore();
const loading = ref(true);
const cartStore = useCartstore(); // Use your counter store.

// Computed values for reactive access
const currentPage = computed(() => store.currentPage);
const totalPages = computed(() => store.totalPages);
const currentPageProducts = computed(() => store.currentPageProducts);

//=======================================
<<<<<<< HEAD
<<<<<<< HEAD
function addToCart(product: any) {
  alert(product)
  console.log("click")
  cartStore.addItemToCart(product); // Call the existing method from your counter.js.
  cartStore.showNotifications(`${product.id} added to cart!`);
  cartStore.hideNotifications(); // Automatically hide notifications after a timeout.
  console.log(`${product} added to cart!`);
=======
function addToCart(product) {
  console.log("Product to add:", product); // Debug log
  cartStore.addItemToCart(product.id); // Add product by ID
  cartStore.showNotifications(`${product.id} added to cart!`);
  cartStore.hideNotifications();
>>>>>>> 25868701a9ed12066224d1431b0d8c6f370b5cf2
=======
function addToCart(product) {
  console.log("Product to add:", product); // Debug log
  cartStore.addItemToCart(product.id); // Add product by ID
  cartStore.showNotifications(`${product.id} added to cart!`);
  cartStore.hideNotifications();
>>>>>>> 25868701a9ed12066224d1431b0d8c6f370b5cf2
}


function nextPage() {
  store.nextPage();
}

function previousPage() {
  store.previousPage();
}

function goToPage(page: number) {
  store.goToPage(page);
}

onMounted(async () => {
  await store.fetchProducts();
  loading.value = false; // Set loading to false after data is fetched
});

function incrementCartCount() {
  throw new Error("Function not implemented.");
}
</script>

<style scoped>
.product-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>

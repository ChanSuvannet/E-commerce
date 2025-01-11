<template>
  <div class="flex gap-5">
    <!-- Sidebar component for filters -->
    <Filters @filter-changed="updateFilters" />

    <!-- Product List component to display filtered products -->
    <div class="w-full px-10">
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import { useCartstore } from "../stores/counter";
import { useProductStore } from "../stores/productStore";
import Filters from "../views/Product/Filters.vue";
import ProductList from "../views/Product/ProductList.vue";

export default {
  name: "Shop",
  components: {
    ProductList,
    Filters,
  },
  data() {
    return {
      products: [],
      categories: [],
      filters: {
        priceRange: 300,
        selectedRatings: [],
      },
    };
  },
  computed: {
    cartStore() {
      return useCartstore();
    },
    filteredProducts() {
      return this.products.filter(product => {
        // Apply price filter
        const priceMatches = product.currentPrice <= this.filters.priceRange;
        
        // Apply rating filter
        const ratingMatches = this.filters.selectedRatings.length
          ? this.filters.selectedRatings.includes(product.rating)
          : true;

        return priceMatches && ratingMatches;
      });
    },
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
    },
    handleAddToCart(title) {
      this.cartStore.addItemToCart(title);
    },
  },
  mounted() {
    this.fetchData();
  },
  async fetchData() {
    const store = useProductStore();
    this.products = await store.fetchProducts();
    this.categories = await store.fetchCategories(); 
  },
};
</script>

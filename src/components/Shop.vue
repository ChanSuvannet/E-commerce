<template>
  <div class="flex gap-5 ml-5">
    <!-- Sidebar component for filters -->
    <Filters @filter-changed="updateFilters" />

    <!-- Product List component to display filtered products -->
    <div class="w-full px-2">
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import { ProductStore } from "../stores/productStore";
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
      filters: {
        searchTitle: "",
        selectedCategoryId: 0,
        minPrice: null,
        maxPrice: null,
        minRating: 0,
      },
    };
  },
  computed: {
    store() {
      return ProductStore();
    },
    filteredProducts() {
      return this.store.filteredProducts;
    },
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
      this.store.searchTitle = this.filters.searchTitle;
      this.store.selectedCategoryId = this.filters.selectedCategoryId;
      this.store.minPrice = this.filters.minPrice;
      this.store.maxPrice = this.filters.maxPrice;
      this.store.rating = this.filters.minRating;
    },
  },
};
</script>

import { defineStore } from "pinia";
import { categories, Product, products } from "../db/products";

export const ProductStore = defineStore("product", {
  state: () => ({
    products: products, // List of products
    categories: categories, // List of categories
    pageSize: 12, // Number of products per page
    currentPage: 1, // Default page is 1
    searchTitle: "", // Title search filter
    selectedCategoryId: null as number | null, // Selected category filter
    minPrice: 0, // Minimum price for filtering
    maxPrice: 1000, // Maximum price for filtering
    minRating: 0, // Minimum rating for filtering
  }),

  getters: {
    // Filter products based on all applied filters
    filteredProducts: (state) => {
      return state.products.filter((product: Product) => {
        // Filter by title
        if (
          state.searchTitle &&
          !product.title.toLowerCase().includes(state.searchTitle.toLowerCase())
        ) {
          return false;
        }

        // Filter by category (ignore if none selected)
        if (
          state.selectedCategoryId &&
          product.categoryId !== state.selectedCategoryId
        ) {
          return false;
        }

        // Filter by price range
        const currentPrice = parseFloat(product.currentPrice);
        if (currentPrice < state.minPrice || currentPrice > state.maxPrice) {
          return false;
        }

        // Filter by minimum rating
        if (product.rating <= state.minRating) {
          return false;
        }

        return true;
      });
    },

    // Paginate the filtered products
    currentPageProducts: (state) => {
      const startIndex = (state.currentPage - 1) * state.pageSize;
      return state.filteredProducts.slice(startIndex, startIndex + state.pageSize);
    },

    // Calculate total pages based on filtered products
    totalPages: (state) => {
      const filteredCount = state.filteredProducts.length;
      return Math.ceil(filteredCount / state.pageSize);
    },
  },

  actions: {
    // Simulate fetching products (can be replaced with real API calls)
    async fetchProducts() {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.products = products; // Replace with API data if needed
    },

    async fetchProductById(id) {
      return this.products.find((product) => product.id === id);
    },

    // Go to the next page if within range
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Go to the previous page if within range
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // Jump to a specific page if valid
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    // Method to reset filters
    resetFilters() {
      this.searchTitle = "";
      this.selectedCategoryId = null;
      this.minPrice = 0;
      this.maxPrice = 1000;
      this.minRating = 0;
      this.currentPage = 1;
    },
  },

  
});

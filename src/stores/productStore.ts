import { defineStore } from "pinia";
import { categories, Product, products } from "../db/products";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: products, // List of products
    categories: categories, // List of categories
    pageSize: 12, // Number of products per page
    currentPage: 1, // Default page is 1
    searchTitle: "", // Title search filter
    selectedCategoryId: null as number | null, // Selected category filter
    minPrice: 0, // Min price for filtering
    maxPrice: 1000, // Max price for filtering
    minRating: 0, // Min rating for filtering
  }),

  getters: {
    // Get filtered products with pagination
    filteredProducts: (state) => {
      return state.products.filter((product: Product) => {
        // Filter by title
        if (state.searchTitle && !product.title.toLowerCase().includes(state.searchTitle.toLowerCase())) {
          return false;
        }
        // Filter by category
        if (state.selectedCategoryId && product.categoryId !== state.selectedCategoryId) {
          return false;
        }
        // Filter by price range
        const currentPrice = parseFloat(product.currentPrice);
        if (currentPrice < state.minPrice || currentPrice > state.maxPrice) {
          return false;
        }
        // Filter by rating
        if (product.rating < state.minRating) {
          return false;
        }
        return true;
      });
    },

    // Get products for the current page
    currentPageProducts: (state) => {
      const startIndex = (state.currentPage - 1) * state.pageSize;
      return state.filteredProducts.slice(startIndex, startIndex + state.pageSize);
    },

    totalPages: (state) => {
      const filteredCount = state.filteredProducts.length;
      return Math.ceil(filteredCount / state.pageSize);
    },
  },

  actions: {
    // Method to fetch products (async)
    async fetchProducts() {
      // Simulate a delay for data fetching (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.products = products; // In real-world scenario, fetch data from an API
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
});

  



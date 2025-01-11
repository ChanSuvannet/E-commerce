<template>
    <div class="filter-container flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-md">
      <!-- Search Bar -->
      <input
        v-model="searchTitle"
        placeholder="Search by title"
        class="p-2 border rounded-md"
        @input="emitFilters"
      />
  
      <!-- Category Filter -->
      <select
        v-model="selectedCategoryId"
        class="p-2 border rounded-md"
        @change="emitFilters"
      >
        <!-- Default "All Categories" option with id = 0 -->
        <option :value="0" :class="selectedCategoryId === 0 ? 'bg-red-500' : ''">
          All Categories
        </option>
        <!-- Other categories -->
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
          :class="selectedCategoryId !== 0 && selectedCategoryId === category.id ? 'bg-red-500' : ''"
        >
          {{ category.name }}
        </option>
      </select>
  
      <!-- Price Range Filter -->
      <div class="flex gap-2">
        <input
          type="number"
          v-model.number="minPrice"
          placeholder="Min Price"
          class="p-2 border rounded-md"
          @input="emitFilters"
        />
        <input
          type="number"
          v-model.number="maxPrice"
          placeholder="Max Price"
          class="p-2 border rounded-md"
          @input="emitFilters"
        />
      </div>
  
      <!-- Rating Filter -->
      <select
        v-model.number="minRating"
        class="p-2 border rounded-md"
        @change="emitFilters"
      >
        <option value="0">All Ratings</option>
        <option value="1">1+ Stars</option>
        <option value="2">2+ Stars</option>
        <option value="3">3+ Stars</option>
        <option value="4">4+ Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  </template>
  
  <script>
  import { categories } from "../../db/products";
  
  export default {
    data() {
      return {
        searchTitle: "",
        selectedCategoryId: 0, // Default to "All Categories" (id = 0)
        minPrice: null,
        maxPrice: null,
        minRating: 0,
        categories, // Directly using the imported categories
      };
    },
    methods: {
      emitFilters() {
        this.$emit("filter-changed", {
          searchTitle: this.searchTitle,
          selectedCategoryId: this.selectedCategoryId,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          minRating: this.minRating,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for selected background */
  .bg-red-500 {
    background-color: #f87171;
  }
  </style>
  
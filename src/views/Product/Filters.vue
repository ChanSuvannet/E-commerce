<template>
  <div
    class="filter-container flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-md w-[400px] h-[1335px]"
  >
    <div class="flex justify-start items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon w-5 h-5 text-[#022d5a]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
      <h2 class="text-xl font-semibold">Filters</h2>
    </div>

    <!-- Search Bar -->
    <input
      v-model="searchTitle"
      placeholder="Search by title"
      class="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @input="emitFilters"
    />

    <div class="flex flex-col justify-start gap-4 mt-1 mb-2">
      <h3 class="text-xl mt-1 mb-2 font-semibold text-[#022d5a]">Category</h3>
      <!-- Show All Button -->
      <div
        @click="selectCategory(0)"
        class="relative pt-2 pb-2 px-4 rounded-full cursor-pointer custom-button transition-transform group"
        :class="{
          'bg-gray-200': selectedCategoryId === 0, // Red background for Show All
          'bg-gray-50': selectedCategoryId !== 0, // Default background for Show All if not selected
        }"
      >
        <span class="font-semibold relative z-10">Show All</span>
        <div
          class="absolute inset-0 rounded-lg transition-transform transform scale-100 group-hover:scale-[1.03]"
          :class="{ 'bg-gray-100': selectedCategoryId === 0 }"
        ></div>
      </div>
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category.id)"
        class="relative pt-2 pb-2 px-4 rounded-lg cursor-pointer custom-button transition-transform group"
        :class="{
          'bg-gray-50':
            selectedCategoryId !== category.id && selectedCategoryId !== 0,
          'bg-gray-50': selectedCategoryId === category.id,
        }"
      >
        <span class="font-semibold relative z-10">{{ category.name }}</span>
        <div
          class="absolute inset-0 rounded-lg transition-transform transform scale-100 group-hover:scale-[1.03]"
          :class="{ 'bg-gray-100': selectedCategoryId === category.id }"
        ></div>
      </div>
    </div>

    <!-- Price Range Filter -->
    <div class="filter-section">
      <h3 class="text-xl mt-1 mb-2 font-semibold text-[#022d5a]">
        Price Range
      </h3>
      <div
        class="price-range-labels flex justify-between text-gray-600 text-sm"
      >
        <span class="text-[#022d5a] font-medium text-[15px]">$0</span>
        <span class="text-[#022d5a] font-medium text-[15px]">$100</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        v-model.number="maxPrice"
        class="range-slider w-full h-2 bg-gray-200 rounded-lg text-[#022d5a]"
        @input="emitFilters"
      />
      <div class="price-display text-center text-gray-700 font-medium mt-2">
        ${{ maxPrice }}
      </div>
    </div>

    <!-- Ratings Filter -->
    <div>
      <h3 class="text-xl mt-1 mb-2 font-semibold text-[#022d5a]">Ratings</h3>
      <ul class="flex flex-col gap-2">
        <li v-for="rating in [1, 2, 3, 4, 5]" :key="rating" class="flex gap-2">
          <input
            type="checkbox"
            :value="rating"
            v-model="selectedRatings"
            :id="`rating-${rating}`"
            @change="emitFilters"
          />
          <label
            :for="`rating-${rating}`"
            class="cursor-pointer flex gap-1 items-center text-yellow-500"
          >
            <span v-for="star in 5" :key="star" class="star-icon text-2xl">
              {{ star <= rating ? "\u2605" : "\u2606" }}
            </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { categories } from "../../db/products";

export default {
  data() {
    return {
      searchTitle: "",
      selectedCategoryId: 0,
      maxPrice: 10,
      selectedRatings: [], // TODO
      categories,
    };
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategoryId = categoryId;
      this.emitFilters();
    },
    emitFilters() {
      this.$emit("filter-changed", {
        searchTitle: this.searchTitle,
        selectedCategoryId: this.selectedCategoryId,
        maxPrice: this.maxPrice,
        selectedRatings: this.selectedRatings, // Emit selected ratings
      });
    },
  },
};
</script>

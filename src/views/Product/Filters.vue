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

    <form class="flex items-center max-w-lg w-full">
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
            />
          </svg>
        </div>
        <input
          v-model="searchTitle"
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Search Title..."
          required
          @input="emitFilters"
        />
        <button
          type="button"
          class="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
    </form>
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
      // selectedRatings: [], // TODO
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
        // selectedRatings: this.selectedRatings, // Emit selected ratings
      });
    },
  },
};
</script>

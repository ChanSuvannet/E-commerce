<template>
    <div class="sidebar-container">
      <h2 class="sidebar-header">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </h2>
  
      <div class="filter-section">
        <h3 class="section-title">Price Range</h3>
        <div class="price-range-labels">
          <span class="price-label">$0</span>
          <span class="price-label">$600</span>
        </div>
        <input type="range" min="0" max="600" v-model="priceRange" class="range-slider" />
        <div class="price-display">${{ priceRange }}</div>
      </div>
  
      <div class="filter-section">
        <h3 class="section-title">Category</h3>
        <ul class="category-list">
          <li
v-for="(count, category) in categories" :key="category"
              class="category-item"
              :class="{ 'selected-category': category === selectedCategory }"
              @click="selectCategory(category)">
            <span>{{ category }}</span>
            <span class="category-count">{{ count }}</span>
          </li>
        </ul>
      </div>
  
      <div class="filter-section">
        <h3 class="section-title">Ratings</h3>
        <ul class="rating-list">
          <li v-for="rating in 5" :key="rating" class="rating-item">
            <input type="checkbox" :id="`rating-${rating}`" v-model="selectedRatings" :value="rating" class="rating-checkbox" />
            <label :for="`rating-${rating}`" class="rating-label">
              <span v-for="star in 5" :key="star" class="star-icon">
                {{ star <= rating ? '★' : '☆' }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: 'Sidebar',
  // eslint-disable-next-line vue/component-api-style
  data() {
    return {
      priceRange: 300,
      categories: {
        'All': 250,
        'Book': 25,
        'Pen': 40,
        'Pencil': 25,
        'Ruler': 25,
        'Sticker': 25,
        'Office Material': 25,
      },
      selectedCategory: 'All',
      selectedRatings: [],
    }
  },
  // eslint-disable-next-line vue/component-api-style
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
    },
  },
}
</script>
  
  <style scoped>
  /* Sidebar container */
  .sidebar-container {
    background-color: white;
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: 16rem;
  }
  
  /* Header */
  .sidebar-header {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  
  /* Icon styles */
  .icon {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }
  
  /* Filter sections */
  .filter-section {
    margin-bottom: 1.5rem;
  }
  
  /* Section titles */
  .section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
  }
  
  /* Price range labels */
  .price-range-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .price-label {
    color: #4b5563;
  }
  
  /* Range slider */
  .range-slider {
    width: 100%;
  }
  
  /* Price display */
  .price-display {
    text-align: center;
    color: #1e3a8a;
    margin-top: 0.5rem;
  }
  
  /* Category list */
  .category-list {
    list-style-type: none;
    padding: 0;
  }
  
  .category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .category-item:hover {
    background-color: #f3f4f6;
  }
  
  .selected-category {
    background-color: #1e3a8a;
    color: white;
  }
  
  /* Category count */
  .category-count {
    font-size: 0.875rem;
    color: #6b7280;
  }
  
  /* Rating list */
  .rating-list {
    list-style-type: none;
    padding: 0;
  }
  
  /* Rating items */
  .rating-item {
    display: flex;
    align-items: center;
  }
  
  /* Rating checkbox */
  .rating-checkbox {
    margin-right: 0.5rem;
  }
  
  /* Rating stars */
  .star-icon {
    font-size: 1.25rem;
    color: #fbbf24;
  }
  </style>
  
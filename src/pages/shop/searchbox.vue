<template>
  <div>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="Search..."
        @input="onSearchInput"
      >
      <button class="search-button" aria-label="Search">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onSearchInput() {
      // Handle search input logic here (optional)
      console.log('Searching for:', this.searchQuery);
    }
  }
}
</script>

<style scoped>
.search-container {
    position: relative;
    max-width: 500px;
    margin: 20px 0;
}

.search-input {
    width: 100%;
    padding: 10px 40px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    box-sizing: border-box;
}

.search-button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.search-button i {
    font-size: 18px;
    color: #555;
}

.search-button:focus {
    outline: none;
}

@media (max-width: 600px) {
    .search-container {
        max-width: 100%;
    }
}
</style>

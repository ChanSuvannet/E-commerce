<template>
    <div class="product-page">
      <!-- Filter Input -->
      <div class="filter-section">
        <label for="discount-filter">Minimum Discount (%):</label>
        <input
          type="number"
          id="discount-filter"
          v-model.number="minDiscount"
          @input="filterProducts"
          placeholder="Enter percentage"
        />
      </div>
  
      <!-- Product Grid -->
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">
            <span class="discount-price">{{ product.discountPrice }}</span>
            <span class="original-price" v-if="product.discount">
              {{ product.originalPrice }}
            </span>
          </p>
          <div class="product-rating">
            <span>⭐</span>{{ product.rating }}
          </div>
          <div class="product-buttons">
            <button class="buy-now">Buy Now</button>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minDiscount: 0, // Default minimum discount percentage
        products: [
          {
            id: 1,
            name: "Flower Notebook",
            image: "flower-notebook.jpg",
            discountPrice: "$24.99",
            originalPrice: "$30.00",
            discount: true,
            rating: 4.5,
            discountPercentage: 17,
          },
          {
            id: 2,
            name: "Black Notebook",
            image: "black-notebook.jpg",
            discountPrice: "$15.99",
            originalPrice: "$20.00",
            discount: true,
            rating: 4.7,
            discountPercentage: 20,
          },
          {
            id: 3,
            name: "Cute Notebook",
            image: "cute-notebook.jpg",
            discountPrice: "$18.00",
            originalPrice: "$25.00",
            discount: true,
            rating: 4.6,
            discountPercentage: 28,
          },
          // Add more products as needed
        ],
        filteredProducts: [],
      };
    },
    mounted() {
      // Initialize the filtered products to display all by default
      this.filteredProducts = this.products;
    },
    methods: {
      filterProducts() {
        this.filteredProducts = this.products.filter(
          (product) => product.discountPercentage >= this.minDiscount
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .product-page {
    padding: 16px;
  }
  
  .filter-section {
    margin-bottom: 16px;
  }
  
  .filter-section input {
    margin-left: 8px;
    padding: 4px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background: #fff;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .product-name {
    font-size: 16px;
    margin: 8px 0;
  }
  
  .product-price {
    font-size: 14px;
    color: #333;
  }
  
  .discount-price {
    font-weight: bold;
    color: #e74c3c;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
    margin-left: 8px;
  }
  
  .product-rating {
    margin: 8px 0;
    font-size: 14px;
  }
  
  .product-buttons button {
    margin: 4px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .buy-now {
    background-color: #3498db;
    color: #fff;
  }
  
  .add-to-cart {
    background-color: #2ecc71;
    color: #fff;
  }
  </style>
  
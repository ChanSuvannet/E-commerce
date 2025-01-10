<template>
  <div class="card-list">
    <!-- Subtotal Section -->
    <div class="subtotal">
      <span class="label">Subtotal</span>
      <span class="amount">${{ subtotal.toFixed(2) }}</span>
      <button class="go-to-cart">Go to Cart</button>
    </div>
    <!-- Product Cards -->
    <div class="product-cards">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info">
          <div class="price">${{ product.price.toFixed(2) }}</div>
          <div class="quantity-controls">
            <span class="qty">Qty:</span>
            <select v-model="product.quantity" @change="updateQuantity(product.id, product.quantity)">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            <button class="remove-btn" @click="removeItem(product.id)" aria-label="Remove item">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import book from '../../assets/shop/book.png'
export default {
  name: "CardIcon",
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Car Seat Model A',
          price: 119.0,
          image: book,
          quantity: 2,
        },
        {
          id: 2,
          name: 'Car Seat Model B',
          price: 169.99,
          image: '/carseat2.jpg',
          quantity: 1,
        },
        {
          id: 3,
          name: 'Car Seat Model C',
          price: 87.99,
          image: '/carseat3.jpg',
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    subtotal() {
      return this.products.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);
    },
  },
  methods: {
    updateQuantity(productId, newQuantity) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        product.quantity = Math.max(0, newQuantity);
      }
    },
    removeItem(productId) {
      const index = this.products.findIndex((p) => p.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
  },
};
</script>



<style scoped>
.card-list {
  max-width: 100px;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtotal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.subtotal .label {
  font-weight: bold;
}
.label, .qty{
  font-size: x-small;
  color: black;
}
.go-to-cart{
  font-size: x-small;
  padding-left: 10px;
}
.amount{
  font-size: x-small;
  color: rad;
}

.subtotal {
  font-size: 1.25rem;
  color: #be5766;
  font-weight: bold;
}

.go-to-cart {
  background: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.product-cards {
  display: flex;
  flex-direction: column;
}

.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.product-image {
  width: 100%;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
}

.product-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.price {
  
  font-weight: bold;
  color: #976161;
  font-size: x-small;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls select {
  padding: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.6;
}

.remove-btn:hover {
  opacity: 1;
}
</style>
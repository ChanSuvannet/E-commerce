<template>
    <div class="checkout">
      <h2>Checkout</h2>
      <div v-if="cart.length">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.name }}</td>
              <td>${{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <button @click="increaseCartQuantity(item.id)">+</button>
                <button @click="decreaseCartQuantity(item.id)" :disabled="item.quantity === 1">-</button>
                <button @click="removeFromCart(item.id)">Remove</button>
              </td>
              <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
        <div class="summary">
          <p>Total Items: {{ totalCartItems }}</p>
          <p>Subtotal: ${{ cartSubtotal.toFixed(2) }}</p>
          <button @click="proceedToPayment">Proceed to Payment</button>
        </div>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import { useProductStore } from "@/stores/productStore";
  
  export default {
    name: "Checkout",
    setup() {
      const productStore = useProductStore();
      return {
        ...productStore,
        proceedToPayment: () => alert("Payment processing..."),
      };
    },
  };
  </script>
  
  <style>
  .checkout {
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  .summary {
    text-align: right;
  }
  button {
    margin: 0 5px;
  }
  </style>
  
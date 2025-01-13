<template>
  <div class="shopping-cart">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Product List Section -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg p-6">
          <div class="grid grid-cols-12 gap-4 mb-4 font-semibold text-gray-600">
            <div class="col-span-6">Product</div>
            <div class="col-span-2">Price</div>
            <div class="col-span-2">Quantity</div>
            <div class="col-span-2">Total</div>
          </div>
          <!-- Product Items -->
          <div v-if="cart.length > 0">
            <div
              v-for="item in cart"
              :key="item.id"
              class="grid grid-cols-12 gap-4 py-4 border-t"
            >
              <div class="col-span-6 flex gap-4">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 class="font-medium">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500">
                    Size: {{ item.size }} | Color: {{ item.color }}
                  </p>
                </div>
              </div>
              <div class="col-span-2">${{ item.currentPrice }}</div>
              <div class="col-span-2 flex items-center gap-2">
                <button
                  @click="decreaseQuantity(item)"
                  class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item)"
                  class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100"
                >
                  +
                </button>
              </div>
              <div class="col-span-2 flex items-center justify-between">
                <span class="text-purple-600">
                  ${{ (item.currentPrice * item.quantity).toFixed(2) }}
                </span>
                <button @click="removeItem(item)" class="text-red-500">
                  remove
                </button>
              </div>
            </div>
          </div>
          <div v-else class="text-center text-gray-500 py-6">
            Your cart is empty. Start adding some items!
          </div>
        </div>
      </div>
      <!-- Order Summary Section -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Discount:</span>
              <span>-${{ discount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping Charge:</span>
              <span>${{ shippingCharge.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between pt-4 border-t font-semibold">
              <span>Total:</span>
              <span class="text-purple-600">${{ total.toFixed(2) }}</span>
            </div>
            <button
              @click="proceedToCheckout"
              class="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 mt-4"
            >
              Proceed To Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";

export default {
  name: "CardList",
  setup() {
    const cart = ref([]);
    const discount = ref(0);
    const shippingCharge = ref(30);

    // Calculate subtotal
    const subtotal = computed(() =>
      cart.value.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0)
    );

    // Calculate total
    const total = computed(() => subtotal.value - discount.value + shippingCharge.value);

    // Load cart items from localStorage
    const loadCartFromLocalStorage = () => {
      const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      cart.value = storedCart;
    };

    // Save cart to localStorage whenever cart changes
    const saveCartToLocalStorage = () => {
      localStorage.setItem("cartItems", JSON.stringify(cart.value));
    };

    watch(cart, saveCartToLocalStorage, { deep: true });

    // Increase quantity
    const increaseQuantity = (item) => {
      item.quantity++;
    };

    // Decrease quantity
    const decreaseQuantity = (item) => {
      if (item.quantity > 1) {
        item.quantity--;
      }
    };

    // Remove item from cart
    const removeItem = (item) => {
      cart.value = cart.value.filter((i) => i.id !== item.id);
    };

    // Handle checkout action
    const proceedToCheckout = () => {
      console.log("Proceeding to checkout...");
    };

    // Load cart data on component mount
    onMounted(() => {
  loadCartFromLocalStorage();
});


    return {
      cart,
      subtotal,
      total,
      discount,
      shippingCharge,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      proceedToCheckout,
    };
  },
};
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
}
</style>

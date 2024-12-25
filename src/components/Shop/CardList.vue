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
            <div v-for="item in cartItems" :key="item.id" class="grid grid-cols-12 gap-4 py-4 border-t">
              <div class="col-span-6 flex gap-4">
                <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg">
                <div>
                  <h3 class="font-medium">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">
                    Size: {{ item.size }} | Color: {{ item.color }}
                  </p>
                </div>
              </div>
              <div class="col-span-2">${{ item.price.toFixed(2) }}</div>
              <div class="col-span-2 flex items-center gap-2">
                <button @click="decreaseQuantity(item)" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100">
                  +
                </button>
              </div>
              <div class="col-span-2 flex items-center justify-between">
                <span class="text-purple-600">${{ (item.price * item.quantity).toFixed(2) }}</span>
                <button @click="removeItem(item)" class="text-red-500">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
  
            <!-- Coupon Section -->
            <div class="flex gap-4 mt-6">
              <input 
                v-model="couponCode"
                type="text"
                placeholder="Coupon Code"
                class="flex-1 px-4 py-2 border rounded-lg"
              >
              <button 
                @click="applyCoupon"
                class="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Apply Coupon
              </button>
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
  
              <!-- Coupon Selection -->
              <div class="relative">
                <select v-model="selectedCoupon" class="w-full px-4 py-2 border rounded-lg appearance-none">
                  <option value="">Select Coupon</option>
                  <option v-for="coupon in availableCoupons" :key="coupon.code" :value="coupon.code">
                    {{ coupon.name }}
                  </option>
                </select>
              </div>
  
              <!-- Promo Code -->
              <div class="flex gap-2">
                <input 
                  v-model="promoCode"
                  type="text"
                  placeholder="Promo Code"
                  class="flex-1 px-4 py-2 border rounded-lg"
                >
                <button 
                  @click="applyPromo"
                  class="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-50"
                >
                  Apply
                </button>
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
  import { ref, computed } from 'vue';
  import book from '../../assets/shop/book.png'
  
  export default {
    name: 'CardList',
    setup() {
      // Sample data
      const cartItems = ref([
        {
          id: 1,
          name: 'Montes Scelerisque',
          price: 248.66,
          quantity: 1,
          size: 'Large',
          color: 'Brown',
          image: book
        },
        {
          id: 2,
          name: 'Leo Sodales Varius',
          price: 240.00,
          quantity: 1,
          size: 'Small',
          color: 'Golden',
          image:book
        }
      ]);
  
      const couponCode = ref('');
      const promoCode = ref('');
      const selectedCoupon = ref('');
      const discount = ref(20);
      const shippingCharge = ref(30);
  
      const availableCoupons = ref([
        { code: 'SAVE10', name: '10% Off' },
        { code: 'SAVE20', name: '20% Off' },
      ]);
  
      // Computed properties
      const subtotal = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      });
  
      const total = computed(() => {
        return subtotal.value - discount.value + shippingCharge.value;
      });
  
      // Methods
      const increaseQuantity = (item) => {
        item.quantity++;
      };
  
      const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
          item.quantity--;
        }
      };
  
      const removeItem = (item) => {
        cartItems.value = cartItems.value.filter(i => i.id !== item.id);
      };
  
      const applyCoupon = () => {
        // Implement coupon logic
        console.log('Applying coupon:', couponCode.value);
      };
  
      const applyPromo = () => {
        // Implement promo code logic
        console.log('Applying promo code:', promoCode.value);
      };
  
      const proceedToCheckout = () => {
        // Implement checkout logic
        console.log('Proceeding to checkout');
      };
  
      return {
        cartItems,
        couponCode,
        promoCode,
        selectedCoupon,
        discount,
        shippingCharge,
        availableCoupons,
        subtotal,
        total,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        applyCoupon,
        applyPromo,
        proceedToCheckout
      };
    }
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    @apply max-w-7xl mx-auto px-4 py-8;
  }
  </style>
  
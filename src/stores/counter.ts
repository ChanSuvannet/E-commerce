import { defineStore } from "pinia";

interface CartState {
  cartCount: number;
  message: string | null;
}

export const useCartstore = defineStore("cart", {
  state: (): CartState => ({
    cartCount: 0,
    message: null,
  }),
  actions: {
    addItemToCart(title: string) {
      this.cartCount += 1;
    },

    showNotifications(message: string) {
      this.message = message;
    },

    hideNotifications() {
      setTimeout(() => {
        this.message = null;
      }, 2000);
    },
  },
});
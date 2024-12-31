import { defineStore } from "pinia";
export const useCartstore = defineStore("cart", {

  state: () => ({
    cartCount: 0,
    message: null,
  }),
  actions: {
    addItemToCart(title) {
      this.cartCount += 1;
    },

    showNotifications(message){
      this.message = message;
    },

    hideNotifications(message){
      setTimeout(() => {
        this.message = null;
      }, 2000)
    },
  },
})
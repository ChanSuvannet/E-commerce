import { defineStore } from "pinia";
export const useCartstore = defineStore("cart", {

  state: () => ({
    cartCount: 0,
    NotificationMessage: '',
  }),
  actions: {
    addItemToCart(title) {
      this.cartCount += 1;
    },
    setNotificationMessage(message) {
      this.NotificationMessage = message;
      //Automatically class within 3 seconds
      setTimeout(() => {
        this.NotificationMessage = '';
      }, 3000);
    }
  },

})
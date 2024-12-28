import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartCount: 0 as number,
    NotificationMessage: '' as string,
  }),
  actions: {
    addItemToCart(title: string): void {
      this.cartCount += 1;
    },
    setNotificationMessage(message: string): void {
      this.NotificationMessage = message;
      // Automatically clear after 3 seconds
      setTimeout(() => {
        this.NotificationMessage = '';
      }, 3000);
    }
  },
});

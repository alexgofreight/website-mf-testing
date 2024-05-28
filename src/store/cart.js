import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    clearCart() {
      this.cartItems = [];
    }
  }
});
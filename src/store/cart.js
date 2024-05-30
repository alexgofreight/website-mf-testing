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
      console.log(product)
      console.log('MMM', this.cartItems)
      const existingItem = this.cartItems.find(item => item.no === product.no);
      if (existingItem) {
        console.log('111')
        existingItem.quantity += 1;
      } else {
        console.log('2222')
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    clearCart() {
      this.cartItems = [];
    }
  }
});
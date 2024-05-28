<template>
  <div>
    <h1>Cart</h1>
    <div v-for="item in cartItems" :key="item.id">
      <p>Name: {{ item.name }}</p>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Price: {{ item.price }}</p>
    </div>
    <p>Total: {{ totalPrice }}</p>
    <button @click="clearCart">Clear Cart</button>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
import { useCartStore } from '../store/cart';

export default {
  name: 'CartPage',
  computed: {
    cartItems() {
      const store = useCartStore();
      return store.cartItems;
    },
    totalPrice() {
      const store = useCartStore();
      return store.totalPrice;
    }
  },
  methods: {
    clearCart() {
      const store = useCartStore();
      store.clearCart();
    },
    checkout() {
      // Logic for checkout
    }
  }
};
</script>
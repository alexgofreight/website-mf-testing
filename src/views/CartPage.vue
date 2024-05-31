<template>
  <div>
    <h1>Cart Page</h1>
    <main>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <p>Name: {{ item.name }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: {{ item.price }}</p>
      </div>
      <p>Total: {{ totalPrice }}</p>
      <button @click="clearCart">Clear Cart</button>
      <button @click="checkout" class="custom-btn">Send Msg to FMS</button>
    </main>
    <hr>
    <section class="verify-item">
      <h2>Verify Item:</h2>
      <div>
        <input type="checkbox" name="" id="aa">
        <label for="aa">1. Keep Alive</label>
      </div>
      <div>
        <input type="checkbox" name="" id="bb">
        <label for="bb">2. Communication</label>
      </div>
    </section>
    
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
      window.microApp.dispatch({type: 'OHLAOHLA'})
    }
  }
};
</script>
<style scoped>
  .cart-item {
    border: 2px solid rgb(255, 213, 2);
    margin: 5px;
    padding: 0 10px;
    width: 45%;
    display: inline-block;
  }
  
  @media (max-width: 716px) {
    .cart-item {
      width: 40%;
    }
  }

  @media (max-width: 500px) {
    .cart-item {
      width: 100%;
    }
  }
  
</style>
<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <div class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <router-link to="/products">Product</router-link>
        <div v-if="showDropdown" class="dropdown-content">
          <router-link v-for="series in seriesList" :key="series.key" :to="`/series/${series.key}`">{{ series.name }}</router-link>
        </div>
      </div>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<script>
import { useProductsStore } from '../store/products';

export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    seriesList() {
      const store = useProductsStore();
      return store.series;
    },
  },
};
</script>

<style>
header {
  background-color: #f8f9fa;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-around;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
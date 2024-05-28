<template>
  <div>
    <h1>Products</h1>
    <router-link v-for="series in seriesList" :key="series.id" :to="`/products/${series.name}`">{{ series.name }}</router-link>
  </div>
</template>

<script>
import { useProductsStore } from '../store/products';

export default {
  name: 'ProductsPage',
  computed: {
    seriesList() {
      const store = useProductsStore();
      return store.series;
    },
  },
};
</script>
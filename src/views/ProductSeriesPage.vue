<template>
  <div>
    <h1>Series: {{ seriesName }}</h1>
    <router-link v-for="product in seriesProducts" :key="product.id" :to="`/products/${product.id}`">{{ product.name }}</router-link>
  </div>
</template>

<script>
import { useProductsStore } from '../store/products';

export default {
  name: 'ProductSeriesPage',
  computed: {
    seriesName() {
      const store = useProductsStore();
      const series = store.series.find(s => s.key === this.$route.params.series);
      return series ? series.name : '';
    },
    seriesProducts() {
      const store = useProductsStore();
      return store.products.filter(product => product.series === this.seriesName);
    },
  },
};
</script>
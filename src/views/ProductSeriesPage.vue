<template>
  <div>
    <h1>Series: {{ seriesName }}</h1>
    <main class="series-list">
      <div v-for="set in seriesProducts" :key="set.no">
        <ProductCard :product="set"/>
      </div>
    </main>
    <hr>
    <section class="verify-item">
      <h2>Verify Item:</h2>
      <div>
        <input type="checkbox" name="" id="aa">
        <label for="aa">1. Store</label>
      </div>
      <div>
        <input type="checkbox" name="" id="bb">
        <label for="bb">2. Sizing</label>
      </div>
      <div>
        <input type="checkbox" name="" id="bb">
        <label for="bb">3. Prev/Next Page</label>
      </div>
    </section>
  </div>
</template>

<script>
import { useProductsStore } from '../store/products';
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductSeriesPage',
  components: {
    ProductCard
  },
  computed: {
    seriesName() {
      const store = useProductsStore();
      const series = store.series.find(s => s.key === this.$route.params.series);
      return series ? series.name : '';
    },
    seriesProducts() {
      const store = useProductsStore();
      const series = store.series.find(s => s.key === this.$route.params.series);
      return series ? series.list : [];
    },
  }
};
</script>
<style>
.series-list {
  display: flex;
}
</style>
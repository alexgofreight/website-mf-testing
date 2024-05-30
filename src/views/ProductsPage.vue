<template>
  <div>
    <h1>Products</h1>
    <main>
      <div class="lego-series">
        <router-link v-for="series in seriesList" :key="series.key" :to="`/series/${series.key}`">
          <img :src="series.img" alt="">
          <div class="title">
            {{ series.name }}
          </div>
        </router-link>
      </div>
    </main>
    <hr>
    <section class="verify-item">
      <h2>Verify Item:</h2>
      <div>
        <input type="checkbox" name="" id="aa">
        <label for="aa">1. RWD</label>
      </div>
      <div>
        <input type="checkbox" name="" id="bb">
        <label for="bb">2. Route keeping</label>
      </div>
    </section>
    
  </div>
</template>

<script>
import { useProductsStore } from '../store/products';

export default {
  name: 'ProductsPage',
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    seriesList() {
      const store = useProductsStore();
      return store.series;
    },
  },
};
</script>

<style scoped>
.lego-series {
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
}
.lego-series img {
  width: 300px;
  height: 150px;
  object-fit: cover;
  vertical-align: middle;
}

a {
  text-decoration: none;
  margin: 5px;
}

a .title {
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  padding: 5px;
  background-color: red;
  color: white;
}
</style>
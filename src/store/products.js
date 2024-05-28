import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    series: [],
    products: [],
  }),
  actions: {
    setSeries(series) {
      this.series = series;
    },
    setProducts(products) {
      this.products = products;
    },
  },
});
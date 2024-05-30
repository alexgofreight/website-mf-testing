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
    moveToCart(productNo) {
      for (let i = 0; i < this.products.length; i++) {
        if (productNo === this.products[i].no) {
          this.products[i].quantity --;
          console.log(this.products[i].quantity)
        }
      }
    }
  },
});
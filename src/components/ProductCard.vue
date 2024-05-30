<template>
  <div class="product-card">
    <img :src="product.img" :alt="product.name" class="product-image">
    <h2 class="product-title">{{ product.name }}</h2>
    <!-- <p class="product-quantity">Quantity: {{ product.quantity }}</p> -->
    <p class="product-price">${{ product.price }}</p>
    <button @click="addToCart" class="add-to-cart">Add to Cart</button>
  </div>
</template>

<script>
import { useCartStore } from '../store/cart'
import { useProductsStore } from '../store/products'

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  setup(props, context) {
    const storeCart = useCartStore()
    const storeProduct = useProductsStore()

    const addToCart = () => {
      if (props.product.quantity > 0) {
        storeCart.addToCart(props.product)
        storeProduct.moveToCart(props.product.no)
      }
    }

    return {
      addToCart
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-sizing: border-box;
  min-width: 220px;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.2em;
  margin: 0.5em 0;
}

.product-quantity,
.product-price {
  margin: 0.5em 0;
}

.add-to-cart {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #0056b3;
}
</style>
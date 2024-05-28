import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ProductsPage from './views/ProductsPage.vue';
import ProductSeriesPage from './views/ProductSeriesPage.vue';
import ProductDetailPage from './views/ProductDetailPage.vue';
import CartPage from './views/CartPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/series/:series', component: ProductSeriesPage },
  { path: '/products/:id', component: ProductDetailPage },
  { path: '/cart', component: CartPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ProductsPage from './views/ProductsPage.vue';
import ProductSeriesPage from './views/ProductSeriesPage.vue';
import CartPage from './views/CartPage.vue';
import OtherPage from './views/OtherPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/series/:series', component: ProductSeriesPage },
  { path: '/cart', component: CartPage },
  { path: '/other', component: OtherPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
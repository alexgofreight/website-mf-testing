import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import { useProductsStore } from './store/products';
import microApp from '@micro-zoe/micro-app'

const app = createApp(App);
app.use(router);
app.use(pinia);

const productsStore = useProductsStore();

// 加載 data.json 的內容
async function loadInitialData() {
  const data = await fetch('/data.json').then(res => res.json());
  
  const series = data.series.map(series => ({
    name: series.name,
    key: series.key,
    img: series.img,
    list: series.list
  }));

  const products = data.series.flatMap(series => 
    series.list.map(product => ({
      ...product,
    }))
  );

  productsStore.setSeries(series);
  productsStore.setProducts(products);
}

loadInitialData().then(() => {
  app.mount('#app');
  microApp.start({
    tagName: 'micro-app-lego'
  });
});

window.unmount = () => {
  app.unmount()
}

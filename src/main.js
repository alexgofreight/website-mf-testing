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
  const sourcePathBase = process.env.NODE_ENV === 'production' ? '/website-mf-testing' : '';
  const data = await fetch(sourcePathBase + '/data.json').then(res => res.json());
  
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
  app.unmount();
  // 卸載監聽函数
  window.microApp?.removeDataListener(dataListener)
}

function dataListener (data) {
  console.log('来自主應用的數據', data);
  alert('This is msg from FMS: ' + JSON.stringify(data));
}

// 監聽數據變化，初始化時如果有數據則主動觸發一次
window.microApp?.addDataListener(dataListener, true)

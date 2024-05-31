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
  // 解绑监听函数
  window.microApp?.removeDataListener(dataListener)
}

function dataListener (data) {
  console.log('来自主应用的数据', data)
}

// 监听数据变化，初始化时如果有数据则主动触发一次
window.microApp?.addDataListener(dataListener, true)
// window.microApp?.addDataListener((data) => {
//   console.log('child-vite addDataListener:', data)
// })



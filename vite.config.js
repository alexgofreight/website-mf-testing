import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['micro-app'].includes(tag),
      }
    }
  })],
  // server: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  //     'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization'
  //   }
  // },
})

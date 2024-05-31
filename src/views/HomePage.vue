<template>
  <div>
    <h1>Home Page</h1>
    <!-- <micro-app name='my-app123' url='https://k8cchaha.github.io/collection/'></micro-app> -->
    <!-- <micro-app name='my-app321' url='https://k8cchaha.github.io/collection/'></micro-app> -->
    <main>
      <button @click="showLoginModal = true" class="login-btn">登入</button>
      <button @click="showGlobal(false)" class="login-btn">顯示全域變數</button>
      <button @click="showGlobal(true)" class="login-btn">顯示window全域變數</button>
    </main>
    <hr>
    <section class="verify-item">
      <h2>Verify Item:</h2>
      <div>
        <input type="checkbox" name="" id="aa">
        <label for="aa">1. Full Screen Mask</label>
      </div>
      <div>
        <input type="checkbox" name="" id="bb">
        <label for="bb">2. Popup Dialog</label>
      </div>
      <div>
        <input type="checkbox" name="" id="cc">
        <label for="cc">3. JS Isolation</label>
      </div>
    </section>
    <LoginModal v-if="showLoginModal" @close="showLoginModal = false"/>
  </div>
</template>

<script>
import LoginModal from '../components/LoginModal.vue';

export default {
  name: 'HomePage',
  components: {
    LoginModal
  },
  data() {
    return {
      showLoginModal: false
    };
  },
  methods: {
    showGlobal(isWindow) {
      if (isWindow) {
        console.log(window.taiwan)
      } else {
        console.log(hello)
      }
    }
  }
};
</script>

<style>
  .login-btn {
    padding: 5px 10px;
  }
</style>
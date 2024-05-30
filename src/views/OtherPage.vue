<template>
  <div>
    <h1>Other Page</h1>
    <main>
      <micro-app-lego name='my-app123' url='https://k8cchaha.github.io/collection/'></micro-app-lego>
    </main>
    <hr>
    <section class="verify-item">
      <h2>Verify Item:</h2>
      <div>
        <input type="checkbox" name="" id="aa">
        <label for="aa">1. Multiple Nested</label>
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
  }
};
</script>

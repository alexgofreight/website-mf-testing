<template>
  <Header />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<style>
.content {
  padding-top: 60px; 
}
</style>
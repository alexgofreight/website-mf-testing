<template>
  <div>
    <h1>Home Page</h1>
    <main>
      <button @click="showLoginModal = true" class="action-btn" style="color:red">Login</button>
      <button @click="showGlobal(false)" class="action-btn">Show Child App var variable</button>
      <button @click="showGlobal(true)" class="action-btn">Show Child App window variable</button>
      <button @click="sendMsg" class="action-btn">Send Msg to Parent App</button>
      <button @click="getParentDOM" class="action-btn">Get Parent DOM</button>
      <button @click="setGetCookie" class="action-btn">Set & Get Cookie</button>
      <button @click="getLocalStorage" class="action-btn">Get Local Storage</button>
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
      <div>
        <input type="checkbox" name="" id="dd">
        <label for="dd">4. Communication</label>
      </div>
      <div>
        <input type="checkbox" name="" id="ee">
        <label for="ee">5. Set & Get Cookie</label>
      </div>
      <div>
        <input type="checkbox" name="" id="ff">
        <label for="ee">6. Get local storage</label>
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
    },
    sendMsg() {
      window.microApp.dispatch({msg: 'This is a blessing messages from the child application'});
    },
    getParentDOM() {
      const elem = document.getElementById('receiveMsg');
      console.log(elem)
    },
    setGetCookie() {
      document.cookie = 'cookieX=12345';
      console.log('Child App get cookie:', document.cookie);
    },
    getLocalStorage() {
      const localData = localStorage.getItem('tracking::user-url-preference');
      console.log('Child App get local storage:',localData);
    }
  },
  mounted() {
    // document.cookie = 'cookieX=12345';
    // console.log('Child App get cookie:', document.cookie);
    // const localData = localStorage.getItem('tracking::user-url-preference');
    // console.log('Child App get local storage:',localData);
  }
};
</script>

<style>
  .action-btn {
    padding: 5px 10px;
    margin-right: 5px;
  }
</style>
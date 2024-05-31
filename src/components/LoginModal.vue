<template>
  <div class="modal-overlay-lego" @click.self="closeModal">
    <div class="modal-content-lego">
      <h2>登入</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">帳號:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">密碼:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="buttons">
          <button type="button" @click="closeModal">取消</button>
          <button type="submit">確認</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // 在這裡處理登入邏輯
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-overlay-lego {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content-lego {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.modal-content-lego label {
  margin-right: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  padding: 5px 10px;
}
</style>

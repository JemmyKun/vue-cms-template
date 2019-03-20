<template>
  <div class="login-container">
    <div class="login-box">
      <div>
        <span>用户名：</span>
        <a-input aria-placeholder="请输入用户名..." @change="changeInputValue"></a-input>
      </div>
      <div>
        <span>密码：</span>
        <a-input aria-placeholder="请输入用户名..." type="password" @change="changeInputValue"></a-input>
      </div>
    </div>
    <a-button @click="logIn" type="primary">登录</a-button>
  </div>
</template>

<script>
import md5 from "js-md5";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      userInfo: ""
    };
  },
  mounted() {
    let store = this.$store;
    let state = store.state;
    console.log("login-state", state);
  },
  computed: {
    ...mapState("login", {
      username: state => state.username
    }),
    ...mapState("login", {
      password: state => state.password
    })
  },
  methods: {
    logIn() {
      this.$router.push("main");
    },
    changeInputValue() {}
  }
};
</script>
<style lang="scss" scoped>
</style>



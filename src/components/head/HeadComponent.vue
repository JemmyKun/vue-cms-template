<template>
  <div class="app-header">
    <div class="logo-box">
      <span class="logon-pic"></span>
      <span class="logo-title">后台管理系统模版</span>
    </div>
    <div class="user-info-box">
      <span class="user-name">{{username}}</span>
      <i class="line-icon"></i>
      <span class="logout-btn" @click="logOut">退出登录</span>
    </div>
  </div>
</template>

<script>
import * as Apis from "../../api/login";
export default {
  name: "HeadComponent",
  props: {
    msg: String
  },
  components: {},
  data: () => ({
    username: "admin"
  }),
  methods: {
    logOut() {}
  },
  mounted() {
    window.EventEmitter.on("getUserInfo", data => {
      this.username = data.username || "--";
    });
    this.$bus.$on("getUserInfo", data => {
      console.log("$bus getUserInfo:", data);
    });
  },
  destroyed() {
    window.EventEmitter.off("getUserInfo");
    this.$bus.$off("getUserInfo");
  }
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  line-height: 60px;
  background: #007ce7;
  color: #fff;
  padding: 0 50px;
  font-size: 16px;
  .logo-box {
    height: 100%;
    min-width: 300px;
    cursor: pointer;
    .logo-title {
      font-size: 24px;
    }
  }
  .user-info-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    .user-name {
      height: 100%;
      display: inline-block;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .line-icon {
      display: inline-block;
      border: 1px solid #ddd;
      width: 2px;
      height: 20px;
      margin: 0 10px;
    }
    .logout-btn {
      cursor: pointer;
    }
  }
}
</style>



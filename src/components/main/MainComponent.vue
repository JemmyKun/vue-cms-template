<template>
  <div class="main-container">
    <HeadComponent username="admin"/>
    <div class="main-container">
      <div class="left-side">
        <LeftMenu/>
      </div>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "../head/HeadComponent.vue";
import LeftMenu from "../leftMenu/LeftMenu.vue";

export default {
  name: "MainComponent",
  components: {
    HeadComponent,
    LeftMenu
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  .main-container {
    height: calc(100% - 60px);
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    flex-basis: auto;

    .left-side {
      width: 200px;
      background-color: #fff;
      height: 100%;
      overflow: auto;
    }
    .content-container {
      padding: 20px;
      margin: 0 20px;
      height: 100%;
      box-sizing: border-box;
      min-width: 0;
      flex: 1;
      overflow: auto;
      background: #fff;
    }
  }
}
</style>


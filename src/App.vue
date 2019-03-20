<template>
  <div id="app">
    <router-view>
      <MainComponent/>
    </router-view>
  </div>
</template>

<script>
import MainComponent from "./components/main/MainComponent.vue";

export default {
  name: "app",
  components: {
    MainComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

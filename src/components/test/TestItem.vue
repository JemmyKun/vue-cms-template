<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>testMsg:{{testMsg}}</h2>
    <button @click="add">showTime</button>
    <ItemChild ref="ItemChild"/>
  </div>
</template>

<script>
import ItemChild from "./ItemChild.vue";

export default {
  components: {
    ItemChild
  },
  data() {
    return {
      msg: "test",
      testMsg: this.for
    };
  },
  inject: ["for"], //得到父组件传递过来的数据
  props: {
    title: String
  },
  methods: {
    add() {
      let time = Date.now();
      this.$emit("getChildData", time);
    }
  }
};
</script>
<style lang="sass" scoped>

</style>

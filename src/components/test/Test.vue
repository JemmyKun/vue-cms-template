<template>
  <div class="container">
    <TestItem title="hello wordl" v-on:getChildData="getData"/>
    <TestList :list="list" ref="TestList"/>
    <h2>{{time}}</h2>
    <h2>timeNum:{{timeNum}}</h2>
    <h3>num:{{num}}</h3>
  </div>
</template>
<script>
import TestItem from "./TestItem.vue";
import TestList from "./TestList.vue";
import { format } from "date-fns";
export default {
  components: {
    TestItem,
    TestList
  },
  data() {
    return {
      num: 0,
      time: 0,
      timeNum: 0,
      msg: "test",
      list: [
        {
          name: "aaa",
          id: 0
        },
        {
          name: "bbb",
          id: 1
        }
      ]
    };
  },
  provide: {
    for: "test"
  },
  mounted() {
    this.$bus.$on("possData", num => {
      this.num = num;
    });
    console.log("this.refs:", this.$refs.TestList.list);
    let list = this.$refs.TestList.list;
    list.forEach(item => {
      console.log(item.name);
    });
  },
  methods: {
    getData(data) {
      this.timeNum = data;
      this.time = format(data, "YY-MM-DD hh:mm:ss");
    }
  },
  destroyed() {
    this.$bus.$off("possData");
  }
};
</script>
<style lang="sass" scoped>

</style>

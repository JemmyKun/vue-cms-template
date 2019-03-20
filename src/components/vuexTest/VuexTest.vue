<template>
  <div>
    <h1>vuex-test:{{title}}</h1>
    <div class="main-page">mainPage的count:{{count}}</div>
    <button @click="increment">increment++++</button>
    <button @click="decrement">decrement----</button>
    <button @click="add">add----</button>
    <button @click="getList">getList----</button>

    <h1>count的变化：{{count}}</h1>
    <h1>state-num:{{num}}</h1>
    <h1>state-time:{{time}}</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.time}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "hello vuex",
      num: 0
    };
  },
  computed: {
    ...mapState("moduleA", {
      count: state => state.count
    }),
    ...mapState("moduleB", {
      list: state => {
        console.log("state:", state);
        return state.list;
      }
    }),
    time: function() {
      return this.num + "===" + Date.now();
    }
  },
  methods: {
    ...mapActions("moduleA", ["increment", "decrement"]),
    ...mapActions("moduleB", ["getList"]),
    add() {
      this.num = Math.random() * 100;
    }
  },
  mounted() {
    let state = this.$store.state;
    console.log("state:", state);
  }
};
</script>
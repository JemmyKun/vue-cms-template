<template>
  <div>
    item-child component
    <button @click="possData">clcilckckc k</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "item-child component"
    };
  },
  methods: {
    possData() {
      this.$bus.$emit("possData", Math.random() * 100);
    }
  }
};
</script>

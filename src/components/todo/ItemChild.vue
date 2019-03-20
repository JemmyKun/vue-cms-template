<template>
  <div>item-child component</div>
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
      this.$bus.$emit("getData", Math.random() * 100);
    }
  }
};
</script>

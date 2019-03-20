<template>
  <div class="add-todo-box">
    <span class="input-box">
      <a-input placeholder="add todo item..." v-model="value" v-on:keyup.enter="addItem"></a-input>
    </span>
    <span class="add-btn">
      <a-button @click="addItem" type="primary">Add</a-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addItem() {
      let value = this.value || "";
      if (value === "") {
        return false;
      }
      let item = {
        name: value,
        createTime: window.Date.now(),
        isEditing: false
      };
      this.$bus.$emit("addItem", item);
      this.value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.add-todo-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  .input-box {
    display: inline-block;
    width: 280px;
  }
  .add-btn {
    display: inline-block;
    width: 160px;
  }
}
</style>


<template>
  <div class="todo-list-container">
    <AddTodo/>
    <TodoList/>
  </div>
</template>

<script>
import * as Apis from "../../api/doupan";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {};
  },
  mounted() {
    // 豆瓣 接口
    Apis.getTop250().then(res => {});
  }
};
</script>

<style scoped lang="scss">
</style>



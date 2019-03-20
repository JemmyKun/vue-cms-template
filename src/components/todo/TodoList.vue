<template>
  <div class="todo-list">
    <ul class="list-box">
      <li v-for="(item,index) in list" :key="index" class="todo-item">
        <span class="item-name">{{item.name}}</span>
        <span class="item-time">{{format(item.createTime)}}</span>
        <a-icon type="edit" class="edit-icon"/>
        <a-icon type="delete" class="delete-icon" @click="deleteItem(index)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    setStorage(list) {
      window.localStorage["vueTodoList"] = JSON.stringify(list);
    },
    getStorage() {
      let vueTodoList = window.localStorage["vueTodoList"];
      if (vueTodoList) {
        let list = JSON.parse(vueTodoList);
        this.list = list;
      }
    },
    format(time) {
      return format(time, "YYYY-MM-DD HH:mm:ss") || "--";
    },
    deleteItem(index) {
      this.list.splice(index, 1);
      this.setStorage(this.list);
    }
  },
  mounted() {
    this.getStorage();
    this.$bus.$on("addItem", item => {
      this.list.push(item);
      this.setStorage(this.list);
    });
  }
};
</script>
<style lang="scss" scoped>
.todo-list {
  .list-box {
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      .item-name {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item-time {
        display: inline-block;
        margin-right: 10px;
      }
      .edit-icon {
        color: #f00;
        font-size: 18px;
        cursor: pointer;
        margin-right: 10px;
      }
      .delete-icon {
        color: #1890ff;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>



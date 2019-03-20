<template>
  <a-menu :defaultOpenKeys="['sub1','sub2']" :selectedKeys="[hash]" :mode="mode">
    <a-sub-menu key="sub1">
      <span slot="title">
        <a-icon type="setting"/>
        <span>ModuleA</span>
      </span>
      <a-menu-item key="/pageA">
        <a href="javascript:void 0" @click="pushRouter('/main/pageA')">pageA</a>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title">
        <a-icon type="appstore"/>
        <span>ModuleB</span>
      </span>
      <a-menu-item key="/pageB">
        <a href="javascript:void 0" @click="pushRouter('/main/pageB')">pageB</a>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="/todo">
      <a-icon type="ordered-list"/>
      <a href="javascript:void 0" @click="pushRouter('/main/todo')" class="route-link">TodoList</a>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  name: "leftMenu",
  data() {
    return {
      mode: "inline",
      hash: "/pageA",
      MenuList: []
    };
  },
  methods: {
    pushRouter: function(path) {
      this.$router.push(path);
      this.getCurHash();
    },
    getCurHash() {
      let hash = window.location.hash;
      let currentPath = hash.replace("#/main", "");
      this.hash = currentPath;
    }
  },
  mounted() {
    this.getCurHash();
  }
};
</script>
<style scoped lang="scss">
.ant-menu-item {
  .route-link {
    display: inline;
  }
}
</style>



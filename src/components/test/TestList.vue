<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
  },
  data() {
    return {
      test: "test"
    };
  },
  mounted() {}
};
</script>
<style lang="sass" scoped>

</style>

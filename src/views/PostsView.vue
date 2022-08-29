<template>
  <div class="home" v-if="posts">
    <h1>Check out the posts...</h1>

    <div
      class="posts"
      v-for="post of posts"
      :key="post.post_id"
      :post="post"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    data() {
      // return { posts: "" };
    },
    posts() {
      console.log(this.$store.state.posts);
      return this.$store.state.posts;
    },
  },
};
</script>

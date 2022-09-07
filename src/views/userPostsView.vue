<template>
  <section id="userPosts">
    <div v-for="post of posts" :key="post.post_id" :post="post">
      <img :src="post.image" alt="" />
    </div>
    <h1>{{ user.user.user_name }}</h1>
  </section>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getPost");
  },
};
</script>

<style scoped>
#userPosts {
  min-height: 100vh;
}
</style>

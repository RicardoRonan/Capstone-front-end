<template>
  <div class="conatiner" v-if="post">
    <div
      class="row m-5"
      v-for="post of post"
      :key="post.post_id"
      :post="post"
      id="full-container"
    >
      <div class="col-lg-6" id="left-image">
        <img id="single-img" class="pt-3" :src="post.image" alt="" />
      </div>
      <div class="col-lg-6" id="right-info">
        <h2>{{ post.image_title }}</h2>
        <p>{{ post.category }}</p>
        <p>{{ post.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.state.post;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getPost", this.$route.params.id);
  },
};
</script>

<style scoped>
#full-container {
  height: 50rem;
  width: 100%;
  border-radius: 2rem;
  background: linear-gradient(90deg, var(--light-green), var(--dark));
  box-shadow: 0px 0px 24px var(--green);

  padding-top: 2rem;
}
#single-img {
  height: fit-content;
  object-fit: cover;
  aspect-ratio: 1;
}
</style>

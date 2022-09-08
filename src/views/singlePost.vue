<template>
  <div class="conatiner-fluid" v-if="post">
    <div
      class="row m-5 container-fluid"
      v-for="post of post"
      :key="post.post_id"
      :post="post"
      id="full-container"
    >
      <div class="col-lg-6" id="left-image">
        <div id="back">
          <router-link to="/posts">
            <i id="back-icon" class="fa-solid fa-arrow-left"></i>
          </router-link>
        </div>
        <img id="single-img" class="img-fluid" :src="post.image" alt="" />
      </div>
      <div class="col-lg-6 text-light" id="right-info">
        <h2>{{ post.image_title }}</h2>
        <p>{{ post.category }}</p>
        <p>{{ post.caption }}</p>
      </div>
    </div>
  </div>
  <div v-else><h1>loading...</h1></div>
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
#right-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#left-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#full-container {
  height: auto;
  width: auto;
  border-radius: 2rem;
  background: linear-gradient(90deg, var(--light-green), var(--dark));
  box-shadow: 0px 0px 24px var(--green);
  padding: 2rem;
  margin-top: 6rem !important;
  display: flex;
}
#single-img {
  height: 35rem;
  width: 43rem;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 56px;
  /* aspect-ratio: 1; */
  /* position: absolute; */
}
#back {
  position: absolute;
  background-color: var(--dark);
  width: 3rem;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 60%;
  left: 0;
  top: 0;
  box-shadow: 0px 0px 24px var(--green);
}
#back-icon {
  font-size: 2rem;
  padding: 4px;
  color: var(--light);
}
</style>

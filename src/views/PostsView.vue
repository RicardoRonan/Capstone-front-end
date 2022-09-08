<template>
  <div class="post m-5" v-if="posts">
    <h1 class="pt-5">Check out the posts...</h1>
    <div class="shape"></div>
    <div class="search-bar-cont mx-auto">
      <select id="sort" value="Sortby" class="m-3 mx-auto">
        <option name="flowers" id="">Flower</option>
        <option name="mountains" id="">Mountains</option>
        <option name="waterfall" id="">Waterfall</option>
        <option name="clouds" id="">Clouds</option>
        <option name="trees" id="">Trees</option>
      </select>
      <form action="" class="search-bar mx-auto m-2">
        <input type="text" name="q" placeholder="Search Anything" />
        <button type="submit" id="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
    <div class="row">
      <div
        id="posts"
        class="posts col-lg-2 p-2"
        v-for="post of posts"
        :key="post.post_id"
        :post="post"
      >
        <router-link
          :to="{ name: 'singlepost', params: { id: post.post_id } }"
          id="img-cont"
        >
          <img id="post-image" :src="post.image" alt="" />
        </router-link>
      </div>
    </div>
  </div>
  <div v-if="!posts" class="loader"></div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    data() {},
    posts() {
      console.log(this.$store.state.posts);
      return this.$store.state.posts;
    },
  },
};
</script>
<style scoped>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
.loader {
  --height-of-loader: 4px;
  --loader-color: var(--green);
  width: 100%;
  height: var(--height-of-loader);
  /* border-radius: 30px; */
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  min-height: 100vh;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  /* border-radius: 30px; */
  animation: moving 1s ease-in-out infinite;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
#sort {
  height: 2rem;
  border-radius: 2rem;
  background-color: var(--light-green);
  border: none !important;
}
.search-bar {
  display: flex;
  align-content: center;
  width: 100%;
  max-width: 700px;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 60px;
  padding: 10px 20px;
}

search-bar,
input {
  flex: 1;
  background: transparent;
  border: 0;
  outline: none;
  padding: 6px 10px;
  font-size: 20px;
  color: var(--dark);
  padding-left: 2px;
}

::placeholder {
  color: var(--dark);
}

search-bar,
button,
i {
  width: 25px;
}

search-bar,
button {
  border: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: var(--green);
  cursor: pointer;
}
.shape {
  clip-path: circle(50% at 16% 40%);
  background: linear-gradient(90deg, var(--light), var(--light-green));
}
body {
  background: linear-gradient(90deg, var(--light), var(--light-green));
}
#img-cont {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  object-fit: cover;
  aspect-ratio: 1;

  /* aspect-ratio: 0.5; */
}
img:hover {
  display: block;
  mix-blend-mode: soft-light;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
}
@media only screen and (max-width: 600px) {
  button#search-btn {
    margin-left: -4.5rem;
  }
}
</style>

import {toRaw} from 'vue'

<template>
  <section id="userPosts" v-if="userPosts">
    <h1 id="heading" class="mx-auto">Your Posts</h1>
    <h1 id="heading-2">here are all your posts {{ user.user.user_name }}</h1>
    <div class="row" id="container">
      <div
        v-for="(userPosts, id) in userPosts"
        :key="id"
        id="posts"
        class="posts col-lg-4 p-2"
      >
        <div id="img-cont">
          <img :src="userPosts.image" alt="" />
          <div id="icons-cont">
            <i id="bin" class="fa-solid fa-trash"></i>
            <i id="pencil" class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toRaw } from "@vue/reactivity";
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    userPosts() {
      let posts = toRaw(this.$store.state.posts);

      let id = this.$store.state.user.user.user_id;
      let i;
      let userPosts = [];
      for (i = 0; i < posts.length; i++) {
        if (posts[i].user_id == id) {
          userPosts.push(posts[i]);
        }
      }
      return userPosts;
    },
  },
  mounted() {
    console.log(this.userPosts);
    // this.$store.dispatch("getPost");
    return this.$store.dispatch(
      "getUserpost",
      this.$store.state.user.user.user_id
    );
  },
};
</script>

<style scoped>
#heading-2 {
  margin-top: 2rem;
}
#heading {
  margin-top: 5rem;
}

#bin {
  color: var(--light);
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  background-color: var(--dark);
  border-radius: 50%;
  box-shadow: 0px 0px 24px var(--green);
}
#bin:hover {
  color: var(--green);
}

#pencil {
  color: var(--light);
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  background-color: var(--dark);
  border-radius: 50%;
  box-shadow: 0px 0px 24px var(--green);
}
#pencil:hover {
  color: var(--green);
}
#container {
  margin: 6rem;
  margin-top: 4rem;
}
#userPosts {
  min-height: 100vh;
}
#img-cont {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  object-fit: cover;
  aspect-ratio: 1;
}
#icons-cont {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
img:hover {
  display: block;
  mix-blend-mode: soft-light;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
}
@media only screen and (max-width: 600px) {
  #pencil {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  #bin {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
}
</style>

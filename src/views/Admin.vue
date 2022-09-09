<template>
  <section id="admin">
    <div class="heading">
      <h1>posts ADMIN PAGE</h1>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add post
    </button>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create a new post
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createpost" id="modal-form" class="p-2">
              <input
                type="text"
                id="sku-add"
                placeholder="Image Title"
                v-model="image_title"
              />
              <input type="text" placeholder="caption" v-model="caption" />
              <input type="text" placeholder="Image" v-model="image" />
              <select
                id="sort"
                value="Sortby"
                class="m-3 mx-auto"
                v-model="category"
              >
                <option value="flowers" name="flowers" id="">Flower</option>
                <option value="mountains" name="mountains" id="">
                  Mountains
                </option>
                <option value="waterfall" name="waterfall" id="">
                  Waterfall
                </option>
                <option value="clouds" name="clouds" id="">Clouds</option>
                <option value="trees" name="trees" id="">Trees</option>
              </select>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button
                type="btn"
                class="btn btn-outline-dark"
                @click="createpost"
              >
                Create post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">caption</th>
          <th scope="col">img</th>
          <th scope="col">category</th>
          <th scope="col">delete</th>
          <th scope="col">edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.post_id">
          <td>{{ post.image_title }}</td>
          <td>{{ post.caption }}</td>
          <td>
            <img v-bind:src="post.image" class="post.img" />
          </td>
          <td>{{ post.category }}</td>
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deletePost(post.post_id)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="heading">
      <h1>USERS ADMIN PAGE</h1>
    </div>
    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FULL NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">BILLING ADDRESS</th>
          <th scope="col">COUNTRY</th>
          <th scope="col">CART</th>
          <th scope="col">PHONE</th>
          <th scope="col">USER ROLE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.user.user_id">
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_type }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.img }}</td>
          <td>{{ user.bio }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button type="btn" @click="deleteuser">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
          <td>
            <button type="btn">
              <i class="fa-solid fa-pencil" @click="toggleModal"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <button @click="console2">click</button>
</template>
<script>
// import { ConcatenationScope } from "webpack";

export default {
  mounted() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getUser");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    // post() {
    //   return this.$store.state.post;
    // },
    users() {
      return this.$store.state.users;
    },
  },

  data() {
    // const user_id = this.user.user.user_id;
    return {
      user_id: "",
      image_title: "",
      caption: "",
      image: "",
      category: "",
    };
  },
  methods: {
    console() {
      console.log(this.$store.state.user.user_id);
    },
    console2() {
      console.log(this.$store.state.post.post.post_id);
    },
    createpost() {
      this.$store.dispatch("createpost", {
        user_id: this.user.user.user_id,
        image_title: this.image_title,
        caption: this.caption,
        image: this.image,
        category: this.category,
      });
    },

    editpost(id) {
      return this.$store.dispatch("editpost", id);
    },
    deletePost(id) {
      return this.$store.dispatch("deletePost", { id: id });
    },
  },
};
</script>
<style scoped>
#admin {
  background-color: var(--dark);
  color: white;
  margin-top: 50px;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
img {
  aspect-ratio: 1;
  object-fit: cover;
  width: 13rem;
  height: 10rem;
}
</style>

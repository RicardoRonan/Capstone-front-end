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
              Create A New Candle
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
              <input type="text" id="sku-add" placeholder="Sku" v-model="sku" />
              <input
                type="text"
                id="title-add"
                placeholder="Candle Name"
                v-model="name"
              />
              <input
                type="number"
                id="price-add"
                placeholder="Price"
                v-model="price"
              />
              <input
                type="number"
                id="weight-add"
                placeholder="Weight"
                v-model="weight"
              />
              <textarea
                name="description"
                type="text"
                id="description-add"
                cols="57"
                rows="10"
                placeholder="Description of your Candle"
                v-model="descriptions"
              ></textarea>
              <input
                type="url"
                placeholder="https://picsum.photos/300/400"
                id="imageURL-add"
                v-model="image"
              />
              <input
                type="text"
                id="category-add"
                placeholder="Category"
                v-model="category"
              />
              <div></div>

              <input
                v-model="create_date"
                class="form form-sm"
                aria-label=".form-sm example"
                id="date-add"
              />
              <input
                v-model="stock"
                class="form form-sm"
                aria-label=".form-sm example"
                id="quantity-add"
              />
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="btn"
                class="btn btn-outline-dark"
                @click="createpost"
              >
                Create Candle
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">IMG</th>
          <th scope="col">PRICE</th>
          <th scope="col">QTY</th>
          <th scope="col">EDIT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.post_id">
          <td>{{ post.id }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.category }}</td>
          <td>{{ post.description }}</td>
          <td>
            <img v-bind:src="post.image" class="post.img" />
          </td>
          <td>{{ post.price }}</td>
          <td>{{ post.stock }}</td>
          <!-- <td>{{ post.category }}</td> -->
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deletepost">
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
        <tr v-for="user in users" :key="user.user.user_id">
          <td>{{ user.id }}</td>
          <td>{{ user.full_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.billing_address }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.cart }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deleteuser">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    return {
      sku: "",
      name: "",
      price: "",
      weight: "",
      description: "",
      image: "",
      category: "",
      create_date: "",
      stock: "",
    };
  },
  methods: {
    createpost() {
      return this.$store.dispatch("createpost", {
        sku: this.sku,
        name: this.name,
        price: this.price,
        weight: this.weight,
        description: this.description,
        image: this.image,
        category: this.category,
        create_date: this.create_date,
        stock: this.stock,
      });
      //   console.log("posts");
    },
    post() {
      return this.$store.state.post;
    },
    user() {
      return this.$store.state.user;
    },
    editpost(id) {
      return this.$store.dispatch("editpost", id);
    },
    deletepost(id) {
      return this.$store.dispatch("deletepost", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getposts");
    // return this.$store.dispatch("getUser");
  },
};
</script>
<style scoped>
#admin {
  background-color: #0a0908;
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

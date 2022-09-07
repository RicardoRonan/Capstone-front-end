<template>
  <i class="fa-solid fa-pen-to-square" id="edit" @click="toggleModal"></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="updateUser(user.user_id)">
      <div>Username</div>
      <input class="form-control mb-2" type="text" v-model="user.user_name" />
      <div>Img URL</div>
      <input class="form-control mb-2" type="text" v-model="user.img" />
      <div>Bio</div>
      <input class="form-control mb-2" type="text" v-model="user.bio" />
      <div>Email</div>
      <input class="form-control mb-2" type="email" v-model="user.email" />
      <button class="btn" type="submit">Save</button>
      <button class="btn" type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    updateUser() {
      this.$store.dispatch("updateUser", this.user);
    },
  },
};
</script>
<style scoped>
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 5px solid black;
  z-index: 100;
}
#edit {
  font-size: 20px;
  font-weight: 900;
  color: cornflowerblue;
}
</style>

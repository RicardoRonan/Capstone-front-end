<template>
  <div class="conatiner" v-if="post">
    <div class="card" v-for="post of post" :key="post.post_id" :post="post">
      <div class="car-header">
        <img :src="post.image" alt="sample img" />
      </div>
      <div class="card-body">
        <a href="" class="text"> <h5>Location, Country</h5></a>
        <div class="card-body-title">
          <strong><a href="#">Place name</a></strong>
        </div>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cumque impedit est vel, officia iusto.
        </p>
      </div>
      <div class="card-footer">
        <div class="user">
          <div class="user-img">
            <img
              src="https://media.almabaseapp.com/1/profile_pictures/raghavender-mittapalli/raghavender-mittapalli-present.png"
              alt=""
            />
          </div>
          <div class="user-name">
            <span>Hanibal Girmay</span>
            <small>Jan 05 2021</small>
          </div>
        </div>
        <div class="shareBtn">
          <i class="fas fa-share"></i>
        </div>
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
.car-header {
  position: relative;
  width: 350px;
}
img {
  position: absololute;
  width: 100%;
  border-radius: 15px;
  -webkit-box-shadow: 4px 11px 11px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 11px 11px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 11px 11px -11px rgba(0, 0, 0, 0.75);
  z-index: 99;
  transition: 0.2s ease;
}
.card:hover {
  transform: scale(1.01);
  cursor: pointer;
  box-shadow: 4px 8px 5px rgba(234, 23, 207, 0.4);
}
.card:hover .shareBtn {
  visibility: visible;
  pointer-events: visible;
}
.card {
  width: 300px;
  max-width: 100%;
  z-index: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  -webkit-box-shadow: 11px 11px 13px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 11px 11px 13px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 11px 11px 13px -11px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
}
.card-body {
  padding: 0px 1.4em;
  overflow: hidden;
  text-align: center;
  margin: 0;
}
a {
  text-decoration: none;
  color: #c9323a;
  font-weight: bold;
}
.card-body h5 {
  font-size: 16px;
  color: #000;
}
.card-body .card-body-title a {
  font-size: 22px;
  padding: 0;
  margin: 0;
}
.card-body .content {
  font-size: 13px;
  font-weight: 400;
  color: gray;
}
.card .card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px 0;
  alpha: 0.5;
  flex: 1;
  display: flex;
  justify-content: space-between;
  /*   align-items:center; */
}
.user {
  display: flex;
  gap: 10px;
}
.user .user-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user .user-name span {
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
}
.user .user-name small {
  font-size: 11px;
  color: blue;
}
.card-footer .shareBtn {
  padding-right: 10px;
  align-self: center;
  visibility: hidden;
  pointer-events: none;
}
.card-footer .shareBtn i {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.2s ease;
}
.card-footer .shareBtn i:hover {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 50%;
}
.user-img {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.user-img img {
  border-radius: 50%;
  width: 100%;
  border: 1px solid blue;
}
@media screen and (max-width: 500px) {
  .card {
    overflow: hidden;
  }
  .card:hover img {
    transform: scale(1.1);
  }
}
</style>

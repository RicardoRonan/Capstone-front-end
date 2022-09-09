<template>
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login" @submit.prevent="login">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input
              type="email"
              class="login__input"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input
              type="password"
              class="login__input"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button class="button login__submit" type="submit">
            <span class="button__text">Log In Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>

          <p id="new" class="m-3 mx-auto">
            New to Nature Untouched<router-link class="p-3" to="/register"
              >register</router-link
            >now
          </p>
        </form>
        <!-- <button @click="console">click</button> -->
        <div v-if="user">
          <h1 id="welcome">welcome {{ user.user.user_name }}</h1>
        </div>
        <!-- <p v-if="user.user.password !== this.password">Password incorrect</p> -->
      </div>
      <div class="screen__background">
        <span
          class="screen__background__shape screen__background__shape4"
        ></span>
        <span
          class="screen__background__shape screen__background__shape3"
        ></span>
        <span
          class="screen__background__shape screen__background__shape2"
        ></span>
        <span class="screen__background__shape screen__background__shape1"
          ><img
            id="earth-img"
            src="https://i.postimg.cc/KjcV0CJ1/planting.png"
            alt=""
        /></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      // this.$router.push("/posts");
    },
    //   console() {
    //     console.log(this.user.user.password);
    //   },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

#welcome {
  color: var(--dark);
}
#new {
  color: var(--dark);
}
a {
  color: var(--light);
}
:root {
  --dark: #273443;
  --light-green: #128c7e;
  --green: #075e54;
  --light: #d0e9ea;
}
body {
  overflow-x: hidden;
}
::-webkit-input-placeholder {
  color: var(--dark);
}

body {
  background: linear-gradient(90deg, var(--light), var(--light-green));
}
#earth-img {
  width: 25rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 2rem;
}

.screen {
  background: linear-gradient(90deg, var(--green), var(--light-green));
  position: relative;
  height: 600px;
  width: 100%;
  box-shadow: 0px 0px 24px var(--green);
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: var(--light);
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: var(--green);
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, var(--green), var(--light-green));
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: var(--light-green);
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: var(--green);
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
  color: var(--dark);
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: var(--light-green);
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--light-green);
  box-shadow: 0px 2px 2px var(--green);
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: var(--light-green);
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: var(--green);
}
</style>

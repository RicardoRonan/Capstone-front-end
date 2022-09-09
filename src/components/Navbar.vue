<template>
  <div id="navbar">
    <div class="nav-brand">
      <h2 id="title">Nature Untouched</h2>
      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <transition name="fade">
      <div class="bar-items" :class="{ hide: !show }">
        <div id="menu" class="animate__animated animate__backInDown">
          <RouterLink to="/" v-on:click="display"> Home </RouterLink>
          <RouterLink to="/posts" v-on:click="display"> Posts </RouterLink>
          <RouterLink v-if="user" to="/userposts" v-on:click="display"
            >Your Posts
          </RouterLink>
          <RouterLink to="/contact" v-on:click="display"> Contact </RouterLink>

          <RouterLink
            v-if="user"
            :to="{ name: 'profile', params: { id: user.user.user_id } }"
            v-on:click="display"
          >
            Profile
          </RouterLink>
          <div class="d-flex flex-row" v-else>
            <RouterLink to="/login" v-on:click="display">Login </RouterLink>
            <RouterLink to="/register" v-on:click="display"
              >Register
            </RouterLink>
          </div>
        </div>
      </div>
    </transition>
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
    return { show: false };
  },
  methods: {
    display() {
      // console.log("clicked");
      this.show = !this.show;
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
body {
  margin: 0;
}
h1 {
  text-align: center;
  font-size: 36px;
  text-transform: capitalize;
}
#title {
  padding-left: 15px;
  color: var(--light);
  margin: 0;
  font-size: 1.5rem;
  word-break: keep-all;
}

#navbar {
  display: flex;
  align-items: center;
  background-color: var(--green);
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  box-shadow: 3px 3px 3px var(--light-green);
  transition: all 0.5s linear ease-in-out;
}

#menu {
  transition: max-height 0.5s ease;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.bar-items {
  width: 100%;
}

a {
  padding: 20px;
  text-decoration: none !important;
  color: var(--light) !important;
}
#navbar a.router-link-exact-active {
  color: var(--light-green) !important;
  border-bottom: 2px solid var(--dark);
  /* border-bottom-width: 2rem; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fa {
  display: none;
}

@media (max-width: 675px) {
  #navbar {
    transition: all 0.5s linear ease-in-out !important;
    flex-direction: column;
  }

  .fa {
    display: block;
    padding: 0 25px;
    position: absolute;
    right: 0;
    color: var(--light);
    font-size: 30px;
    cursor: pointer;
  }

  #menu {
    flex-direction: column;
    padding: 5px 0;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
  }

  a {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
  }

  .hide {
    display: none;
  }

  .nav-brand {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 0px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>

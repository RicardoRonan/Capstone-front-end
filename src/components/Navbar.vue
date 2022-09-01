<template>
  <div id="navbar">
    <div class="nav-brand">
      <h2 id="title">Nature Untouched</h2>
      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <div class="bar-items" :class="{ hide: !show }">
      <div id="menu">
        <RouterLink to="/" v-on:click="display"> Home </RouterLink>
        <RouterLink to="/about" v-on:click="display"> About </RouterLink>
        <RouterLink to="/posts" v-on:click="display"> Posts </RouterLink>
        <RouterLink to="/userposts" v-on:click="display"
          >Your Posts
        </RouterLink>
        <RouterLink to="/login" v-on:click="display">Login </RouterLink>
        <RouterLink to="/register" v-on:click="display">Register </RouterLink>
      </div>
    </div>
  </div>
</template>

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
  transition: max-height 0.5s ease;
  display: flex;
  align-items: center;
  background-color: var(--green);
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  box-shadow: 3px 3px 3px var(--light-green);
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
}

.fa {
  display: none;
}

@media (max-width: 675px) {
  #navbar {
    flex-direction: column;
    transition: max-height 0.5s ease;
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
}
</style>
<script>
export default {
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

<template>
  <div id="navbar">
    <div class="nav-brand">
      <h2 id="title">NATURE-LY</h2>
      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <div class="bar-items" :class="{ hide: !show }">
      <div id="menu">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/about"> About </RouterLink>
        <RouterLink to="/posts"> Posts </RouterLink>
        <RouterLink to="/userposts">Your Posts </RouterLink>
        <RouterLink to="/login">Login </RouterLink>
        <RouterLink to="/register">Register </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
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
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
  word-break: keep-all;
}

#navbar {
  display: flex;
  align-items: center;
  background-color: var(--green);
  width: 100%;
}

#menu {
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

li:hover {
  background-color: #42d392;
}

.fa {
  display: none;
}

@media (max-width: 675px) {
  #navbar {
    flex-direction: column;
  }

  .fa {
    display: block;
    padding: 0 25px;
    position: absolute;
    right: 0;
    color: #fff;
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
    justify-content: center;
    padding: 15px 0px;
    background-color: var(--green);
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
      console.log("clicked");
      this.show = !this.show;
    },
  },
};
</script>

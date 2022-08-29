<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-dark: #128c7e;
}
a {
  text-decoration: none;
}
@font-face {
  font-family: yees;
  src: url("../assets/Aboreto-Regular.ttf");
}

#app {
  font-family: yees;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* body,
html {
  overflow-x: hidden;
} */
@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
}
</style>

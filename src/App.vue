<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
body {
  background: linear-gradient(
    90deg,
    var(--light),
    var(--light-green)
  ) !important;
  overflow-x: hidden;
}
a {
  text-decoration: none !important;
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

@media only screen and (max-width: 600px) {
  body,
  html {
    overflow-x: hidden;
  }
}
footer {
  overflow-x: hidden;
}
</style>

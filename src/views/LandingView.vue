<template>
  <div class="conatiner-fluid" id="bg">
    <!-- <div class="container-fluid" id="video-cont"> -->
    <video autoplay muted loop src="../../assets/cb40f133-f84458e4.mp4"></video>
  </div>
  <div class="title-cont">
    <h2 class="text-white" id="welcome">welcome to</h2>
    <h1 id="title" class="text-white">NATURE-LY</h1>
  </div>
  <!-- </div> -->
</template>
<style scoped>
video {
  min-height: 100vh;
  width: 100%;
  z-index: -1;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

body {
  background-color: var(--light);
}
#bg {
  background-color: var(--light);
}
#welcome {
  font-size: 3rem;
  font-weight: 500;
  text-shadow: 3px 3px 3px black;
}
#title {
  font-size: 5rem;
  font-weight: 100;
  text-shadow: 3px 3px 3px black;
}
.title-cont {
  z-index: 2;
  margin-top: -40%;
}
</style>

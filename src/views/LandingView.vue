<template>
  <div class="conatiner-fluid" id="bg">
    <video autoplay muted loop src="../../assets/bgvideo.mp4"></video>
  </div>
  <div class="card" id="card">
    <h2 class="text-white" id="welcome">welcome to</h2>
    <h1 id="title" class="text-white">Nature Untouched</h1>
    <p id="slogan">What's in your Nature?</p>
  </div>
</template>
<style scoped>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
video {
  min-height: 100vh;
  width: 100%;
  z-index: -1;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
#slogan {
  color: var(--light);
  font-size: 3rem;
  text-shadow: 4px 4px 4px black;
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
  text-shadow: 4px 4px 4px black;
}
#title {
  font-size: 5rem;
  font-weight: 100;
  text-shadow: 4px 4px 4px black;
}
#card {
  z-index: 2;
  margin-top: -40%;
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
}
@media only screen and (max-width: 600px) {
  #welcome {
    font-size: 2rem;
    font-weight: 500;
    text-shadow: 3px 3px 3px black;
  }
  #title {
    font-size: 3rem;
    font-weight: 100;
    text-shadow: 3px 3px 3px black;
  }
  .title-cont {
    z-index: 2;
    margin-top: -106%;
  }
}
</style>

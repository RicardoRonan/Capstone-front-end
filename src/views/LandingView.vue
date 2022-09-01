<template>
  <video autoplay muted loop src="../../assets/bgvideo.mp4"></video>
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
body,
html {
  background-color: var(--light);
}
#bg {
  background: linear-gradient(90deg, var(--light), var(--light-green));
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
  .title-cont {
    z-index: 2;
    margin-top: -106%;
  }

  video {
    display: none;
  }
  body {
    background-color: var(--light);
  }
  #bg {
    background-image: url("https://i.postimg.cc/90WBgqJ2/Polina-Tepliuk-Flora-2021-Flowers-ph.jpg");
    z-index: -1;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
  #slogan {
    color: var(--light);
    font-size: 1rem;
  }
  #welcome {
    font-size: 1rem;
  }
  #title {
    font-size: 3rem;
  }
  #card {
    z-index: 2;
    /* padding: 10px; */
    margin: 10px;
    margin-top: -159%;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    height: 28rem;
  }
}
</style>

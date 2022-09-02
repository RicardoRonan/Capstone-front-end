<template>
  <section id="landing">
    <video autoplay muted loop src="../../assets/bgvideo.mp4"></video>
    <div class="card" id="card">
      <h2 class="text-white" id="welcome">welcome to</h2>
      <h1 id="title" class="text-white">Nature Untouched</h1>
      <p id="slogan">What's in your Nature?</p>
      <div id="button-cont" class="mb-5">
        <router-link to="/login">
          <button class="landing-button" type="submit">
            <span class="button__text">Log In</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>
        </router-link>
        <router-link to="/register">
          <button class="landing-button" type="submit">
            <span class="button__text">Register Now</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>
        </router-link>
      </div>
    </div>
  </section>
  <section id="about">
    <div class="row mx-auto" id="display-card">
      <div class="col-md-6" id="left">
        <div class="title-cont mx-auto">
          <h1 id="title" class="mx-auto m-3">About Us</h1>
        </div>
        <span
          class="screen__background__shape screen__background__shape4"
        ></span>
        <div id="img">
          <img
            id="tree"
            src="https://i.postimg.cc/hvTfRzs6/tree.png  "
            alt=""
          />
        </div>
        <div id="paragraph" class="p-2 mx-auto">
          <p>
            Nature is one of the most important things we have on Earth. It has
            been proven that spending time in nature helps us live longer and
            happier lives.
          </p>
        </div>
        <span
          class="screen__background__shape screen__background__shape3"
        ></span>
        <div id="paragraph2" class="p-2 mx-auto">
          <h3 class="mx-auto" id="sub-head">Our Aim</h3>
          <p id="paragraph2">
            The aim of our website is to create a judgement free platform where
            people can share their images of nature.
          </p>
        </div>
      </div>
    </div>
    <div class="screen__background">
      <span class="screen__background__shape screen__background__shape2"></span>
      <span class="screen__background__shape screen__background__shape1"></span>
    </div>
  </section>
</template>
<style scoped>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: var(--light-green);
  outline: none;
}
div#button-cont {
  display: flex;
  justify-content: center;
  gap: 5rem;
}
a {
  text-decoration: none;
}
.landing-button {
  background: transparent;
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
  color: var(--light);
  box-shadow: 0px 2px 2px var(--green);
  cursor: pointer;
  transition: 0.2s;
  width: 15rem;
}
.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: var(--light);
}
#landing {
  min-height: 100vh;
}
#about {
  min-height: 100vh;
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

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: var(--green);
  top: -24px;
  right: 0;
  border-radius: 32px;
  z-index: 1;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: var(--light-green);
  top: 101px;
  right: -342px;
  border-radius: 60px;
}
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
#paragraph {
  word-break: keep-all;
  width: 20rem;
  display: flex;
  color: var(--light);
  z-index: 2;
}
#sub-head {
  text-shadow: 2px 2px 2px var(--dark);
  z-index: 2;
}
#paragraph2 {
  margin-top: 2rem;
  width: 30rem;
  display: flex;
  flex-wrap: wrap;
  color: var(--light);
  z-index: 2;
}
#title {
  font-size: 3rem;
  color: var(--light);
  text-shadow: 2px 2px 2px var(--dark);
  z-index: 2;
}

#display-card {
  position: relative;
  width: 80%;
  height: 31.5rem;
  margin: 10rem;
  margin-top: 22rem;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--light-green), var(--dark));
  box-shadow: 0px 0px 24px var(--green);
  z-index: 2;
}
#left {
  position: absolute;
}
#tree {
  width: 37rem;
  height: 36.5rem;
  z-index: 2;
  position: absolute;
}

#img {
  width: 10rem;
  height: 10rem;
  margin-left: 39rem;
  margin-top: -11rem;
  filter: drop-shadow(0px 0px 10px var(--dark));
  z-index: 2;
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

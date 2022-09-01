<template>
  <div class="row" id="display-card">
    <div class="col-md-6" id="left">
      <div class="title-cont mx-auto">
        <h1 id="title" class="mx-auto m-3">About Us</h1>
      </div>
      <span class="screen__background__shape screen__background__shape4"></span>
      <div id="img">
        <img id="tree" src="https://i.postimg.cc/hvTfRzs6/tree.png  " alt="" />
      </div>
      <div id="paragraph" class="p-2 mx-auto">
        <p>
          Nature is one of the most important things we have on Earth. It has
          been proven that spending time in nature helps us live longer and
          happier lives.
        </p>
      </div>
      <span class="screen__background__shape screen__background__shape3"></span>
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
</template>

<script>
export default {};
</script>

<style scoped>
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
/* @media only screen and (max-width: 600px) {
  #left {
    background-color: var(--dark);
    margin: 0 !important;
    margin-top: 3rem !important;
    border-radius: 3px;
    background: linear-gradient(90deg, var(--light-green), var(--dark));
    box-shadow: 0px 0px 24px var(--green);
    height: 600px;
    width: 100%;
  }
  #errthang {
    min-height: 100vh;
    background-color: var(--light-green);
    z-index: 1;
  }
  #tree {
    display: none;
  }

  #img {
    display: none;
  }
  #paragraph {
    width: 17rem;
  }
  #paragraph2 {
    width: 17rem;
  }
} */
</style>

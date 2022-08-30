<template>
  <div class="row" id="errthang">
    <div class="col-md-6" id="left">
      <div class="title-cont">
        <h1>About Us</h1>
        <div>
          <p id="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            illum facere, incidunt sunt itaque debitis, ullam molestiae sint
            nostrum praesentium cum vitae exercitationem nihil asperiores beatae
            deleniti atque libero? Culpa!
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6" id="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --dark: #273443;
  --green: #075e54;
  --light: #d0e9ea;
  --light-green: #128c7e;
}
#paragraph {
  word-break: break-all;
  z-index: 10;
  position: absolute;
}
#title-cont {
  z-index: 3;
}
#left {
  clip-path: circle(50% at 35% 29%);
  position: relative;
  background: linear-gradient(270deg, var(--green), var(--light-green));
  box-shadow: 0px 2px 2px var(--green);
  z-index: 2;
}
#errthang {
  min-height: 100vh;
  background-color: var(--light-green);
  z-index: 1;
  padding: 20px;
}
#right {
  clip-path: circle(34.1% at 100% 100%);
  background: linear-gradient(270deg, var(--green), var(--light-green));
  box-shadow: 0px 2px 2px var(--green);
  z-index: 2;
}
</style>

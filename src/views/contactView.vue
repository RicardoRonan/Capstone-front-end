<template>
  <div class="container">
    <div id="form-cont" class="mx-auto">
      <h1 class="m-5">Contact Us</h1>
      <div class="col-lg-12 mx-auto" id="form-container">
        <form action="">
          <div class="form-column col-md-8 col-sm-12 col-xs-12">
            <div class="inner-column">
              <!--Contact Form-->
              <div class="contact-form">
                <form method="post" id="contact-form">
                  <div class="row clearfix">
                    <div class="form-group col-md-6 col-sm-6 co-xs-12 mb-3">
                      <input
                        type="text"
                        name="name"
                        value=""
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12 mb-3">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="subject"
                        value=""
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input
                        type="text"
                        name="phone"
                        value=""
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div
                      class="form-group col-md-12 col-sm-12 co-xs-12 mt-3 mb-3"
                    >
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div
                      class="form-group col-md-12 col-sm-12 co-xs-12 mx-auto"
                    >
                      <button
                        type="submit"
                        class="theme-btn btn-style-one mx-auto"
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
#form-cont {
  background-image: url("https://i.postimg.cc/sgjyQHwK/josh-calabrese-XXpbd-U-31-Sg-unsplash-removebg-preview.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 600px;
  border-radius: 3px;
  margin: 5rem;
  box-shadow: 0px 0px 24px var(--green);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
input,
textarea {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
  color: var(--dark);
}
textarea {
  max-height: 3rem;
}
.theme-btn {
  background: var(--green);
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
</style>

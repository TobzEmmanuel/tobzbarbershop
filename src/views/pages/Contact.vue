<template>
  <div class="ftco-blocks-cover-1">
    <div
      class="site-section-cover overlay"
      data-stellar-background-ratio="0.5"
      style="background-image: url('/frontend/img/slide3.jpg')"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-7">
            <h1 class="mb-3">Contact Us</h1>
            <p>
              At Tobz Barber Shop, we take pride in delivering exceptional
              grooming experiences that go beyond the ordinary. Our passion for
              precision and dedication to craftsmanship set us apart as your
              go-to destination for top-notch barber services.
            </p>
            <router-link :to="{ name: 'booking' }" class="btn btn-primary"
              >Book An Appointment</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="site-section bg-light" id="contact-section">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2>Contact Us</h2>
          <p>If you have any questions please fell free to contact with us.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mb-5">
          <form action="#" method="post">
            <div class="form-group row">
              <div class="col-md-6 mb-4 mb-lg-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <textarea
                  name=""
                  id=""
                  class="form-control"
                  placeholder="Write your message."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-6 mr-auto">
                <input
                  type="submit"
                  class="btn btn-block btn-primary text-white py-3 px-5"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4 ml-auto">
          <div class="bg-white p-3 p-md-5">
            <h3 class="text-black mb-4">Contact Info</h3>
            <ul class="list-unstyled footer-link">
              <li class="d-block mb-3">
                <span class="d-block text-black">Address:</span>
                <span
                  >112, Lagos road, beside FIRS building, Haruna Bus stop
                  Ikorodu, 104211, Lagos</span
                >
              </li>
              <li class="d-block mb-3">
                <span class="d-block text-black">Phone:</span
                ><span>+234 8123 456 789</span>
              </li>
              <li class="d-block mb-3">
                <span class="d-block text-black">Email:</span
                ><span>info@tobzbarbershop.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>

<template>

<!-- Home -->

  <div class="ftco-blocks-cover-1">
    <div
      class="site-section-cover overlay"
      data-stellar-background-ratio="0.5"
      style="background-image: url('/frontend/img/slide3.jpg')"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-7">
            <h1 class="mb-3 herd">Tobz Barber Shop</h1>
            <br />
            <p class="pra">
              At The Tobz Barbing Shop, we take grooming to the next level. Our
              barbershop is not just a place to get a haircut.
            </p>
            <router-link :to="{ name: 'booking' }" class="btn btn-primary"
                    >Book An Appointment</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- About -->

  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="img-years">
            <img src="/frontend/img/video.jpg" alt="Image" class="img-fluid" />
            <div class="year">
              <span
                >3 <span>years in <br />excellent service</span></span
              >
            </div>
          </div>
        </div>
        <div class="col-lg-5 ml-auto pl-lg-5 text-center">
          <h3 class="scissors text-center">Welcome To Tobz Barber Shop</h3>
          <p>
            Step into a world of precision cuts, expert styling, and a welcoming
            atmosphere that's designed to make you feel your best.
          </p>

          <router-link :to="{ name: 'about' }" class="btn btn-primary" @click="scrollToTop">Learn More</router-link>
                  
        </div>
      </div>
    </div>
  </div>

  <!-- Services -->

  <div class="site-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-7 text-center">
          <h3 class="scissors text-center">Services &amp; Pricing</h3>
          <p class="mb-5 lead">
            Our goal is to offer grooming services to our clients within a serene and sophisticated setting.
          </p>

      <!--   <p class="text-center">
            <a href="#" class="btn btn-primary custom-prev">Prev</a>
            <a href="#" class="btn btn-primary custom-next">Next</a>
          </p> --> 
        </div>
      </div>


      <div class="row">
        <div class="col-12">
          <div class="nonloop-block-13 owl-carousel d-flex">

            <!-- Haircut -->

            <div class="item-1 h">
              <img
                src="/frontend/img/hairy.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="item-1-contents">
                <h3>Haircut</h3>
                <ul>
                  <li class="d-flex">
                    <span>Men's Cut</span>
                    <span class="price ml-auto">&#8358 3,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Beard's Cut</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Ladie's Cut</span
                    ><span class="price ml-auto">&#8358 4,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Head Shave</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Kid's Cut</span
                    ><span class="price ml-auto">&#8358 2,500</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Hair Styling -->

            <div class="item-1 h">
              <img
                src="/frontend/img/hairdye.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="item-1-contents">
                <h3>Hair Styling</h3>
                <ul>
                  <li class="d-flex">
                    <span>Black Dye</span>
                    <span class="price ml-auto">&#8358 3,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Color Dye</span
                    ><span class="price ml-auto">&#8358 4,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Beard Dye</span><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Texturixing Hair</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Texturizing Beard</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                </ul>
              </div>
            </div>

             <!-- Hair Scalp Care -->

            <div class="item-1 h">
              <img
                src="/frontend/img/care.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="item-1-contents">
                <h3>Hair Scalp Care</h3>
                <ul>
                  <li class="d-flex">
                    <span>Shampooing</span>
                    <span class="price ml-auto">&#8358 1,500</span>
                  </li>
                  <li class="d-flex">
                    <span>Conditioning</span
                    ><span class="price ml-auto">&#8358 1,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Heat Styling</span><span class="price ml-auto">&#8358 1,500</span>
                  </li>
                  <li class="d-flex">
                    <span>Oils</span
                    ><span class="price ml-auto">&#8358 1,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Aloe Vera</span
                    ><span class="price ml-auto">&#8358 1,000</span>
                  </li>
                </ul>
              </div>
            </div>

             <!-- Specials -->

            <div class="item-1 h">
              <img
                src="/frontend/img/locs.png"
                alt="Image"
                class="img-fluid"
              />
              <div class="item-1-contents">
                <h3>Specials</h3>
                <ul>
                  <li class="d-flex">
                    <span>Natural Locs</span>
                    <span class="price ml-auto">&#8358 5,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Relocking</span
                    ><span class="price ml-auto">&#8358 3,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Relocking and Tip Coloring</span><span class="price ml-auto">&#8358 6,500</span>
                  </li>
                  <li class="d-flex">
                    <span>Loc Washing</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Natural Twist</span
                    ><span class="price ml-auto">&#8358 7,000</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Other Services -->

          <div class="item-1 h">
              <img
                src="/frontend/img/serv4.jpg"
                alt="Image"
                class="img-fluid"
              />
              <div class="item-1-contents">
                <h3>Other Services</h3>
                <ul>
                  <li class="d-flex">
                    <span>Steam Hair Hydration</span>
                    <span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Mini-Facial</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Nose & Ear Waxing</span><span class="price ml-auto">&#8358 3,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Head & Shoulder Massage</span
                    ><span class="price ml-auto">&#8358 3,000</span>
                  </li>
                  <li class="d-flex">
                    <span>Foot Massage</span
                    ><span class="price ml-auto">&#8358 2,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonials -->

  <div class="site-section bg-light">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-7 text-center mb-5">
          <h2 class="scissors text-center">Our Top Client Says</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="testimonial-2">
            <div class="d-flex v-card align-items-center mb-4">
              <img
                src="/frontend/img/img3.png"
                alt="Image"
                class="img-fluid mr-3"
              />
              <span>Tobz Frost <i class="fa fa-instagram"></i></span>
            </div>
            <blockquote>
              <p>
                “This place is fabulous! Super clean and modern on the inside. The barbers are extremely talented and
                    exceptionally detail oriented. I highly recommend!”
              </p>
            </blockquote>
          </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="testimonial-2">
            <div class="d-flex v-card align-items-center mb-4">
              <img
                src="/frontend/img/img2.png"
                alt="Image"
                class="img-fluid mr-3"
              />
              <span>Tobz Speed <i class="fa fa-whatsapp"></i></span>
            </div>
            <blockquote>
              <p>
                “This place is a awesome. They are very nice, mindful, and professional. They were a great stylist definitely would recommend. Thanks for the great service.”
              </p>
            </blockquote>
          </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="testimonial-2">
            <div class="d-flex v-card align-items-center mb-4">
              <img
                src="/frontend/img/img3.png"
                alt="Image"
                class="img-fluid mr-3"
              />
              <span>Tobz Coder</span>
            </div>
            <blockquote>
              <p>
                “This place is fabulous! Super clean and modern on the inside. The barbers are extremely talented and exceptionally detail oriented. I highly recommend!”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact -->

  <div
    class="site-section section-3"
    data-stellar-background-ratio="0.5"
    style="background-image: url('/frontend/img/sits.jpg')"
  >
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2 class="text-white scissors primary-color-icon text-center">
            Quality Haircut
          </h2>
          <p class="lead text-white mb-5">
            At Tobz Barber Shop, we take pride in delivering exceptional grooming experiences that go beyond the ordinary. Our passion for precision and dedication to craftsmanship set us apart as your go-to destination for top-notch barber services.
          </p>
          <router-link :to="{ name: 'contact' }" class="btn btn-primary"
                    >Contact Us Now</router-link>
                    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "Home",

};

</script>
<style>
.herd {
  font-weight: 500;
}

.pra {
  font-weight: 500;
}

.item-1 .img-fluid {
    width: 100% !important;
    height: 250px !important;
    object-fit: cover !important;
  }

  .testimonial-2 img {
    width: 100% !important;
    object-fit: cover !important;
    height: 50px !important;
  }

</style>

<template>
  <div class="ftco-blocks-cover-1">
    <div
      class="site-section-cover overlay"
      data-stellar-background-ratio="0.5"
      style="background-image: url('/frontend/images/hero_1.jpg')"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-7">
            <h1 class="mb-3">Barber Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              veritatis in tenetur doloremque, maiores doloribus officia iste.
              Dolores.
            </p>
            <p><a href="#" class="btn btn-primary">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="formbold-main-wrapper">
        <!-- Author: FormBold Team -->
        <!-- Learn More: https://formbold.com -->
        <div class="formbold-form-wrapper">
            <form>
                <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label"> Full Name </label>
                    <input type="text" name="name" id="name" placeholder="Full Name" class="formbold-form-input" />
                </div>
                <div class="formbold-mb-5">
                    <label for="phone" class="formbold-form-label"> Phone Number </label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                        class="formbold-form-input" />
                </div>
                <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label"> Email Address </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                        class="formbold-form-input" />
                </div>
                <div class="flex flex-wrap formbold--mx-3">
                    <div class="w-full sm:w-half formbold-px-3">
                        <div class="formbold-mb-5 w-full">
                            <label for="date" class="formbold-form-label"> Date </label>
                            <input type="date" name="date" id="date" class="formbold-form-input" />
                        </div>
                    </div>
                    <div class="w-full sm:w-half formbold-px-3">
                        <div class="formbold-mb-5">
                            <label for="time" class="formbold-form-label"> Time </label>
                            <input type="time" name="time" id="time" class="formbold-form-input" />
                        </div>
                    </div>
                </div>
                <Booking />
                <button type="submit" class="formbold-btn">Book Appointment</button>
            </form>
        </div>
    </div>

  <div class="site-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-7 text-center">
          <h3 class="scissors text-center">Services &amp; Pricing</h3>
          <p class="mb-5 lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            nesciunt nemo vel earum maxime neque!
          </p>

          <p class="text-center">
            <a href="#" class="btn btn-primary custom-prev">Prev</a>
            <a href="#" class="btn btn-primary custom-next">Next</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="nonloop-block-13 owl-carousel d-flex">
            <div class="item-1 h">
              <img src="/frontend/images/img_1.jpg" alt="Image" class="img-fluid" />
              <div class="item-1-contents">
                <h3>Haircut</h3>
                <ul>
                  <li class="d-flex">
                    <span>Men's Cut</span>
                    <span class="price ml-auto">$29.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Men's Cut with Shampoo and Blow Dry</span
                    ><span class="price ml-auto">$10.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Ladie's Cut with Shampoo and Blow Dry</span
                    ><span class="price ml-auto">$32.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Head Shave</span
                    ><span class="price ml-auto">$23.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Hair Art</span
                    ><span class="price ml-auto">$54.00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-1 h">
              <img src="/frontend/images/img_2.jpg" alt="Image" class="img-fluid" />
              <div class="item-1-contents">
                <h3>Hair Styling</h3>
                <ul>
                  <li class="d-flex">
                    <span>Shampoo</span>
                    <span class="price ml-auto">$29.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Blow Dry</span
                    ><span class="price ml-auto">$10.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Iron</span><span class="price ml-auto">$32.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Brazilian Blow Out</span
                    ><span class="price ml-auto">$23.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Hair Art</span
                    ><span class="price ml-auto">$54.00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-1 h">
              <img src="/frontend/images/img_3.jpg" alt="Image" class="img-fluid" />
              <div class="item-1-contents">
                <h3>Hair Scalp Care</h3>
                <ul>
                  <li class="d-flex">
                    <span>Shampoo</span>
                    <span class="price ml-auto">$29.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Blow Dry</span
                    ><span class="price ml-auto">$10.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Iron</span><span class="price ml-auto">$32.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Brazilian Blow Out</span
                    ><span class="price ml-auto">$23.00</span>
                  </li>
                  <li class="d-flex">
                    <span>Hair Art</span
                    ><span class="price ml-auto">$54.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
<script>
import { defineComponent } from 'vue';
import Booking from './Booking.vue';

export default defineComponent({
  components: {
    Booking
  }
});
</script>

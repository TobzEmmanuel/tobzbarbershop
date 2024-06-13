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
            <h1 class="mb-3">About Us</h1>
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

  <!-- Section -->

  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="img-years">
            <img src="/frontend/img/home1.png" alt="Image" class="img-fluid" />
            <div class="year">
              <span
                >3 <span>years in <br />excellent service</span></span
              >
            </div>
          </div>
        </div>
        <div class="col-lg-5 ml-auto pl-lg-5 text-center">
          <h3 class="scissors text-center">Meet The Team</h3>
          <p>
            Step into a world of precision cuts, expert styling, and a welcoming
            atmosphere that's designed to make you feel your best.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!--Team-->

  <div class="site-section bg-light team">
    <div class="container">
      <div class="row justify-content-center text-center mb-5 section-2-title">
        <div class="col-md-6">
          <h3 class="scissors text-center">Meet Our Team</h3>
          <p class="mb-5 lead">
            At Tobz Barber, we pride ourselves on having a skilled and dedicated
            team. Meet the professionals who make every haircut an experience to
            remember.
          </p>
        </div>
      </div>
      <div class="row align-items-stretch">
        <!-- Team Member 1 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img3.png"
              alt="James Doe - Master Barber"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Master Barber</span>
              <h2>James Doe</h2>
              <p>
                With over 3 years in the barbering industry, James brings
                expertise and a keen eye for detail to every haircut.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img2.png"
              alt="Jane Smith - Stylist"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Stylist</span>
              <h2>Jane Smith</h2>
              <p>
                Jane specializes in modern haircuts and styles. Her creativity
                ensures clients always leave with a fresh look.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Member 3 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img1.png"
              alt="John Smith - Barber Apprentice"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Barber Apprentice</span>
              <h2>John Smith</h2>
              <p>
                John is our rising star, always eager to learn and perfect his
                craft. He brings a fresh perspective to the team.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Member 4 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img2.png"
              alt="Emily Johnson - Salon Manager"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Salon Manager</span>
              <h2>Emily Johnson</h2>
              <p>
                Emily ensures smooth operations and exceptional customer service
                at [Barber Shop Name]. Her organizational skills keep everything
                running seamlessly.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Member 5 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img3.png"
              alt="Michael Brown - Customer Relations"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Customer Relations</span>
              <h2>Michael Brown</h2>
              <p>
                Michael ensures every client feels welcomed and valued. His
                friendly demeanor and attention to detail make the experience
                memorable.
              </p>
            </div>
          </div>
        </div>

        <!-- Team Member 6 -->
        <div class="col-lg-4 col-md-6 mb-5">
          <div class="post-entry-1 h-100 person-1">
            <img
              src="/frontend/img/img1.png"
              alt="Sophia Williams - Barber Assistant"
              class="img-fluid"
            />
            <div class="post-entry-1-contents">
              <span class="meta">Barber Assistant</span>
              <h2>Sophia Williams</h2>
              <p>
                Sophia assists our barbers and ensures the shop is clean and
                organized. Her support is invaluable in maintaining our high
                standards.
              </p>
            </div>
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
            At Tobz Barber Shop, we take pride in delivering exceptional
            grooming experiences that go beyond the ordinary. Our passion for
            precision and dedication to craftsmanship set us apart as your go-to
            destination for top-notch barber services.
          </p>
          <router-link :to="{ name: 'contact' }" class="btn btn-primary"
            >Contact Us Now</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.img-fluid {
  width: 100% !important;
  height: 250px !important;
  object-fit: cover !important;
}

.team img {
  width: 100px !important;
  object-fit: cover !important;
  height: 100px !important;
}
</style>

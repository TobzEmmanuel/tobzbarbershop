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
            <h1 class="mb-3">Our Services</h1>
            <router-link :to="{ name: 'booking' }" class="btn btn-primary"
                    >Book An Appointment</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services content -->

   <!-- Haircut -->

  <section class="hairy">
    <h2>Haircut</h2>
    <p class="serp">
      Each hair styling session is meticulously crafted to bring out the perfect
      cut that complements your individual look, leaving both your hair and
      scalp refreshed and revitalized.
    </p>

    <div class="price-table">
      <div class="price-row">
        <div class="price-title">Men's Cut</div>
        <div class="price-amount">&#8358 3,000</div>
      </div>
      <div class="price-row">
        <div class="price-title">Beard's Cut</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Ladie's Cut</div>
        <div class="price-amount">&#8358 4,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Head Shave</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Kid's Cut</div>
        <div class="price-amount">&#8358 2,500.00</div>
      </div>
    </div>
  </section>

   <!-- Hair Styling -->

  <section class="dye">
    <h2>Hair Styling</h2>
    <p class="serp">
      Allow our skilled Colorist to work their magic on your hair or beard,
      using the exceptional range of coloring products from our collection.
    </p>

    <div class="price-table">
      <div class="price-row">
        <div class="price-title">Black Dye</div>
        <div class="price-amount">&#8358 3,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Color Dye</div>
        <div class="price-amount">&#8358 4,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Beard Dye</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Texturizing Hair</div>
        <div class="price-amount">&#8358 2,500.00</div>
      </div>
    
      <div class="price-row">
        <div class="price-title">Texturixing Beard</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
    </div>
  </section>

   <!-- Hair Scalp Care -->

  <section class="treatment1">
    <h2>Hair Scalp Care</h2>
    <p class="serp">
      Tobz Barber Shop  excels in providing upscale treatments and services.
    </p>

    <div class="price-table">
      <div class="price-row">
        <div class="price-title">Shampooing</div>
        <div class="price-amount">&#8358 1,500.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Conditioning</div>
        <div class="price-amount">&#8358 1,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Heat Styling</div>
        <div class="price-amount">&#8358 1,500.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Oils</div>
        <div class="price-amount">&#8358 1,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Aloe Vera</div>
        <div class="price-amount">&#8358 1,000.00</div>
      </div>
    </div>
  </section>

  <!-- Specials -->

  <section class="specialist1">
    <h2>Specials</h2>
    <p class="serp">
        Not only do we excel in our craft, but you'll also discover that our
      prices bring a uniquely refreshing experience.
    </p>

    <div class="price-table">
      <div class="price-row">
        <div class="price-title">Natural Locs</div>
        <div class="price-amount">&#8358 5,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Relocking</div>
        <div class="price-amount">&#8358 3,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Relocking and Tip Coloring</div>
        <div class="price-amount">6,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Loc Washing</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Natural Twist</div>
        <div class="price-amount">&#8358 7,000.00</div>
      </div>
    </div>
  </section>

  <!-- Other Services -->

  <section class="other_services">
    <h2>Other Services</h2>
    <p class="serp">
        Tobz Barber Shop  excels in providing upscale treatments and services.
    </p>

    <div class="price-table">
      <div class="price-row">
        <div class="price-title">Steam Hair Hydration</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Mini-Facial</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Nose & Ear Waxing</div>
        <div class="price-amount">3,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Head & Shoulder Massage</div>
        <div class="price-amount">&#8358 3,000.00</div>
      </div>
      <div class="price-row">
        <div class="price-title">Foot Massage</div>
        <div class="price-amount">&#8358 2,000.00</div>
      </div>
    </div>
  </section>

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


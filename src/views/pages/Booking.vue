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
            <h1 class="mb-3">Appointment Booking</h1>
            s
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Services content -->

  <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
      <form>
        <div class="formbold-mb-5">
          <label for="name" class="formbold-form-label"> Full Name </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="formbold-form-input"
          />
        </div>
        <div class="formbold-mb-5">
          <label for="phone" class="formbold-form-label"> Phone Number </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            class="formbold-form-input"
          />
        </div>
        <div class="formbold-mb-5">
          <label for="email" class="formbold-form-label"> Email Address </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            class="formbold-form-input"
          />
        </div>
        <div class="flex flex-wrap formbold--mx-3">
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5 w-full">
              <label for="date" class="formbold-form-label"> Date </label>
              <input
                type="date"
                name="date"
                id="date"
                class="formbold-form-input"
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <label for="time" class="formbold-form-label"> Time </label>
              <input
                type="time"
                name="time"
                id="time"
                class="formbold-form-input"
              />
            </div>
          </div>
        </div>

        <!-- Haircut -->
        <div class="formbold-mb-5">
          <label class="formbold-form-label">Haircut</label>
          <div class="formbold-form-input">
            <table>
              <tbody>
                <tr v-for="option in haircutOptions" :key="option.id">
                  <td>
                    <input
                      type="checkbox"
                      :id="option.id"
                      v-model="selectedServices"
                      :value="option.id"
                    />
                  </td>
                  <td>{{ option.name }}</td>
                  <td class="td2">&#8358;{{ option.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Hair Styling -->
        <div class="formbold-mb-5">
          <label class="formbold-form-label">Hair Styling</label>
          <div class="formbold-form-input">
            <table>
              <tbody>
                <tr v-for="option in hairStylingOptions" :key="option.id">
                  <td>
                    <input
                      type="checkbox"
                      :id="option.id"
                      v-model="selectedServices"
                      :value="option.id"
                    />
                  </td>
                  <td>{{ option.name }}</td>
                  <td class="td2">&#8358;{{ option.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Hair Scalp Care -->
        <div class="formbold-mb-5">
          <label class="formbold-form-label">Hair Scalp Care</label>
          <div class="formbold-form-input">
            <table>
              <tbody>
                <tr v-for="option in hairScalpCareOptions" :key="option.id">
                  <td>
                    <input
                      type="checkbox"
                      :id="option.id"
                      v-model="selectedServices"
                      :value="option.id"
                    />
                  </td>
                  <td>{{ option.name }}</td>
                  <td class="td2">&#8358;{{ option.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Specials -->
        <div class="formbold-mb-5">
          <label class="formbold-form-label">Specials</label>
          <div class="formbold-form-input">
            <table>
              <tbody>
                <tr v-for="option in specialsOptions" :key="option.id">
                  <td>
                    <input
                      type="checkbox"
                      :id="option.id"
                      v-model="selectedServices"
                      :value="option.id"
                    />
                  </td>
                  <td>{{ option.name }}</td>
                  <td class="td2">&#8358;{{ option.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Other Services -->
        <div class="formbold-mb-5">
          <label class="formbold-form-label">Other Services</label>
          <div class="formbold-form-input">
            <table>
              <tbody>
                <tr v-for="option in otherServicesOptions" :key="option.id">
                  <td>
                    <input
                      type="checkbox"
                      :id="option.id"
                      v-model="selectedServices"
                      :value="option.id"
                    />
                  </td>
                  <td>{{ option.name }}</td>
                  <td class="td2">&#8358;{{ option.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="total">
          Total Price: &#8358;{{ totalPrice.toLocaleString() }}
        </div>

        <ul id="selected-services"></ul>
        <button type="submit" class="formbold-btn">Book Appointment</button>
      </form>
    </div>
  </div>
</template>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid black;
}

.total {
  font-weight: 500;
  font-size: 40px;
}

.td2 {
  text-align: right;
}
</style>

<script>
export default {
  name: "Booking",
  data() {
    return {
      selectedServices: [],
      totalPrice: 0,
      haircutOptions: [
        { id: "option1", name: "Men's Cut", price: "3,000" },
        { id: "option2", name: "Beard's Cut", price: "2,000" },
        { id: "option3", name: "Ladie's Cut", price: "4,000" },
        { id: "option4", name: "Head Shave", price: "2,000" },
        { id: "option5", name: "Kid's Cut", price: "2,500" },
      ],
      hairStylingOptions: [
        { id: "styling1", name: "Black Dye", price: "3,000.00" },
        { id: "styling2", name: "Color Dye", price: "4,000.00" },
        { id: "styling3", name: "Beard Dye", price: "2,000.00" },
        { id: "styling4", name: "Texturizing Hair", price: "2,500.00" },
        { id: "styling5", name: "Texturixing Beard", price: "2,000.00" },
      ],
      hairScalpCareOptions: [
        { id: "care1", name: "Shampooing", price: "1,500.00" },
        { id: "care2", name: "Conditioning", price: "1,000.00" },
        { id: "care3", name: "Heat Styling", price: "1,500.00" },
        { id: "care4", name: "Oils", price: "1,000.00" },
        { id: "care5", name: "Aloe Vera", price: "1,000.00" },
      ],
      specialsOptions: [
        { id: "special1", name: "Natural Locs", price: "5,000.00" },
        { id: "special2", name: "Relocking", price: "3,000.00" },
        {
          id: "special3",
          name: "Relocking and Tip Coloring",
          price: "6,000.00",
        },
        { id: "special4", name: "Loc Washing", price: "2,000.00" },
        { id: "special5", name: "Natural Twist", price: "5,000.00" },
      ],
      otherServicesOptions: [
        { id: "service1", name: "Steam Hair Hydration", price: "2,000.00" },
        { id: "service2", name: "Mini-Facial", price: "2,000.00" },
        { id: "service3", name: "Nose & Ear Waxing", price: "3,000.00" },
        { id: "service4", name: "Head & Shoulder Massage", price: "3,000.00" },
        { id: "service5", name: "Foot Massage", price: "2,000.00" },
      ],
    };
  },
  computed: {
    allOptions() {
      return [].concat(
        this.haircutOptions,
        this.hairStylingOptions,
        this.hairScalpCareOptions,
        this.specialsOptions,
        this.otherServicesOptions
      );
    },
  },
  methods: {
    computeTotalPrice() {
      let total = 0;
      const prices = {
        option1: 3000,
        option2: 2000,
        option3: 4000,
        option4: 2000,
        option5: 2500,
        styling1: 3000,
        styling2: 4000,
        styling3: 2000,
        styling4: 2500,
        styling5: 2000,
        care1: 1500,
        care2: 1000,
        care3: 1500,
        care4: 1000,
        care5: 1000,
        special1: 5000,
        special2: 3000,
        special3: 6000,
        special4: 2000,
        special5: 5000,
        service1: 2000,
        service2: 2000,
        service3: 3000,
        service4: 3000,
        service5: 2000,
      };

      this.selectedServices.forEach((service) => {
        total += prices[service];
      });

      this.totalPrice = total;
    },
  },
  watch: {
    selectedServices: {
      deep: true,
      handler() {
        this.computeTotalPrice();
      },
    },
  },
};
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h2 class="footer-heading mb-3">Opening Hours</h2>
          <p>Monday to Friday - 9am to 9pm</p>
          <p>Saturday & Sunday - 8am to 11pm</p>
        </div>
        <div class="col-lg-8 ml-auto">
          <div class="row">
            <div class="col-lg-6 ml-auto">
              <h2 class="footer-heading mb-4">Quick Links</h2>
              <ul class="list-unstyled">
                <li>
                  <router-link :to="{ name: 'Home' }">Home</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'services' }">Services</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'about' }">About</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'contact' }">Contact</router-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <h2 class="footer-heading mb-4">Newsletter</h2>
              <form action="#" class="d-flex">
                <input
                  type="text"
                  class="form-control mr-3"
                  placeholder="Email"
                />
                <input type="submit" value="Send" class="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <p>
      <a href="https://www.tobzcoder.com.ng/"
        ><i class="fa-solid fa-code"></i>Tobz Coder</a
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.copyright {
  width: 100%;
  text-align: center;
  padding: 15px 0;
  background: #262626;
  font-weight: 300;
  margin-top: 10px;
  color: #fff;
}

.copyright i {
  color: #ff004f;
}

.copyright a {
  text-decoration: none;
  color: #fff;
}
</style>

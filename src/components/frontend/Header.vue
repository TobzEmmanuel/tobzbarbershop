<template>
  <header class="site-navbar site-navbar-target" role="banner">
    <div class="container">
      <div class="row align-items-center position-relative">
        <div class="col-3">
          <div class="site-logo">
            <a href="index.html"
              ><img src="/frontend/img/logo.png" class="logo1"
            /></a>
          </div>
        </div>

        <div class="col-9 text-right">
          <span class="d-inline-block d-lg-none"
            ><a
              href="#"
              class="text-white site-menu-toggle js-menu-toggle py-5 text-white"
              ><span class="icon-menu h3 text-white"></span></a
          ></span>

          <nav
            class="site-navigation text-right ml-auto d-none d-lg-block"
            role="navigation"
          >
            <ul class="site-menu main-menu js-clone-nav ml-auto" id="menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/services" class="nav-link">Services</a></li>
              <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
#menu .router-link-exact-active {
  color: #dc3545;
}

.logo1 {
  border-radius: 50%;
  width: 90px;
}
</style>

<template>
  <div class="site-wrap" id="home-section">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <header-section></header-section>

    <router-view></router-view>


    <footer-section></footer-section>
  </div>

</template>
<script>
import HeaderSection from "../components/frontend/Header.vue";
import FooterSection from "../components/frontend/Footer.vue";



export default {
  name: "Master",
  components: { HeaderSection, FooterSection },
};
</script>
<style></style>

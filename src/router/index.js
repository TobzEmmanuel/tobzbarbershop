import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import about from "../views/pages/About.vue";
import services from "../views/pages/Services.vue";
import barber from "../views/pages/Barber.vue";
import contact from "../views/pages/Contact.vue";
import booking from "../views/pages/Booking.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "about",
    component: about,
  },

  {
    path: "/services",
    name: "services",
    component: services,
  },

  {
    path: "/barber",
    name: "barber",
    component: barber,
  },

  {
    path: "/contact",
    name: "contact",
    component: contact,
  },

  {
    path: "/booking",
    name: "booking",
    component: booking,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

router.afterEach((to, from) => {

 

  console.log({to, from, pathname: window.location.pathname})

  if(window.location.pathname !== from.fullPath) {
    // window.location.reload()

    console.log("...reloading...")
  }
  
});


export default router;

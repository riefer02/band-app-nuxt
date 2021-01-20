<template>
  <div class="flex flex-wrap overflow-hidden bg-yellow-300 linear-gradient">
    <div class="w-full overflow-hidden">
      <SideDrawer />
    </div>
    <div class="w-full overflow-hidden shadow-md">
      <Header />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div class="w-full overflow-hidden"><About /></div>
      <div class="w-full overflow-hidden"><Features /></div>
      <div class="w-full overflow-hidden"><EventsList /></div>
      <div class="w-full overflow-hidden"><Pricing /></div>
      <div class="w-full overflow-hidden"><Testimonial /></div>
      <div class="w-full overflow-hidden"><Booking /></div>
    </div>
    <div class="w-full overflow-hidden"><Footer /></div>
  </div>
</template>

<script>
// import NavBar from '@/components/navigation/NavBar.vue'
import Header from '@/components/header/Header.vue'
import About from '@/components/about/About.vue'
import Features from '@/components/features/Features.vue'
import EventsList from '@/components/events/EventsList.vue'
import Pricing from '@/components/pricing/Pricing.vue'
import Testimonial from '@/components/testimonial/Testimonial.vue'
import Booking from '@/components/booking/Booking.vue'
import Footer from '@/components/footer/Footer.vue'
import SideDrawer from '@/components/navigation/SideDrawer.vue'

export default {
  name: 'Home',
  components: {
    // NavBar,
    Header,
    About,
    Features,
    EventsList,
    Pricing,
    Testimonial,
    Booking,
    Footer,
    SideDrawer,
  },
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lobster', cursive;
}

p,
a {
  font-family: 'Montserrat', sans-serif;
}

.linear-gradient {
  background: rgb(255, 224, 95);
  background: linear-gradient(
    90deg,
    rgba(255, 224, 95, 1) 0%,
    rgba(255, 254, 144, 1) 50%,
    rgba(255, 221, 93, 1) 100%
  );
}
</style>

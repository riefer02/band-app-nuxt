<template>
  <div class="flex flex-wrap overflow-hidden bg-yellow-300">
    <div class="w-full overflow-hidden">
      <NavBar />
    </div>
    <div class="w-full overflow-hidden">
      <Header />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div class="w-full overflow-hidden"><About /></div>
      <div class="w-full overflow-hidden"><Features /></div>
      <div class="w-full overflow-hidden"><Events /></div>
      <div class="w-full overflow-hidden"><Pricing /></div>
      <div class="w-full overflow-hidden"><Testimonial /></div>
      <div class="w-full overflow-hidden"><Booking /></div>
    </div>
    <div class="w-full overflow-hidden"><Footer /></div>
  </div>
</template>

<script>
import NavBar from '@/components/navigation/NavBar.vue'
import Header from '@/components/header/Header.vue'
import About from '@/components/about/About.vue'
import Features from '@/components/features/Features.vue'
import Events from '@/components/events/Events.vue'
import Pricing from '@/components/pricing/Pricing.vue'
import Testimonial from '@/components/testimonial/Testimonial.vue'
import Booking from '@/components/booking/Booking.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    About,
    Features,
    Events,
    Pricing,
    Testimonial,
    Booking,
    Footer,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Lobster', cursive;
}

p {
  font-family: 'Montserrat', sans-serif;
}
</style>

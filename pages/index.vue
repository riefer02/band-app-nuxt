<template>
  <div class="flex flex-wrap overflow-hidden">
    <div class="w-full overflow-hidden">
      <NavBar />
    </div>
    <div class="w-full overflow-hidden">
      <Header />
    </div>
    <div class="container mx-auto bg-red-300 px-4 py-4">
      <div class="w-full overflow-hidden"><About /></div>

      <div class="w-full overflow-hidden"><Pricing /></div>

      <div class="w-full overflow-hidden"><Booking /></div>
    </div>
    <div class="w-full overflow-hidden"><Footer /></div>
  </div>
</template>

<script>
import NavBar from '@/components/navigation/NavBar.vue'
import Header from '@/components/header/Header.vue'
import About from '@/components/about/About.vue'
import Pricing from '@/components/pricing/Pricing.vue'
import Booking from '@/components/booking/Booking.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    About,
    Pricing,
    Booking,
    Footer,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

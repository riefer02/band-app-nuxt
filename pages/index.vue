<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient">
    <div class="w-full overflow-hidden shadow-md">
      <Header :header-data="viewData.header" />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div id="about" class="w-full overflow-hidden"><About /></div>
      <div id="features" class="w-full overflow-hidden"><Features /></div>
      <div id="events" class="w-full overflow-hidden"><EventsList /></div>
      <div id="pricing" class="w-full overflow-hidden"><Pricing /></div>
      <div id="testimonials" class="w-full overflow-hidden">
        <Testimonial />
      </div>
      <div id="booking" class="w-full overflow-hidden"><Booking /></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import About from '@/components/about/About.vue'
import Features from '@/components/features/Features.vue'
import EventsList from '@/components/events/EventsList.vue'
import Pricing from '@/components/pricing/Pricing.vue'
import Testimonial from '@/components/testimonial/Testimonial.vue'
import Booking from '@/components/booking/Booking.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Features,
    EventsList,
    Pricing,
    Testimonial,
    Booking,
  },
  data() {
    return {
      viewData: {
        name: 'Home',
        header: {
          headerVideo: 'uncharted-1.mp4',
          headerText: {
            primaryText: 'The Lewd Dudes',
            secondaryText: '"Lewd, just like the doctor ordered."',
            button: {
              text: 'Learn More',
              link: 'about',
            },
          },
        },
      },
    }
  },
}
</script>

<style></style>

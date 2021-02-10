<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient">
    <div class="w-full overflow-hidden shadow-md">
      <Header :header-data="viewData.header" />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div id="about" class="w-full overflow-hidden"><About /></div>
      <div id="features" class="w-full overflow-hidden"><Features /></div>
      <div id="events" class="w-full overflow-hidden"><EventsList /></div>
      <div id="testimonials" class="w-full overflow-hidden">
        <Testimonial />
      </div>
      <div id="booking" class="w-full overflow-hidden"><Booking /></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/sections/header/Header.vue'
import About from '@/components/sections/about/About.vue'
import Features from '@/components/sections/features/Features.vue'
import EventsList from '@/components/sections/events/EventsList.vue'
import Testimonial from '@/components/sections/testimonial/Testimonial.vue'
import Booking from '@/components/sections/booking/Booking.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Features,
    EventsList,
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
            secondaryText: '"Just like the doctor ordered."',
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

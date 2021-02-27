<template>
  <div
    class="md:flex md:flex-wrap lg:flex-col lg:justify-center lg:items-center xl:flex-row md:-mx-4 mb-4 lg:m-auto xl:-mx-4 xl:mb-4"
  >
    <TestimonialItem />
    <TestimonialItem />
    <TestimonialItem />
    <TestimonialItem />
  </div>
</template>

<script>
import TestimonialItem from '@/components/sections/testimonial/TestimonialItem.vue'
export default {
  components: {
    TestimonialItem,
  },
  data() {
    return {
      testimonials: [
        {
          image: require('@/assets/images/andie-fan-1.jpg'),
          quote: 'The Lewd Dudes are my church!',
          name: 'Andie',
        },
        {
          image: require('@/assets/images/nicole-fan-2.jpg'),
          quote: 'The Lewd Dudes are like a good cheese plate!',
          name: 'Nicole',
        },
        {
          image: require('@/assets/images/rochelle-fan-3.jpg'),
          quote: "I'm in the other band that play...",
          name: 'Rochelle',
        },
        {
          image: require('@/assets/images/abby-fan-4.jpg'),
          quote: 'I broke up with Riley shortly after this.',
          name: 'Abby',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

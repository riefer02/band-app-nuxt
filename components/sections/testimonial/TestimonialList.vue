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
}
</script>

<style lang="scss" scoped></style>

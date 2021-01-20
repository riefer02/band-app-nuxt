<template>
  <div class="md:flex md:flex-wrap md:-mx-4 mb-4">
    <TestimonialItem />
    <TestimonialItem />
    <TestimonialItem />
    <TestimonialItem />
  </div>
</template>

<script>
import TestimonialItem from '@/components/testimonial/TestimonialItem.vue'
export default {
  components: {
    TestimonialItem,
  },
}
</script>

<style lang="scss" scoped></style>

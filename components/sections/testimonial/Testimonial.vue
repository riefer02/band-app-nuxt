<template>
  <div class="flex flex-col md:flex-row px-6 mt-12">
    <TestimonialList />
  </div>
</template>

<script>
import TestimonialList from '@/components/sections/testimonial/TestimonialList.vue'
export default {
  components: {
    TestimonialList,
  },
}
</script>

<style scoped>
.testimonial {
  border-radius: 1rem;
}
</style>

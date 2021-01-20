<template>
  <div class="flex flex-col md:flex-row px-4">
    <TestimonialList />
  </div>
</template>

<script>
import TestimonialList from '@/components/testimonial/TestimonialList.vue'
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

<template>
  <!-- <div class="block">
        <SectionHeaderText text="Testimonials" />
      </div> -->

  <div class="flex flex-col md:flex-row">
    <TestimonialList />
  </div>
</template>

<script>
import TestimonialList from '@/components/testimonial/TestimonialList.vue'
// import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
export default {
  components: {
    // SectionHeaderText,
    TestimonialList,
  },
}
</script>

<style scoped>
.testimonial {
  border-radius: 1rem;
}
</style>

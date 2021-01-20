<template>
  <div class="lg:w-1/2 md:px-4 md:py-4 mt-6 md:mt-0">
    <div
      class="testimonial p-6 flex transition-colors duration-300 bg-white rounded-lg shadow-lg lg:p-8"
    >
      <div
        class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0"
      >
        <img
          src="https://unsplash.it/804/800"
          alt="profile image"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <ParagraphText
          text="'It really saves me time and effort. FWR Bootstrap
        Blocks is exactly what our business has been lacking. FWR Bootstrap
        Blocks was worth a fortune to my company. FWR Bootstrap Blocks has
        really helped our business. I'm good to go.'"
        />

        <div class="text-indigo-500 font-bold uppercase mt-6">- Jesse D.</div>
        <div class="text-black">Apple</div>
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
export default {
  components: {
    ParagraphText,
  },
}
</script>

<style lang="scss" scoped></style>

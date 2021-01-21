<template>
  <div class="lg:w-1/2 mt-6 md:mt-0 rounded-lg m-2 md:m-0 p-2">
    <div class="testimonial sm:flex bg-white rounded-lg shadow-lg px-3 sm:p-0">
      <div
        class="flex justify-center align-center md:block w-32 sm:w-1/3 h-32 sm:h-auto sm:rounded-none rounded-full mx-auto md:mr-0 flex-shrink-0"
      >
        <img
          src="https://unsplash.it/804/800"
          alt="profile image"
          class="w-full h-full p-2 sm:p-0 rounded-full sm:rounded-lg sm:rounded-r-none mx-auto shadow-inner shadow-lg"
        />
      </div>
      <div class="p-0 sm:p-2 md:p-4">
        <ParagraphText
          text="'It really saves me time and effort. FWR Bootstrap
        Blocks is exactly what our business has been lacking. FWR Bootstrap
        Blocks was worth a fortune to my company. FWR Bootstrap Blocks has
        really helped our business. I'm good to go.'"
        />
        <div class="flex flex-col pr-4 pb-4">
          <div
            class="text-indigo-500 font-bold uppercase mt-0 sm:mt-2 md:mt-6 self-end"
          >
            - Jesse D.
          </div>
          <div class="text-black self-end">Apple</div>
        </div>
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

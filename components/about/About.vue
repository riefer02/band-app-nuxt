<template>
  <div class="mt-12 mb-4 px-4">
    <div
      class="flex flex-col md:flex-row bg-white text-black rounded-lg shadow-lg"
    >
      <div class="w-full md:w-2/3 md:order-2 p-10 xl:p-16">
        <div class="h-10">
          <SectionHeaderText text="Welcome to Casa Patron" />
        </div>
        <div class="">
          <ParagraphText :text="placeholderText" />
        </div>
        <div class="flex justify-center px-2 py-2">
          <Button text="Learn More" />
        </div>
      </div>
      <div
        class="w-full bg-cover h-64 md:h-auto md:min-h-full md:w-1/3 order-1 rounded-b-lg rounded-t-none md:rounded-l-lg md:rounded-r-none flex-grow"
        style="background-image: url('https://unsplash.it/804/800')"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    SectionHeaderText,
    ParagraphText,
    Button,
  },
  data() {
    return {
      placeholderText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },
}
</script>

<style lang="scss" scoped></style>

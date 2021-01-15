<template>
  <div class="py-5 px-4">
    <div class="py-5 px-4">
      <div
        class="flex flex-col md:flex-row px-4 py-4 bg-white text-black rounded-lg shadow-lg"
      >
        <div class="py-2 px-2 w-full md:w-2/3 md:order-2">
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
        <div class="w-full h-40 md:w-1/3 bg-red-500 md:order-1">
          About Picture
        </div>
      </div>
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

<template>
  <div
    class="max-w-full shadow-lg rounded overflow-hidden m-4 sm:flex xl:flex-col"
  >
    <div
      class="xl:h-48 h-40 sm:h-auto sm:w-48 md:w-64 xl:w-full flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l sm:rounded-r-none md:rounded-r-none xl:rounded-b-none rounded-b-none text-center overflow-hidden shadow-inner shadow-lg"
      style="background-image: url('https://unsplash.it/804/800')"
    ></div>
    <div
      class="px-6 py-4 bg-white text-black shadow-inner shadow-lg overflow-hidden flex-grow xl:p-12"
    >
      <h2 class="mb-2 xl:text-2xl font-light">Hello Casa Patroneers!</h2>
      <ParagraphText
        text="Learning Tailwind is incredibly easy. The team has done a wonderful job
        with the documentation. This is pretty amazing, I must say."
      />
      <p class="mb-4 text-grey-dark text-sm"></p>
      <Button text="Learn More" />
    </div>
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    Button,
    ParagraphText,
  },
}
</script>

<style lang="scss" scoped></style>

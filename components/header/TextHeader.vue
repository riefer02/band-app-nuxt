<template>
  <div class="h-full flex w-auto justify-center content-center flex-col">
    <div class="py-8 bg-opacity-25">
      <div class="flex justify-center content-center flex-col">
        <h1
          class="text-center antialiased text-6xl font-black font-serif leading-none mb-2 header-text-shadow"
        >
          Casa Patron
        </h1>
        <h3
          class="text-center antialiased text-3xl font-normal tracking-normal header-text-shadow font-serif"
        >
          Explore New Mexico's Enchantments
        </h3>
      </div>
      <div class="flex justify-center pt-5">
        <CallToActionBtn text="Book Now" />
      </div>
    </div>
  </div>
</template>

<script>
import CallToActionBtn from '@/components/buttons/CallToActionBtn.vue'
export default {
  components: {
    CallToActionBtn,
  },
}
</script>

<style scoped>
.header-text-shadow {
  text-shadow: 1px 0px 6px #d5ac4e;
  font-family: 'Lobster', cursive;
}
</style>

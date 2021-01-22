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
          class="text-center antialiased text-3xl font-normal tracking-normal header-subtext-shadow font-serif"
        >
          Explore New Mexico's Enchantments
        </h3>
      </div>
      <div class="flex justify-center pt-5">
        <Button text="Book Now" link="about" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    Button,
  },
}
</script>

<style scoped>
.header-text-shadow {
  text-shadow: 0px 0px 3px rgba(242, 217, 128, 1);
  font-family: 'Lobster', cursive;
}

.header-subtext-shadow {
  text-shadow: 0px 0px 2px rgba(242, 217, 128, 1);
  font-family: 'Lobster', cursive;
}
</style>

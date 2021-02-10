<template>
  <div class="h-full flex w-auto justify-center content-center flex-col">
    <div class="py-8 px-4 bg-opacity-25">
      <div class="flex justify-center content-center flex-col">
        <h1
          class="linear-gradient-text text-center antialiased text-5xl sm:text-6xl font-black leading-none mb-2 header-text-shadow"
        >
          {{ texts.primaryText }}
        </h1>
        <h3
          class="linear-gradient-text text-center antialiased text-3xl font-normal tracking-normal header-subtext-shadow"
        >
          {{ texts.secondaryText }}
        </h3>
      </div>
      <div class="flex justify-center pt-5">
        <Button :text="buttonText" :link="buttonLink" />
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
  props: {
    texts: {
      type: Object,
      default: () => {
        return { primaryText: 'Primary Text', secondaryText: 'Secondary Text' }
      },
    },
  },
  computed: {
    buttonText() {
      return this.texts.button.text
    },
    buttonLink() {
      return this.texts.button.link
    },
  },
}
</script>

<style scoped></style>

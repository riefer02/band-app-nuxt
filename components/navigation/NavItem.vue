<template>
  <div class="flex justify-start items-center">
    <font-awesome-icon :icon="['fa', link.icon]" class="mr-3 text-3xl fa-fw" />
    <NuxtLink
      :id="link.text + '-link'"
      class="block text-3xl mx-0 my-2 no-underline hover:text-white"
      :to="link.link"
      @click="TOGGLE_NAV_DRAWER"
      >{{ link.text }}</NuxtLink
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    link: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_NAV_DRAWER']),
  },
}
</script>

<style scoped>
a {
  font-family: 'Lobster', cursive;
  color: rgb(255, 255, 255);
  transition: all 0.3s;
}
</style>

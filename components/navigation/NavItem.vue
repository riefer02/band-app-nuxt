<template>
  <div class="flex justify-start items-center">
    <font-awesome-icon :icon="['fa', link.icon]" class="mr-3 text-3xl fa-fw" />
    <a
      :id="link.text + '-link'"
      class="block text-3xl mx-0 my-2 no-underline hover:text-white"
      :href="link.link"
      @click="$emit('toggle-nav')"
      >{{ link.text }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
a {
  font-family: 'Lobster', cursive;
  color: rgb(242, 217, 128);
  transition: all 0.3s;
}
</style>

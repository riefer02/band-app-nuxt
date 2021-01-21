<template>
  <a
    :id="text + '-link'"
    class="block text-3xl mx-0 my-2 no-underline hover:text-white"
    href="#"
    @click="$emit('toggle-nav')"
    >{{ text }}</a
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style scoped>
a {
  font-family: 'Lobster', cursive;
  color: rgba(255, 221, 93, 1);
  transition: all 0.3s;
}
</style>

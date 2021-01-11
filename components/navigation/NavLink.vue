<template>
  <a
    :href="link"
    class="nav-link lg:p-4 py-3 px-0 block border-b-2 border-transparent xl:text-2xl hover:border-red-400"
    >{{ text }}</a
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Link Text Here',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.nav-link {
  font-family: 'Lobster', cursive;
}
</style>

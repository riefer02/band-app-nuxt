<template>
  <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
    {{ text }}
  </button>
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

<style lang="scss" scoped></style>

<template>
  <button
    class="text-black-500 bg-transparent border border-solid border-white-500 hover:bg-red-400 hover:text-black-600 active:bg-yellow-600 font-bold uppercase px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
    type="button"
    style="transition: all 0.15s ease"
  >
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
  },
}
</script>

<style lang="scss" scoped></style>

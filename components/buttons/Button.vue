<template>
  <button
    class="lg:text-lg w-auto uppercase text-sm font-bold tracking-wide bg-indigo-500 hover:border hover:border-indigo-600 border-solid hover:bg-red-500 text-white p-3 rounded-lg focus:outline-none focus:shadow-outline hover:shadow-lg shadow-md"
    style="transition: all 0.15s ease"
    @click="goToLocation"
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
    link: {
      type: String,
      default: '/',
    },
  },
  methods: {
    goToLocation() {
      location.href = '#' + this.link
    },
  },
}
</script>

<style lang="scss" scoped></style>

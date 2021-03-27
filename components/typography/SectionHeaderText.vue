<template>
  <h2 class="text-center text-3xl xl:text-4xl underline mb-2">
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Section Header Text',
    },
  },
}
</script>

<style scoped></style>

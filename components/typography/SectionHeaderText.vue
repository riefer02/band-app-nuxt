<template>
  <h2 class="text-center text-2xl">{{ text }}</h2>
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

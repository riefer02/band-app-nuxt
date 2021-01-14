<template>
  <p class="text-sm px-2 py-2">
    <span class="font-bold">{{ leadText }}</span
    >{{ trailText }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Paragraph Text',
    },
  },
  computed: {
    leadText() {
      let leadText = this.text.split(' ', 3).join(' ')
      leadText = leadText + ' '
      return leadText
    },
    trailText() {
      const trailText = this.text.split(' ').splice(4).join(' ')
      return trailText
    },
  },
}
</script>

<style scoped></style>

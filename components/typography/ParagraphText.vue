<template>
  <p class="text-sm px-2 py-2">
    <span class="font-bold">{{ leaderText }}</span
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
    leaderText() {
      let leaderText = this.text.split(' ', 3).join(' ')
      leaderText = leaderText + ' '
      return leaderText
    },
    trailText() {
      const trailText = this.text.split(' ').splice(4).join(' ')
      return trailText
    },
  },
}
</script>

<style lang="scss" scoped></style>

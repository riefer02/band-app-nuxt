<template>
  <li class="mb-2">
    <a
      :href="item.link"
      class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
      >{{ item.text }}</a
    >
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>

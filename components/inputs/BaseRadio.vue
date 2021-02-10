<template>
  <label v-if="label" class="flex justify-center">
    <input
      type="radio"
      class="mx-auto"
      :value="value"
      v-bind="$attrs"
      @change="handleInput"
    />
    {{ label }}</label
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('custom-event', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped></style>

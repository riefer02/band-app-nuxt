<template>
  <label v-if="label" class="flex justify-center">
    <input
      type="radio"
      class="mx-auto"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
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
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

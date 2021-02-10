<template>
  <div class="flex">
    <BaseRadio
      v-for="option in options"
      :key="option"
      class="text-sm flex m-1 flex-col"
      :label="option"
      :value="option"
      :model-value="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script>
import BaseRadio from '@/components/inputs/BaseRadio.vue'
export default {
  components: {
    BaseRadio,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

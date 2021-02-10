<template>
  <div class="flex">
    <BaseRadio
      v-for="option in options"
      :key="option"
      class="text-sm flex m-1 flex-col"
      :label="option"
      :value="option"
      :name="name"
      @custom-event="passToParent"
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
  },
  methods: {
    passToParent(e) {
      this.$emit('custom-event', e)
    },
  },
}
</script>

<style lang="scss" scoped></style>

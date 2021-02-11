<template>
  <div class="flex flex-col sm:flex-row shadow-lg rounded-lg w-full bg-white">
    <div class="flex-none w-full h-48 sm:h-auto sm:w-48 relative">
      <img
        :src="require(`~/assets/images/${image}`)"
        class="absolute inset-0 w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
      />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">{{ item.name }}</h1>
        <div class="text-xl font-semibold text-gray-500">
          {{ '$' + item.price + '.00' }}
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          {{ quantity }}
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex">
          <BaseRadioGroup
            name="size"
            :options="item.sizes"
            @custom-event="handleRadioInput"
          />
        </div>
        <div class="ml-auto text-sm text-gray-500 underline">Size Guide</div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3">
          <button
            class="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Buy now
          </button>
          <button
            class="w-1/2 flex items-center justify-center rounded-md border border-gray-300"
            type="button"
          >
            Details
          </button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
          type="button"
          aria-label="like"
        >
          <HeartIcon />
        </button>
      </div>
      <p class="text-sm text-gray-500">
        {{ item.description }}
      </p>
    </form>
  </div>
</template>

<script>
import BaseRadioGroup from '@/components/inputs/BaseRadioGroup.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'

export default {
  components: {
    BaseRadioGroup,
    HeartIcon,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      size: undefined,
    }
  },

  computed: {
    image() {
      return this.item.images[0]
    },
    quantity() {
      let quantity
      if (this.size) {
        const index = this.item.sizes.indexOf(this.size)
        if (this.item.quantity[index] === 0) {
          quantity = 'Out of Stock'
        } else {
          quantity = `${this.item.quantity[index]} in Stock`
        }
      } else {
        quantity = 'Select a Size'
      }
      return quantity
    },
  },
  methods: {
    handleRadioInput(e) {
      this.size = e
    },
  },
}
</script>

<style lang="scss" scoped></style>

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
          In stock
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
            Add to bag
          </button>
        </div>
        <button
          class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
          type="button"
          aria-label="like"
        >
          <svg width="20" height="20" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div>
</template>

<script>
import BaseRadioGroup from '@/components/inputs/BaseRadioGroup.vue'
export default {
  components: {
    BaseRadioGroup,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      size: '',
    }
  },

  computed: {
    image() {
      return this.item.images[0]
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

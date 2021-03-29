<template>
  <div class="m-2">
    <div
      class="product__card flex flex-col sm:flex-row shadow-lg rounded-lg w-full bg-white"
    >
      <div
        class="product__card-image-container flex-none w-full h-48 sm:h-auto sm:w-48 relative"
      >
        <img
          :src="require(`~/assets/images/${image}`)"
          class="absolute inset-0 w-full h-full object-contain rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
        />
      </div>
      <div class="flex flex-col justify-between p-6 w-full">
        <div class="flex flex-col flex-wrap">
          <div class="flex justify-between items-center">
            <h1 class="inline-block text-4xl font-semibold">
              {{ item.name }}
            </h1>
            <div class="inline-block text-xl font-semibold text-gray-500">
              {{ '$' + item.price + '.00' }}
            </div>
          </div>
          <p class="text-sm text-gray-500">
            {{ item.description }}
          </p>
        </div>
        <div>
          <div class="flex flex-col items-baseline mt-4 mb-6">
            <div
              v-if="showSizes"
              class="w-full flex-none text-sm font-medium text-gray-500 mt-2"
            >
              {{ quantity }}
            </div>
            <div class="flex w-full justify-between">
              <div class="space-x-2 flex">
                <BaseRadioGroup
                  v-if="showSizes"
                  name="size"
                  :options="item.sizes"
                  @custom-event="handleRadioInput"
                />
              </div>
              <div class="flex flex-col ml-auto text-sm">
                <div class="text-gray-800 underline" for="quantity">
                  Quantity
                </div>
                <div class="flex justify-center mx-auto text-xl">
                  <button
                    class="product__card-quantity-btn focus:outline-none"
                    @click="decreaseQuantity()"
                  >
                    -
                  </button>
                  <div class="mx-2">{{ curQuantity }}</div>
                  <button
                    class="product__card-quantity-btn focus:outline-none"
                    @click="increaseQuantity()"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button
                class="text-xl w-1/2 flex items-center justify-center rounded-md bg-black text-white"
                type="submit"
                @click="sendToCart()"
              >
                Add to Cart
              </button>
              <button
                class="text-xl w-1/2 flex items-center justify-center rounded-md border border-gray-300"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
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
      curQuantity: 0,
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
    showSizes() {
      return this.item.sizes.length > 1
    },
  },
  methods: {
    handleRadioInput(e) {
      this.size = e
    },
    increaseQuantity() {
      this.curQuantity++
    },
    decreaseQuantity() {
      if (this.curQuantity !== 0) this.curQuantity--
    },
    sendToCart() {
      if (this.curQuantity === 0) return
      const product = { ...this.item }
      if (this.size) product.size = this.size

      const item = {
        id: nanoid(),
        data: {
          name: product.name,
          productID: product.id,
          size: product.size ? product.size : null,
          quantity: this.curQuantity,
          price: product.price,
        },
      }
      this.$store.dispatch('product/addToCart', item)
      console.log(`${this.curQuantity} ${item.data.name} added to Cart`)
      this.curQuantity = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  &__card {
    min-height: 300px;
    min-width: 375px;

    &-image-container {
      @include max-sm {
        height: 350px;
      }
    }

    &-quantity-btn {
      &::before {
        content: '';
        height: 5px;
        width: 5px;
        @apply bg-gray-500;
      }
    }
  }
}
</style>

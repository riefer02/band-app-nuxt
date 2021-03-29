<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="item in items" :key="item.id" class="w-full sm:w-1/2">
      <ProductCard :item="item" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ecommerce/products/ProductCard.vue'
export default {
  components: {
    ProductCard,
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="flex justify-center items-center relative cursor-pointer"
    @click="$router.push('/store/checkout')"
  >
    <font-awesome-icon
      :icon="['fa', 'shopping-cart']"
      class="mr-3 text-3xl fa-fw mt-2"
    />
    <span
      class="h-auto w-auto rounded-full px-2 bg-white text-sm absolute top-0 right-0 z-2"
      >{{ this.$store.getters['product/cartTotal'] }}</span
    >
  </div>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      let total
      this.$store.cart.forEach((i) => (total = total + i.quantity))
      return total
    },
  },
}
</script>

<style lang="scss" scoped></style>

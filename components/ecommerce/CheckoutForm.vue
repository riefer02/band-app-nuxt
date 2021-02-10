<template>
  <div class="divide-y">
    <div class="flex justify-center">
      <h2 class="mx-auto text-2xl">Your Shopping Cart</h2>
    </div>
    <div class="block lg:flex">
      <div class="w-full lg:w-1/2">
        <CartList />
      </div>
      <div class="my-2 w-full lg:w-1/2">
        <CartSummary />
      </div>
    </div>
    <div class="mt-10">
      <ShippingForm />
    </div>
  </div>
</template>

<script>
import CartList from './CartList'
import CartSummary from './CartSummary'
import ShippingForm from './ShippingForm'
export default {
  components: {
    CartList,
    CartSummary,
    ShippingForm,
  },
}
</script>

<style lang="scss" scoped></style>

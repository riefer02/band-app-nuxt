<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient px-2 md:px-0">
    <div
      class="container mx-auto md:px-4 md:py-4 bg-gray-100 h-screen mt-16 mb-12 rounded-lg shadow-lg"
    >
      <div id="checkout" class="w-full overflow-hidden p-2">
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from '@/components/ecommerce/CheckoutForm'
export default {
  components: {
    CheckoutForm,
  },
}
</script>

<style lang="scss" scoped></style>

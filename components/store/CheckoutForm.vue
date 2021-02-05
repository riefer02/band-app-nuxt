<template>
  <div>
    <div>
      <CartList />
    </div>
    <div>
      <ShippingForm />
    </div>
  </div>
</template>

<script>
import CartList from './CartList'
import ShippingForm from './ShippingForm'
export default {
  components: {
    CartList,
    ShippingForm,
  },
}
</script>

<style lang="scss" scoped></style>

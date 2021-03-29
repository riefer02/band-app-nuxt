<template>
  <div>
    <div>
      <div v-if="productList.length > 0">
        <ul v-for="product in productList" :key="product.id" class="">
          <CartItem :item="product" />
        </ul>
      </div>
      <div v-else>
        <div>Your Cart is empty.</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
  mounted() {
    this.curCart = this.$store.getters['product/cart']
  },
  components: {
    CartItem,
  },
  data() {
    return {
      curCart: [],
      productList: [
        {
          id: 1,
          name: 'T-Shirt',
          image: require('@/assets/images/t-shirt.jpg'),
          price: 10,
          quantity: [2, 3, 4, 5, 6, 7, 8],
          description: 'Soft and stylish',
          sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

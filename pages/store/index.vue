<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient">
    <div class="w-full overflow-hidden shadow-md">
      <Header :header-data="viewData.header" />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div id="store" class="w-full overflow-hidden">
        <ProductList :items="productList" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ecommerce/ProductList.vue'
export default {
  components: {
    ProductList,
  },
  data() {
    return {
      viewData: {
        name: 'Store',
        header: {
          headerVideo: 'Casa-Patron-Splash-1.mp4',
          headerText: {
            primaryText: 'The Lewd Store',
            secondaryText: 'Buy, Sell, Trade',
            button: {
              text: 'Learn More',
              link: 'about',
            },
          },
        },
      },
    }
  },
  computed: {
    productList() {
      return this.$store.state.product.products
    },
  },
  mounted() {
    this.$store.dispatch('product/fetchProducts')
  },
}
</script>

<style lang="scss" scoped></style>

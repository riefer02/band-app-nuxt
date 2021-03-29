<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient">
    <div class="w-full overflow-hidden shadow-md">
      <Header :header-data="viewData.header" />
    </div>
    <div class="store__view-container container mx-auto md:px-4 md:py-4">
      <div id="store" class="w-full overflow-hidden">
        <ProductList :items="productList" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ecommerce/products/ProductList.vue'
import Header from '@/components/sections/header/Header.vue'
export default {
  components: {
    ProductList,
    Header,
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

<style lang="scss" scoped>
.store {
  &__view-container {
    min-height: 800px;
  }
}
</style>

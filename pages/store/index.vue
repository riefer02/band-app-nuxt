<template>
  <div class="flex flex-wrap overflow-hidden linear-gradient">
    <div class="w-full overflow-hidden shadow-md">
      <Header :header-data="viewData.header" />
    </div>
    <div class="container mx-auto md:px-4 md:py-4">
      <div id="store" class="w-full overflow-hidden">
        <ProductList :items="products" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/store/ProductList.vue'
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
      products: [
        {
          id: 1,
          name: 'Gen 1 T-Shirt',
          price: 15,
        },
        {
          id: 2,
          name: 'Koozie',
          price: 5,
        },
        {
          id: 3,
          name: 'Hat',
          price: 20,
        },
        {
          id: 4,
          name: 'Condoms',
          price: 10,
        },
      ],
    }
  },
  mounted() {
    console.log(this.$store)
    this.$store.dispatch('product/fetchProducts')
  },
}
</script>

<style lang="scss" scoped></style>

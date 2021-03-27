<template>
  <div>
    <div class="linear-gradient">
      <div class="w-full overflow-hidden">
        <NavSystem />
      </div>
      <div class="mt-14">
        <Nuxt />
      </div>
      <div class="w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import NavSystem from '../components/navigation/NavSystem'
import Footer from '../components/sections/footer/Footer.vue'

export default {
  components: {
    NavSystem,
    Footer,
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

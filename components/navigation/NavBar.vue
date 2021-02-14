<template>
  <nav
    class="shadow-lg transition-all flex items-center justify-between fixed top-0 left-0 md:h-1/10 w-full duration-400 ease-in"
    :class="[
      { 'bg-white': scrollPosition >= 539 },
      { 'linear-gradient': scrollPosition <= 540 || scrollPosition === 0 },
    ]"
  >
    <span
      class="mobile-nav-open-icon cursor-pointer text-3xl lg:text-3xl mr-4 sm:mr-10 lg:mr-12 ml-4 lg:ml-12 p-2 text-black"
      @click="TOGGLE_NAV_DRAWER()"
      >&#9776;</span
    >
    <h3 class="text-2xl cursor-pointer" @click="$router.push('/')">
      The Lewd Dudes
    </h3>
    <div class="flex justify-center items-center">
      <CartIcon />
      <BandSvg class="lg:ml-3 ml-2 mr-4 lg:mr-12" />
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
import BandSvg from '@/components/icons/BandSvg.vue'
import CartIcon from '@/components/ecommerce/CartIcon.vue'

export default {
  components: {
    BandSvg,
    CartIcon,
  },
  data() {
    return {
      scrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScrollPosition)
  },
  methods: {
    ...mapMutations(['TOGGLE_NAV_DRAWER']),
    updateScrollPosition() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>

<style scoped>
nav {
  z-index: 2;
}
</style>

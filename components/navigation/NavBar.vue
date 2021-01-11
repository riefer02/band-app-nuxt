<template>
  <div
    class="xl:px-20 lg:px-16 px-6 bg-opacity-100 fixed z-40 w-full flex flex-wrap items-center xl:py-1 lg:py-0 py-2"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="">
        <SunIcon />
      </a>
      <label for="menu-toggle" class="cursor-pointer lg:hidden block">
        <HamburgerNavIcon />
      </label>
    </div>
    <input id="menu-toggle" type="checkbox" class="hidden" />
    <div id="menu" class="hidden lg:flex lg:items-center lg:w-auto w-full">
      <NavList />
      <a
        href=""
        class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
      >
        <img
          class="rounded-full w-10 h-10 border-2 border-transparent hover:border-red-400"
          src="https://source.unsplash.com/random"
          alt="random"
        />
      </a>
    </div>
  </div>
</template>

<script>
import SunIcon from '@/components/icons/SunIcon.vue'
import HamburgerNavIcon from '@/components/icons/HamburgerNavIcon.vue'
import NavList from '@/components/navigation/NavList.vue'
export default {
  components: {
    SunIcon,
    HamburgerNavIcon,
    NavList,
  },
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>

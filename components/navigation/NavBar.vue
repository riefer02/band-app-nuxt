<template>
  <div
    class="lg:px-16 px-6 bg-red-500 bg-opacity-100 fixed z-40 w-full flex flex-wrap items-center lg:py-0 py-2"
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
      <nav>
        <ul
          class="lg:flex items-center justify-between text-base text-black-700 pt-4 lg:pt-0"
        >
          <li>
            <a
              href=""
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent xl:text-xl hover:border-red-400"
              >About</a
            >
          </li>
          <li>
            <a
              href=""
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent xl:text-xl hover:border-red-400"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href=""
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent xl:text-xl hover:border-red-400"
              >Booking</a
            >
          </li>
        </ul>
      </nav>
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
export default {
  components: {
    SunIcon,
    HamburgerNavIcon,
  },
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>

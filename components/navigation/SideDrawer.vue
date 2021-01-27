<template>
  <div class="">
    <nav
      class="shadow-inner shadow-lg flex items-center justify-between fixed top-0 left-0 md:h-1/10 w-full transition-colors duration-400 ease-in"
      :class="[
        { 'bg-white': scrollPosition >= 539 },
        { 'linear-gradient': scrollPosition <= 540 || scrollPosition === 0 },
      ]"
    >
      <span
        class="mobile-nav-open-icon cursor-pointer text-3xl lg:text-3xl mr-8 ml-12 p-2 text-black"
        @click="toggleNav()"
        >&#9776;</span
      >
      <h3 class="text-2xl">The Lewd Dudes</h3>
      <BandSvg class="ml-8 mr-12" />
    </nav>

    <!-- this would work as the backdrop when navbar is open-->
    <div
      id="backdrop"
      class="backdrop-container hidden h-full overflow-auto fixed top-0 left-0 w-full"
      :class="[{ 'open-backdrop': isOpen }, { 'close-backdrop': !isOpen }]"
    ></div>

    <!--the would be the drawer and it's content-->
    <div
      id="mySidenav"
      class="sidenav-container transition-all bg-white flex flex-col items-center h-full overflow-x-hidden pt-2 fixed top-0 left-0 w-0 shadow-inner shadow-lg"
      :class="[{ 'open-drawer': isOpen }, { 'close-drawer': !isOpen }]"
    >
      <span
        class="drawer-close-button flex items-center justify-end h-12 mb-12 w-full"
      >
        <a
          href="javascript:void(0)"
          class="closebtn font-bold text-5xl pr-4 hover:text-white"
          @click="toggleNav()"
          >&times;</a
        >
      </span>
      <NavList @toggle-nav="toggleNav" />
    </div>
  </div>
</template>

<script>
import NavList from '@/components/navigation/NavList.vue'
import BandSvg from '@/components/icons/BandSvg.vue'

export default {
  components: {
    NavList,
    BandSvg,
  },
  data() {
    return {
      isOpen: false,
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
    toggleNav() {
      this.isOpen = !this.isOpen
    },
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

.backdrop-container {
  background: rgb(213, 184, 255);
  background: linear-gradient(
    90deg,
    rgba(213, 184, 255, 0.5) 0%,
    rgba(220, 198, 224, 0.5) 50%,
    rgba(213, 184, 255, 0.5) 100%
  );
  z-index: 2;
  animation: fadeIn 0.6s cubic-bezier(0.1, 0.95, 0.77, 1.01);
}

.sidenav-container {
  z-index: 3;
  background-color: rgba(102, 126, 234, 1);
  transition: 0.3s;
}

.sidenav-container .closebtn {
  color: rgb(242, 217, 128);
}

.open-drawer {
  @apply w-3/4;
}

.open-backdrop {
  display: block;
  opacity: 1;
}

.close-drawer {
  width: 0px;
}

.close-backdrop {
  opacity: 0;
}

@media screen and (min-width: 400px) {
  .open-drawer {
    @apply w-2/3;
  }
}

@media screen and (min-width: 768px) {
  .open-drawer {
    @apply w-5/12;
  }
}

@media screen and (min-width: 1000px) {
  .open-drawer {
    @apply w-1/4;
  }
}

@media screen and (min-width: 1400px) {
  .open-drawer {
    @apply w-2/12;
  }
}
</style>

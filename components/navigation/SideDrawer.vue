<template>
  <!-- this would work as the backdrop when navbar is open-->
  <div>
    <div
      id="backdrop"
      class="backdrop-container hidden h-full overflow-auto fixed top-0 left-0 w-full"
      :class="[{ 'open-backdrop': isOpen }, { 'close-backdrop': !isOpen }]"
    ></div>

    <!--the would be the drawer and it's content-->
    <div
      id="mySidenav"
      class="sidenav-container transition-all bg-white flex flex-col items-center h-full overflow-x-hidden pt-2 fixed top-0 left-0 w-0 shadow-lg"
      :class="[{ 'open-drawer': isOpen }, { 'close-drawer': !isOpen }]"
    >
      <span
        class="drawer-close-button flex items-center justify-between h-12 mb-12 w-full"
      >
        <div class="pl-5 pt-1">
          <CartIcon />
        </div>
        <a
          href="javascript:void(0)"
          class="closebtn font-bold text-5xl pr-4 hover:text-white"
          @click="TOGGLE_NAV_DRAWER"
          >&times;</a
        >
      </span>
      <NavList />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import NavList from '@/components/navigation/NavList.vue'
import CartIcon from '@/components/ecommerce/CartIcon.vue'

export default {
  components: {
    NavList,
    CartIcon,
  },
  data() {
    return {
      scrollPosition: 0,
    }
  },
  computed: {
    isOpen() {
      return this.$store.state.drawerOpen
    },
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

<style>
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

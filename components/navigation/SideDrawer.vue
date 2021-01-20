<template>
  <div class="shadow-inner shadow-lg">
    <!--creating the button to handle opening the navbar-->
    <nav
      class="bg-white flex items-center justify-start fixed top-0 left-0 w-full"
    >
      <span
        class="mobile-nav-open-icon cursor-pointer text-3xl mr-8 ml-12 text-black"
        @click="toggleNav()"
        >&#9776;</span
      >
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
      class="sidenav-container bg-white flex flex-col items-center h-full overflow-x-hidden pt-2 fixed top-0 left-0 w-0"
      :class="[{ 'open-drawer': isOpen }, { 'close-drawer': !isOpen }]"
    >
      <span
        class="drawer-close-button flex items-center justify-end h-12 mb-12 w-full"
      >
        <a
          href="javascript:void(0)"
          class="closebtn font-bold text-5xl pr-4"
          @click="toggleNav()"
          >&times;</a
        >
      </span>
      <a
        id="home-link"
        class="block text-xl mx-0 my-2 no-underline"
        href="#home"
        @click="toggleNav()"
        >Home</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="about-link"
        href="#about"
        @click="toggleNav()"
        >About</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="featires-link"
        href="#works"
        @click="toggleNav()"
        >Features</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="events-link"
        href="#works"
        @click="toggleNav()"
        >Events</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="pricing-link"
        href="#works"
        @click="toggleNav()"
        >Pricing</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="booking-link"
        href="#works"
        @click="toggleNav()"
        >Booking</a
      >
      <a
        class="block text-xl mx-0 my-2 no-underline hover:text-white"
        id="contact-link"
        href="#contact"
        @click="toggleNav()"
        >Contact</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
nav {
  height: 10vh;
  z-index: 1;
}

.backdrop-container {
  background: rgb(255, 224, 95);
  background: linear-gradient(
    90deg,
    rgba(255, 224, 95, 0.5) 0%,
    rgba(255, 254, 144, 0.5) 50%,
    rgba(255, 221, 93, 0.5) 100%
  );
  z-index: 2;
  animation: fadeIn 1.2s ease-in-out;
}

.sidenav-container {
  z-index: 3;
  background-color: rgba(102, 126, 234, 1);
  transition: 0.5s;
}

.sidenav-container a {
  color: rgba(255, 221, 93, 1);
  transition: all 0.3s;
}

.sidenav-container .closebtn {
  color: rgba(255, 221, 93, 1);
}

/* 1/1 base rules are converted successfully. */
/* Gather results from the console with `copy(window.cssToTailwindResults)` */

/* ℹ️ Base selector: .sidenav-container .drawer-close-button */
/* ✨ TailwindCSS: "flex items-center justify-end h-12 mb-12 w-full" */

.open-drawer {
  width: 70%;
}

.open-backdrop {
  display: block;
  opacity: 1;
}

.close-drawer {
  width: 0px;
}

.close-backdrop {
  display: none;
}
</style>

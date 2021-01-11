<template>
  <nav>
    <ul
      class="lg:flex items-center justify-between text-base text-black-700 pt-4 lg:pt-0"
    >
      <li v-for="link in links" :key="link.text">
        <NavLink :text="link.text" :link="link.link" />
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from '@/components/navigation/NavLink.vue'
export default {
  components: {
    NavLink,
  },
  data() {
    return {
      links: [
        { text: 'About', link: '/about' },
        { text: 'Pricing', link: '/pricing' },
        { text: 'Booking', link: '/booking' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

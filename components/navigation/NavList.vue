<template>
  <ul class="">
    <li v-for="link in links" :key="link.text">
      <NavItem
        :text="link.text"
        :link="link.link"
        @toggle-nav="$emit('toggle-nav')"
      />
    </li>
  </ul>
</template>

<script>
import NavItem from '@/components/navigation/NavItem.vue'

export default {
  components: {
    NavItem,
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

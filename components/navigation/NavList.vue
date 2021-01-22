<template>
  <ul class="">
    <li v-for="link in links" :key="link.text">
      <NavItem :link="link" @toggle-nav="$emit('toggle-nav')" />
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
        { text: 'About', link: '#about', icon: 'home' },
        { text: 'Features', link: '#features', icon: 'list-ul' },
        { text: 'Events', link: '#events', icon: 'calendar-alt' },
        { text: 'Pricing', link: '#pricing', icon: 'dollar-sign' },
        { text: 'Testimonials', link: '#testimonials', icon: 'users' },
        { text: 'Booking', link: '#booking', icon: 'book' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

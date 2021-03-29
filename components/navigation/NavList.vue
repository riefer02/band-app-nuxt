<template>
  <ul class="nav__list mt-12">
    <li v-for="link in links" :key="link.text">
      <NavItem :link="link" @click="TOGGLE_NAV_DRAWER" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import NavItem from '@/components/navigation/NavItem.vue'

export default {
  components: {
    NavItem,
  },
  data() {
    return {
      links: [
        { text: 'Home', link: '/', icon: 'home' },
        { text: 'Store', link: '/store', icon: 'dollar-sign' },
        { text: 'Tour', link: '/tour', icon: 'calendar-alt' },
        { text: 'Music', link: '/music', icon: 'music' },
        { text: 'Video', link: '/video', icon: 'video' },
        { text: 'Blog', link: '/blog', icon: 'book' },
        { text: 'About', link: '/about', icon: 'users' },
      ],
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_NAV_DRAWER']),
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    width: 90%;
  }
}
</style>

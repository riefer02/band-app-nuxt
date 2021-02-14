<template>
  <ul class="">
    <div class="divide-y divide-gray-100">
      <li v-for="link in links" :key="link.text">
        <NavItem :link="link" @click="TOGGLE_NAV_DRAWER" />
      </li>
    </div>
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

<style lang="scss" scoped></style>

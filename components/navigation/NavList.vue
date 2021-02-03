<template>
  <ul class="">
    <div class="divide-y divide-gray-100">
      <li v-for="link in links" :key="link.text">
        <NavItem :link="link" @toggle-nav="$emit('toggle-nav')" />
      </li>
    </div>
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
}
</script>

<style lang="scss" scoped></style>

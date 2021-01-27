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
        { text: 'Home', link: '/', icon: 'home' },
        { text: 'Store', link: '/store', icon: 'list-ul' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

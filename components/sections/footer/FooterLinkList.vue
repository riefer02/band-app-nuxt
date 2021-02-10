<template>
  <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
    <h5 class="text-xl font-bold mb-6">{{ links.title }}</h5>
    <ul class="list-none footer-links">
      <FooterLinkItem
        v-for="link in links.linksList"
        :key="link.text"
        :item="link"
      />
    </ul>
  </div>
</template>

<script>
import FooterLinkItem from '@/components/sections/footer/FooterLinkItem.vue'
export default {
  components: {
    FooterLinkItem,
  },
  props: {
    links: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>

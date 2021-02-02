<template>
  <client-only>
    <VideoHeader :header-data="headerData"> </VideoHeader>
  </client-only>
</template>

<script>
import VideoHeader from '@/components/header/VideoHeader.vue'
export default {
  components: {
    VideoHeader,
  },
  props: {
    headerData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>

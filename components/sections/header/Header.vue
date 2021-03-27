<template>
  <div class="header">
    <client-only>
      <VideoHeader :header-data="headerData"> </VideoHeader>
    </client-only>
  </div>
</template>

<script>
import VideoHeader from '@/components/sections/header/VideoHeader.vue'
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

<style lang="scss" scoped>
.header {
  margin-top: 3.75rem;
  min-height: 600px;
}
</style>

<template>
  <div>
    <VideoHeader :header-data="headerData"> </VideoHeader>
  </div>
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

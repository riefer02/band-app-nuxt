<template>
  <video-background
    :src="require(`@/assets/video/${videoSrc}`)"
    style="height: 600px"
  >
    <TextHeader :texts="texts" />
  </video-background>
</template>

<script>
import TextHeader from '@/components/header/TextHeader.vue'

export default {
  name: 'VideoHeader',
  components: {
    TextHeader,
  },
  props: {
    headerData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    videoSrc() {
      return this.headerData.headerVideo
    },
    texts() {
      return this.headerData.headerText
    },
  },
}
</script>

<style></style>

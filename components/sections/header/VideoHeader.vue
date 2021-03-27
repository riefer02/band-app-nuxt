<template>
  <div class="video__wrapper">
    <video-background
      :src="require(`@/assets/video/${videoSrc}`)"
      style="height: 600px"
      class=""
    >
      <TextHeader :texts="texts" />
    </video-background>
  </div>
</template>

<script>
import TextHeader from '@/components/sections/header/TextHeader.vue'

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

<style lang="scss"></style>

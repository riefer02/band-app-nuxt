<template>
  <div>
    <div v-if="loading" class="bg-yellow-500 bg-opacity-25 h-screen">
      <TextHeader />
    </div>
    <video-background
      v-else
      :src="require('@/assets/video/Casa-Patron-Splash-1.mp4')"
      style="height: 100vh"
      overlay="linear-gradient(45deg,rgba(247, 238, 127, 0.15),rgba(241, 166, 106, 0.25))"
    >
      <TextHeader />
    </video-background>
  </div>
</template>

<script>
import TextHeader from '@/components/header/TextHeader.vue'
export default {
  name: 'VideoHeader',
  components: {
    TextHeader,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.loading = !this.loading
    })
  },
}
</script>

<style></style>

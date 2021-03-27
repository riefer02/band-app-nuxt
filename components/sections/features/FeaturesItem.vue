<template>
  <div class="relative">
    <h3 class="feature__title text-3xl">{{ feature.title }}</h3>
    <ParagraphText :text="feature.description" />
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
export default {
  components: {
    ParagraphText,
  },
  props: {
    feature: {
      type: Object,
      default: () => {
        return {
          title: 'Placeholder Title',
          description: 'Placeholder description',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.feature {
  &__title {
    position: absolute;
    opacity: 15%;
    top: -60px;
    font-size: 100px;
  }
}
</style>

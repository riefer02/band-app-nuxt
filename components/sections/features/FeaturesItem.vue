<template>
  <div>
    <h3>{{ feature.title }}</h3>
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

<style scoped></style>

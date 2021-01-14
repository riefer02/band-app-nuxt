<template>
  <ul class="flex flex-col">
    <li v-for="feature in features" :key="feature.title">
      <FeaturesItem :feature="feature" />
    </li>
  </ul>
</template>

<script>
import FeaturesItem from '@/components/features/FeaturesItem.vue'
export default {
  components: {
    FeaturesItem,
  },
  props: {
    features: {
      type: Array,
      default: () => {
        return [
          {
            title: 'Placeholder Title',
            description: 'Placeholder Description',
          },
        ]
      },
    },
  },
}
</script>

<style scoped></style>

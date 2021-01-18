<template>
  <!-- <div class="block">
        <SectionHeaderText text="Local Attractions" />
      </div> -->
  <div class="flex flex-col xl:flex-row justify-center align-middle">
    <EventsItem />
    <EventsItem />
    <EventsItem />
  </div>
</template>

<script>
import EventsItem from '@/components/events/EventsItem.vue'
// import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
export default {
  components: {
    // SectionHeaderText,
    EventsItem,
  },
}
</script>

<style lang="scss" scoped></style>

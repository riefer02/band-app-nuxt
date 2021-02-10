<template>
  <div class="my-16 px-4">
    <div
      class="flex flex-col md:flex-row bg-white text-black rounded-lg shadow-lg"
    >
      <div class="block w-full px-3 py-3 md:w-2/3 md:order-1 xl:p-16">
        <div class="block">
          <SectionHeaderText text="Caracteristicas de Patron" />
        </div>
        <div class="block">
          <FeaturesList :features="features" />
        </div>
      </div>
      <div
        class="w-full bg-cover h-64 md:h-auto md:min-h-full md:w-1/3 order-1 rounded-b-lg rounded-t-none md:rounded-r-lg md:rounded-l-none flex-grow"
        style="background-image: url('https://unsplash.it/804/800')"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
import FeaturesList from '@/components/sections/features/FeaturesList.vue'
export default {
  components: {
    SectionHeaderText,
    FeaturesList,
  },
  data() {
    return {
      features: [
        {
          title: 'Accessibility',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Modular',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          title: 'Activities',
          description:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>

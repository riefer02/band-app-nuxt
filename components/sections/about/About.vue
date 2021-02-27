<template>
  <div class="mt-12 mb-4 px-4">
    <div
      class="flex flex-col lg:flex-row bg-white text-black rounded-lg shadow-lg"
    >
      <div class="w-full lg:w-2/3 lg:order-2 p-4 xl:p-16">
        <div class="">
          <SectionHeaderText text="Your Favorite Band Period" />
        </div>
        <div class="">
          <ParagraphText :text="placeholderTextOne" />
          <ParagraphText :text="placeholderTextTwo" />
        </div>
        <div class="flex justify-center px-2 py-2">
          <Button text="Learn More" link="features" />
        </div>
      </div>
      <div
        class="w-full bg-cover h-64 lg:h-auto lg:min-h-full lg:w-1/3 order-1 rounded-b-lg rounded-t-none lg:rounded-l-lg lg:rounded-r-none flex-grow"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    SectionHeaderText,
    ParagraphText,
    Button,
  },
  data() {
    return {
      image: require('@/assets/images/andrew-1.jpg'),
      placeholderTextOne:
        'Your eyes are barely open, that was some rager of a party. You roll over, whoever you met last night is gone. The evening comes back in flashes: how many drinks did you end up downing, had you crowd surfed, and who was that band? The answer is stained on your hand in fat sharpie letters: "My favorite band in Austin".',
      placeholderTextTwo:
        "The Lewd Dudes are a 5 man rock n roll party from Austin, Texas and are a crowd-pleasing regular on stages across the Lone Star State. When they play it's hard to find an audience member without a smile on their face and a beer in their hand. In the wild party-like atmosphere of their shows, it might be easy to miss the punk rock Springsteen and Zappa blend of music and clever lyrics but they pull it off so well it can't be ignored. Now on their first full length and second release, the Lewd Dudes are broadening their musical horizons and dimming the lights, it's getting serious, but also funny, but also serious.",
    }
  },
}
</script>

<style lang="scss" scoped></style>

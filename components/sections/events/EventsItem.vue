<template>
  <div
    class="max-w-full xl:w-1/3 shadow-lg rounded overflow-hidden m-4 sm:flex xl:flex-col"
  >
    <div
      class="event__image sm:w-1/3 md:w-2/5 xl:w-full flex-none bg-cover bg-top rounded rounded-t sm:rounded sm:rounded-l sm:rounded-r-none md:rounded-r-none xl:rounded-b-none rounded-b-none text-center overflow-hidden shadow-lg"
      :style="{ backgroundImage: 'url(' + item.image + ')' }"
    ></div>
    <div
      class="flex flex-col justify-between px-6 py-4 xl:p-10 bg-white text-black shadow-lg overflow-hidden flex-grow"
    >
      <div class="relative">
        <h2 class="md:py-4 mb-2 text-3xl font-light">{{ item.title }}</h2>
        <font-awesome-icon
          :icon="['fa', item.icon]"
          class="event__item-icon fa-fw"
        />
        <ParagraphText :text="item.description" />
        <p class="mb-4 text-grey-dark text-sm"></p>
      </div>
      <div class="mx-auto">
        <Button text="Learn More" />
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphText from '@/components/typography/ParagraphText.vue'
import Button from '@/components/buttons/Button.vue'

export default {
  components: {
    Button,
    ParagraphText,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.event {
  &__image {
    height: 20rem;

    @include sm {
      height: 25rem;
    }

    @include lg {
      height: 20rem;
    }
  }

  &__item-icon {
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 100px;
    opacity: 10%;

    @include md {
      top: 0px;
      right: -10px;
    }

    @include lg {
      top: -20px;
      right: -25px;
    }
  }
}
</style>

<template>
  <div class="py-5 px-4">
    <div class="">
      <div class="block">
        <SectionHeaderText text="Local Attractions" />
      </div>
      <div class="flex flex-col md:flex-row justify-center">
        <div
          class="max-w-full shadow-lg rounded overflow-hidden m-4 sm:flex md:flex-col"
        >
          <div
            class="h-48 sm:h-auto w-full sm:w-48 md:w-64 lg:w-full flex-none md:flex-1 bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
            style="background-image: url('https://unsplash.it/804/800')"
          ></div>
          <div
            class="px-6 py-4 bg-white text-black shadow-inner shadow-lg overflow-hidden"
          >
            <h2 class="mb-2 font-black">Snow Sports</h2>
            <p class="mb-4 text-grey-dark text-sm">
              Learning Tailwind is incredibly easy. The team has done a
              wonderful job with the documentation. This is pretty amazing, I
              must say.
            </p>
            <button
              class="py-3 px-4 bg-red-500 hover:bg-purple-light text-black font-bold rounded-full mt-1 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="max-w-full shadow-lg rounded overflow-hidden m-4 sm:flex">
          <div
            class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
            style="background-image: url('https://unsplash.it/804/800')"
          ></div>
          <div
            class="px-6 py-4 bg-white text-black shadow-inner shadow-lg overflow-hidden"
          >
            <h2 class="mb-2 font-black">Hello Tailwind!</h2>
            <p class="mb-4 text-grey-dark text-sm">
              Learning Tailwind is incredibly easy. The team has done a
              wonderful job with the documentation. This is pretty amazing, I
              must say.
            </p>
            <button
              class="py-3 px-4 bg-red-500 hover:bg-purple-light text-black font-bold rounded-full mt-1 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
          <div
            class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
            style="background-image: url('https://unsplash.it/804/800')"
          ></div>
          <div
            class="px-6 py-4 bg-white text-black shadow-inner shadow-lg overflow-hidden"
          >
            <h2 class="mb-2 font-black">Hello Tailwind!</h2>
            <p class="mb-4 text-grey-dark text-sm">
              Learning Tailwind is incredibly easy. The team has done a
              wonderful job with the documentation. This is pretty amazing, I
              must say.
            </p>
            <button
              class="py-3 px-4 bg-red-500 hover:bg-purple-light text-black font-bold rounded-full mt-1 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeaderText from '@/components/typography/SectionHeaderText.vue'
export default {
  components: {
    SectionHeaderText,
  },
}
</script>

<style lang="scss" scoped></style>

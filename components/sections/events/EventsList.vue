<template>
  <div class="flex flex-col xl:flex-row justify-center align-middle">
    <EventsItem v-for="item in items" :key="item.title" :item="item" />
  </div>
</template>

<script>
import EventsItem from '@/components/sections/events/EventsItem.vue'
export default {
  components: {
    EventsItem,
  },
  data() {
    return {
      items: [
        {
          image: require('@/assets/images/rankin-1.jpg'),
          title: 'Music',
          icon: 'music',
          description:
            'Since 1963, the resort has been owned and operated by the Mescalero Apache Tribe. Only two years after its official opening in 1961. Only two years after its official opening in 1961',
          link:
            'https://www.skiapache.com/?gclid=CjwKCAiAo5qABhBdEiwAOtGmbjBrd3kp9oc2P8BtUTFIlwhJvQiAMkdq79dcXMxhcUE2N_O6uy0U7RoCyBgQAvD_BwE',
        },
        {
          image: require('@/assets/images/riley-1.jpg'),
          title: 'Videos',
          icon: 'video',
          description:
            'Midtown is a uniquely Ruidoso experience filled with shopping and entertainment. Here you will find colorful and exciting shops. Only two years after its official opening in 1961',
          link: 'https://www.ruidoso.net/listing/detail/284',
        },
        {
          image: require('@/assets/images/scott-1.jpg'),
          title: 'Biography',
          icon: 'book',
          description:
            "New Mexico's premier mountain resort awaits with impeccable service, mouthwatering cuisine for every palate, incredible gaming. Only two years after its official opening in 1961",
          link: 'https://innofthemountaingods.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

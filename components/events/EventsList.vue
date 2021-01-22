<template>
  <div
    id="events"
    class="flex flex-col xl:flex-row justify-center align-middle"
  >
    <EventsItem v-for="item in items" :key="item.title" :item="item" />
  </div>
</template>

<script>
import EventsItem from '@/components/events/EventsItem.vue'
export default {
  components: {
    EventsItem,
  },
  data() {
    return {
      items: [
        {
          image: require('@/assets/images/ski-apache.jpg'),
          title: 'Ski Apache',
          description:
            'Since 1963, the resort has been owned and operated by the Mescalero Apache Tribe. Only two years after its official opening in 1961, Robert O. Anderson, the wealthy oilman who built and opened the slopes, sold the resort to the able hands of the Mescalero Apaches. It wasn’t until the 1984-85 season that the slopes were appropriately named “Ski Apache”.',
          link:
            'https://www.skiapache.com/?gclid=CjwKCAiAo5qABhBdEiwAOtGmbjBrd3kp9oc2P8BtUTFIlwhJvQiAMkdq79dcXMxhcUE2N_O6uy0U7RoCyBgQAvD_BwE',
        },
        {
          image: require('@/assets/images/midtown-ruidoso.jpg'),
          title: 'Midtown Ruidoso',
          description:
            'Midtown is a uniquely Ruidoso experience filled with shopping and entertainment. Here you will find colorful and exciting shops, wine tasting adventures, terrific local eateries, and nightlife including live music and dancing. During the holiday season, beautiful decorations twinkle brightly transforming the district into a vision reminiscent of a fairytale. Wandering through Midtown is a must-do on every Ruidoso vacation.',
          link: 'https://www.ruidoso.net/listing/detail/284',
        },
        {
          image: require('@/assets/images/inn-of-the-mountain-gods.jpg'),
          title: 'Inn of the Mountain Gods',
          description:
            "New Mexico's premier mountain resort awaits with impeccable service, mouthwatering cuisine for every palate, incredible gaming action, and breathtaking alpine scenery to nurture your soul. Situated high in the picturesque mountains of Mescalero, New Mexico just outside of Ruidoso, guests return time and time again to Inn of the Mountain Gods to enjoy the clean mountain air, stunning panoramic views, and exciting entertainment options.",
          link: 'https://innofthemountaingods.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>

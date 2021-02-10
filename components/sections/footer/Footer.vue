<template>
  <footer class="footer-1 bg-white py-8 sm:py-12 shadow-inner">
    <div class="container mx-auto px-4">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <FooterLinkList :links="linksGroupOne" />
        <FooterLinkList :links="linksGroupTwo" />
        <FooterLinkList :links="linksGroupThree" />
        <FooterLinkList :links="linksGroupFour" />

        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
            Stay connected
          </h5>
          <div class="flex sm:justify-center xl:justify-start">
            <a
              href=""
              class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href=""
              class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href=""
              class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
            >
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t"
      >
        <div class="sm:w-full px-4 md:w-1/6">
          <strong>FWR</strong>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Address</h6>
          <address class="not-italic mb-4 text-sm">
            420 69th St.<br />
            Austin, TX 78745
          </address>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Free Resources</h6>
          <p class="mb-4 text-sm">
            Use our HTML blocks for <strong>FREE</strong>.<br />
            <em>All are MIT License</em>
          </p>
        </div>
        <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <Button text="Return To Top" link="#" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLinkList from '@/components/sections/footer/FooterLinkList.vue'
import Button from '@/components/buttons/Button.vue'
export default {
  components: {
    FooterLinkList,
    Button,
  },
  data() {
    return {
      linksGroupOne: {
        title: 'Features',
        linksList: [
          {
            text: 'Cool Stuff',
            link: '#',
          },
          {
            text: 'Random Feature',
            link: '#',
          },
          {
            text: 'Team Feature',
            link: '#',
          },
          {
            text: 'Stuff for Developers',
            link: '#',
          },
          {
            text: 'Another One',
            link: '#',
          },
          {
            text: 'Last One',
            link: '#',
          },
        ],
      },
      linksGroupTwo: {
        title: 'Resources',
        linksList: [
          {
            text: 'Resource',
            link: '#',
          },
          {
            text: 'Resource Name',
            link: '#',
          },
          {
            text: 'Another Resource',
            link: '#',
          },
          {
            text: 'Final Resource',
            link: '#',
          },
        ],
      },
      linksGroupThree: {
        title: 'About',
        linksList: [
          {
            text: 'Team',
            link: '#',
          },
          {
            text: 'Locations',
            link: '#',
          },
          {
            text: 'Privacy',
            link: '#',
          },
          {
            text: 'Terms',
            link: '#',
          },
        ],
      },
      linksGroupFour: {
        title: 'Help',
        linksList: [
          {
            text: 'Support',
            link: '#',
          },
          {
            text: 'Help Center',
            link: '#',
          },
          {
            text: 'Contact Us',
            link: '#',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

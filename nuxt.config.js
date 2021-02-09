export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The Lewd Dudes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/base.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-video-background',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: [
        'faHome',
        'faListUl',
        'faCalendarAlt',
        'faBook',
        'faUsers',
        'faDollarSign',
        'faShoppingCart',
        'faMusic',
        'faVideo',
      ],
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAbS9VzLNeBTJVEMbf0vMLVxCFZ6YtLgVA',
          authDomain: 'tld-store-305b3.firebaseapp.com',
          projectId: 'tld-store-305b3',
          storageBucket: 'tld-store-305b3.appspot.com',
          messagingSenderId: '834303046213',
          appId: '1:834303046213:web:528bfe9b26c940c251a92c',
          measurementId: 'G-R9JBWCBH9B',
          databaseURL: 'https://tld-store-305b3.firebaseio.com',
        },
        services: {
          firestore: true,
          analytics: true,
        },
      },
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  router: {
    middleware: ['loading'],
  },
  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    settings: {
      // Firestore Settings - currently only works in SPA mode
    },
  },
}

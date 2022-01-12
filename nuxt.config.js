require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome маршруты',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Маршруты от Welcome центра БФУ им.Канта' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: '/icon.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: 'white',
    height: '5px'
  },

  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuesax'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', { fix: true }],
    '@nuxtjs/google-fonts',
    'nuxt-compress',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faVk', 'faInstagram', 'faTiktok']
    }
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    webp: {
      preset: 'default',
      quality: 75
    }
  },
  googleFonts: {
    prefetch: true,
    families: {
      OpenSans: [300, 400, 600]
    }
  },

  strapi: {
    url: process.env.API_URL + 'api' || 'http://localhost:1337',
    entities: ['guides']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/strapi'
  ],
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Welcome маршруты 💙',
      short_name: 'Welcome маршруты 💙',
      theme_color: '#00b4d8',
      description: 'Маршруты для самостоятельного исследования'
    },
    meta: {
      name: 'Welcome маршруты 💙',
      ogSiteName: 'Welcome маршруты 💙',
      ogDescription: 'Маршруты для самостоятельного исследования'
    },
    icon: {
      source: '@/static/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

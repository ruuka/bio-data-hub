export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bioinformatics-data-hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/plotly.client.js',
    '~/plugins/mijin.js',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-tags-input', ssr: false },
    { src: '~/plugins/v-click-outside', ssr: false },
    { src: '~/plugins/event-bus', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/layout_components'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
  ],
  vendor: ['@johmun/vue-tags-input'],

  tailwindcss: {
    // Options
  },

  /*
   ** Font Awesome Fonts to Include
   */
  fontawesome: {
    proIcons: {
      solid: [
        'faSearch',
        'faQuestionCircle',
        'faChartLine',
        'faUndo',
        'faPlus',
      ],
      regular: [
        'faHome',
        'faClinicMedical',
        // 'faFilterSlash',
        'faSearch',
        'faQuestionCircle',
        'faEnvelope',
        'faChartLine',
        'faUndo',
        'faAngleUp',
        'faAngleDown',
        'faAngleLeft',
        'faAngleRight',
        'faPlus',
        'faFilter',
        'faInfoCircle',
        'faExclamationCircle',
        'faTimesCircle',
        // 'faFilterSlash',
        'faTimes',
        'faGlobeAmericas',
        'faSave',
      ],
      duotone: ['faAngleDown'],
    },
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: {
        wght: [200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/proxy',
  ],

  proxy: {
    // Simple proxy
    '/api': 'http://localhost:8000',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
     baseURL: '/api/v1/',
    // baseURL: 'https://bioinformatics.gilead.com/api/v1/',
  },

  // axios: {
  //   baseURL: process.env.VUE_LOCAL_API_URL,
  //   browserBaseURL: process.env.VUE_APP_API_URL,
  // },
  // privateRuntimeConfig: {
  //   axios: {
  //     https: false,
  //     baseURL: process.env.VUE_LOCAL_API_URL,
  //   },
  // },

  googleAnalytics: {
    id: 'UA-113759967-2',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { analyze: false },
  serverMiddleware: [{ path: '/api', handler: '~/api/email.js' }],

  //EMAIL CONFIGS
  smtp: {
    from: 'blissful.skies@hotmail.com', //CHANGE THIS TO FROM EMAIL
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
      user: 'blissful.skies@hotmail.com',
      pass: '',
    },
  },
}

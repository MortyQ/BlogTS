const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'

export default {
  target: 'static',
  env: {
    strapiBaseUri,
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '@/plugins/vee-validator', ssr: false },
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '@/plugins/axios', ssr: false },
  ],
  modules: ['@nuxtjs/markdownit', '@nuxtjs/strapi'],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: 'authors',
        type: 'collection',
      },
      {
        name: 'categories',
        type: 'collection',
      },
      {
        name: 'homepage',
        type: 'single',
      },
      {
        name: 'global',
        type: 'single',
      },
    ],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {},
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
}

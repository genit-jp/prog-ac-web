import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '神戸の無料プログラミング学校＆学習コミュニティ|神戸プログラミングアカデミー',
    title: '神戸の無料プログラミング学校＆学習コミュニティ|神戸プログラミングアカデミー',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '「未経験から」「スキルアップ」「起業を目指す」無料で学べる神戸のプログラミング学校＆学習コミュニティ' },
      { property: 'og:title', content: '神戸の無料プログラミング学校＆学習コミュニティ|神戸プログラミングアカデミー' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.prog-ac.jp/' },
      { property: 'og:image', content: 'https://www.prog-ac.jp/images/ogp.jpg' },
      { property: 'og:site_name', content: '神戸プログラミングアカデミー' },
      { property: 'og:description', content: '神戸の無料プログラミング学校＆学習コミュニティ|神戸プログラミングアカデミー' },
      { property: 'fb', content: '2531878607078131' },
      { property: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-webfontloader'],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-91004466-11',
        debug: false
      }
    ]
  ],
  webfontloader: {
    google: {
      families: ['Noto+Serif+JP:400,500,700,900', 'Noto+Sans+JP:400,500,700,900']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

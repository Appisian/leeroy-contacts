require('dotenv').config();
const webpack = require('webpack');
const nib = require('nib');
const rupture = require('rupture');

module.exports = {
  mode: 'universal',
  head: {
    title: 'Leeroy | Contacts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Leeroy | Contacts',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'black',
    height: '5px',
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/styl/main.styl', lang: 'styl' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/webfontloader',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  serverMiddleware: [
    // API middleware
    // '~/server/index.js',
  ],
  stylus: [nib(), rupture()],
  build: {
    vendor: [],
    filenames: {
      app: () => '[name].[hash].js',
      chunk: () => '[name].[hash].js',
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      config.plugins.push(
        new webpack.LoaderOptionsPlugin({
          stylus: {
            default: {
              use: [nib(), rupture()],
              import: ['~assets/styl/core/index.styl'],
            },
          },
        }),
      );
    },
  },
  pwa: {
    manifest: {
      name: 'Leeroy | Contacts',
      short_name: 'Contacts',
      lang: 'fr',
      display: 'standalone',
    },
  },
};

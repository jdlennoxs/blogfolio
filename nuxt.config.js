import path from "path";
import Mode from "frontmatter-markdown-loader/mode";
/* eslint-disable */
const glob = require('glob');
const config = require("./content/data/config.json")
/* eslin-enable */
const dynamicRoutes = getDynamicPaths({
  '/posts': 'content/posts/*.md',
});

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
    lang: 'en',
  },
    title: config.title || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: config.description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#F8856E' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/reset.scss', '@/assets/styles/global.scss', '@/assets/styles/colors.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/prism'
  ],
  /*
   ** Nuxt.js build-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-155114575-1'
    }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Using frontmatter-markdown-loader here to parse md files
     */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: path.resolve(__dirname, "content/posts"),
          options: {
            mode: [Mode.HTML, Mode.META, Mode.BODY]
          }
        })
    },
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  generate: {
    routes: dynamicRoutes,
    fallback: true,
  }
}
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */

/* referenced https://github.com/jake-101/bael-template */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url];
      const routes = glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
        console.log(routes);
      return routes
    })
  );
}

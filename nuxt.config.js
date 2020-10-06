// src/nuxt.config.js
// ここから追加
const config = require("./.contentful.json");
const contentful = require("contentful");
// ここまで追加
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css" // ここを追加
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/font-awesome", ssr: false } // ここを追加
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",

    // ここから追加
    "@nuxtjs/markdownit",
    "nuxt-fontawesome"
    // ここまで追加
  ],

  // ここから追加
  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: false
  },
  // ここまで追加

  // ここから追加
  fontawesome: {
    component: "fa"
  },
  // ここまで追加

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

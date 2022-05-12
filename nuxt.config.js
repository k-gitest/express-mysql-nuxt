import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - myapp',
    title: 'myapp',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //'plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',  
    '@nuxtjs/auth'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loadingScreen: false,
  },
  
  //ユーザー認証のエンドポイント設定
  auth: {
    //認証後のリダイレクト先
    redirect: {
      home: '/dashboard', //ログイン後
      logout: '/login', //ログアウト後
    },
    strategies: {
      //$auth.loginWithでの引数に対応
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },
  
  //リクエスト送信用のサーバーURL
  axios: {
    //Originとはプロトコル、ホスト、ポート番号のセット 例）httpがプロトコル、localhostがホスト、3000がポート
    //オリジンが1つでも異なれば別オリジン
    //axiosはCORSの対象となるのでプロキシを利用する
    proxy: true,
    // proxyを使用する場合baseURLは併用できないためコメントアウト
    baseURL: process.env.API_BASE_URL,
    //baseURL: 'http://localhost:3000/',
    browserBaseURL: 'https://localhost-travel-visted-1.paiza-user-free.cloud:3000/',
    // baseURLとproxyを同時に使用することはできないためprefixを設定し、baseURLとして使用する
    //prefix: '/api',
  },
  
  //api用のサーバーミドルウェア設定
  serverMiddleware: [
    { path: '/api', handler: '~/server2/api' },
  ]
  
}

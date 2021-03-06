require('dotenv').config();

module.exports = {
    /*
    ** ENV
    */
    env: {
        PUBLICATION: process.env.PUBLICATION || 5
    },
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - UIHunt.com',
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/scss/app.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/components',
        '@/plugins/auth',
        '@/plugins/axios',
        '@/plugins/mixins',
        {src: '~/plugins/repository'},
        { src: '~plugins/ga.js', mode: 'client' }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        'nuxt-buefy',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        ['cookie-universal-nuxt', {alias: 'ck'}],
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.API_DOMAIN
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extractCSS: process.env.NODE_ENV === 'production',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        extend(config, ctx) {
        }
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    }
};

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    ssr: false,
    css: ['@/assets/styles.css'],

    modules: ['nuxt-icon', '@nuxtjs/tailwindcss' ],
    build: {
        transpile: [ 'troisjs', 'gsap']
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        PORT: process.env.PORT,
        // Keys within public are also exposed client-side
        public: { }
    },
    tailwindcss: {
        exposeConfig: true
    },
    buildConfig: {
        port: process.env.PORT
    }
})

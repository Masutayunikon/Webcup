// https://nuxt.com/docs/api/configuration/nuxt-config

// import dotenv;

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
        HOST: process.env.HOST,
        // Keys within public are also exposed client-side
        public: { }
    },
    buildConfig: {
        port: process.env.PORT,
        HOST: process.env.HOST,
    },
    tailwindcss: {
        exposeConfig: true,
    },
})

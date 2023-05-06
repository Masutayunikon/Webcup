// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    css: ['@/assets/styles.css'],
    modules: ['nuxt-icon', '@nuxtjs/tailwindcss' ],
    tailwindcss: {
        exposeConfig: true,
        // exposeLevel: 1,  // determines tree-shaking (optional)
    },
    build: {
        transpile: [ 'troisjs', 'gsap']
    }
})

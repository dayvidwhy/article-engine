// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "Article Engine",
            meta: [
                { name: "description", content: "Article Engine" }
            ]
        }
    },
    modules: [
        "@nuxt/ui",
        "@pinia/nuxt"
    ],
});

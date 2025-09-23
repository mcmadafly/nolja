// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/mdc', 'nuxt-auth-utils'],

    devtools: {
        enabled: true,
    },

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            script: [
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8833907708911160',
                    async: true,
                    defer: true,
                    crossorigin: 'anonymous',
                },
            ],
        },
    },

    mdc: {
        highlight: {
            // noApiRoute: true
            shikiEngine: 'javascript',
        },
    },

    experimental: {
        viewTransition: true,
    },

    compatibilityDate: '2024-07-11',

    nitro: {
        experimental: {
            openAPI: true,
        },
    },

    vite: {
        $server: {
            build: {
                rollupOptions: {
                    output: {
                        preserveModules: true,
                    },
                },
            },
        },
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs',
            },
        },
    },
});

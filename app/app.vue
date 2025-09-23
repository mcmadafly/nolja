<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';

const colorMode = useColorMode();

const color = computed(() => (colorMode.value === 'dark' ? '#1b1718' : 'white'));

useHead({
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'theme-color', name: 'theme-color', content: color },
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
        lang: 'en',
    },
});

const title = 'Nolja - The AI Gaming Companion and Community';
const description =
    'Nolja is your AI-powered gaming companion and community hub, offering personalized game recommendations, real-time news, and social features to enhance your gaming experience.';

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://ui4.nuxt.com/assets/templates/nuxt/chat-light.png',
    twitterImage: 'https://ui4.nuxt.com/assets/templates/nuxt/chat-light.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <Analytics />
    <UApp :toaster="{ position: 'top-right' }">
        <NuxtLoadingIndicator color="var(--ui-primary)" />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

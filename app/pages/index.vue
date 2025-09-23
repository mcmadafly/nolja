<script setup lang="ts">
import { Motion } from 'motion-v';

const input = ref('');
const loading = ref(false);

const { model } = useModels();

async function createChat(prompt: string) {
    input.value = prompt;
    loading.value = true;
    const chat = await $fetch('/api/chats', {
        method: 'POST',
        body: { input: prompt },
    });

    refreshNuxtData('chats');
    navigateTo(`/chat/${chat?.id}`);
}

function onSubmit() {
    createChat(input.value);
}

const quickChats = [
    {
        label: "What's the hottest new game?",
        icon: 'noto:fire',
    },
    {
        label: 'Recommend a game for me to play',
        icon: 'noto:joystick',
    },
    {
        label: 'What are the latest gaming news?',
        icon: 'noto:newspaper',
    },
    {
        label: 'Find me a gaming buddy',
        icon: 'noto:people-holding-hands',
    },
    {
        label: 'What are some upcoming game releases?',
        icon: 'noto:calendar',
    },
    {
        label: 'Suggest some fun multiplayer games',
        icon: 'noto:video-game',
    },
];
</script>

<template>
    <UDashboardPanel id="home" :ui="{ body: 'p-0 sm:p-0' }">
        <template #header>
            <DashboardNavbar />
        </template>

        <template #body>
            <UContainer class="flex-1 flex flex-col justify-center gap-4 sm:gap-6 py-8">
                <div class="flex flex-col items-center">
                    <!-- Animate ghost icon floating smoothly up and down -->
                    <UPopover mode="hover" :content="{ side: 'top', sideOffset: 8 }">
                        <div class="flex justify-center items-center gap-2">
                            <Motion
                                :animate="{ y: [-4, 4] }"
                                :transition="{
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 2,
                                    ease: 'easeInOut',
                                }"
                            >
                                <img
                                    src="/images/nolja-ghost.svg"
                                    alt="Nolja Ghost - Spooky"
                                    class="h-6 w-auto"
                                />
                            </Motion>

                            <!-- Wordmark on the right -->
                            <img
                                src="/images/nolja-logo.svg"
                                alt="Nolja Logo"
                                class="h-10 w-auto fill-white"
                                fill="#ffffff"
                            />
                            <!-- <UButton label="Open" color="neutral" variant="subtle" /> -->
                        </div>
                        <template #content>
                            <div class="max-w-xs p-2 text-sm text-center">
                                Nolja (놀자) means "let's play" in Korean.
                            </div>
                        </template>
                    </UPopover>
                </div>

                <UChatPrompt
                    placeholder="What game are you playing today? Let's play!"
                    v-model="input"
                    :status="loading ? 'streaming' : 'ready'"
                    :autofocus="false"
                    class="[view-transition-name:chat-prompt]"
                    variant="subtle"
                    @submit="onSubmit"
                >
                    <UChatPromptSubmit color="neutral" />

                    <!-- <template #footer>
                        <ModelSelect v-model="model" />
                    </template> -->
                </UChatPrompt>

                <div class="flex flex-wrap gap-2">
                    <UButton
                        v-for="quickChat in quickChats"
                        :key="quickChat.label"
                        :icon="quickChat.icon"
                        :label="quickChat.label"
                        size="sm"
                        color="neutral"
                        variant="outline"
                        class="rounded-full"
                        @click="createChat(quickChat.label)"
                    />
                </div>
            </UContainer>
        </template>
    </UDashboardPanel>
</template>

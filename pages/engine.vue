<script setup lang="ts">
const links: {
    label: string;
    icon: string;
    to: string;
}[] = [
    {
        label: "Blogs",
        icon: "i-heroicons-book-open",
        to: "/engine/blogs"
    },
    {
        label: "News",
        icon: "i-heroicons-globe-alt",
        to: "/engine/news"
    },
    {
        label: "Posts",
        icon: "i-heroicons-pencil",
        to: "/engine/posts"
    }
];
</script>

<template>
    <div class="flex">
        <div class="flex flex-col">
            <h1 class="text-2xl text-slate-700 pb-2">
                Engines
            </h1>
            <UVerticalNavigation
                class="w-36"
                :links="links"
            />
        </div>
        <div class="px-2 w-full">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
const links = [
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
    <div class="flex p-2">
        <UVerticalNavigation
            class="w-36"
            :links="links"
        />
        <div class="px-2 w-full">
            <NuxtPage />
        </div>
    </div>
</template>

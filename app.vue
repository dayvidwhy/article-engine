<script setup lang="ts">
const links = [
    {
        label: "Home",
        icon: "i-heroicons-home",
        to: "/"
    },
    {
        label: "Articles",
        to: "/articles"
    },
];
</script>

<template>
    <div>
        <UHorizontalNavigation
            :links="links"
            class="border-b border-gray-200 dark:border-gray-800"
        />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
const links = [
    {
        label: "Home",
        icon: "i-heroicons-home",
        to: "/"
    },
    {
        label: "Engine",
        icon: "i-heroicons-cube",
        to: "/engine"
    },
    {
        label: "Publishing",
        icon: "i-heroicons-newspaper",
        to: "/publishing"
    },
];
</script>

<template>
    <UHorizontalNavigation
        :links="links"
        class="border-b border-gray-200 dark:border-gray-800"
    />
</template>

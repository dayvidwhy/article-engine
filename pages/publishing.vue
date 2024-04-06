<script setup lang="ts">
const { data } = await useFetch<{
    articleList: {
        id: string;
        title: string;
    }[];
}>("/api/blog/get-all", {
    method: "GET"
});

const links = data.value?.articleList.map((article) => {
    return {
        label: article.title,
        to: `/publishing/${article.id}`,
        icon: "i-heroicons-newspaper"
    };
});

</script>
<template>
    <div class="flex">
        <div class="flex flex-col">
            <h1 class="text-2xl text-slate-700 pb-2">
                Content
            </h1>
            <UVerticalNavigation
                class="w-36"
                :links="links"
            />
        </div>
        <div class="px-2">
            <NuxtPage />
        </div>
    </div>
</template>

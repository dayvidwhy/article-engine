<script setup lang="ts">
const articleStore = useArticleStore();

const links = computed(() => {
    return articleStore.articles.map((article) => {
        return {
            label: article.title,
            to: `/articles/${article.id}`,
            icon: "i-heroicons-newspaper"
        };
    });
});

</script>
<template>
    <div>
        <h1>Articles:</h1>
        <div class="flex">
            <UVerticalNavigation
                class="w-36"
                :links="links"
            />
            <NuxtPage />
        </div>
    </div>
</template>

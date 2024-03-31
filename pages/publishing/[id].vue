<script setup lang="ts">
const route = useRoute();

const articleStore = useArticleStore();
const article = computed(() => {
    return articleStore.articles.find((article) => article.id === route.params.id);
});
</script>

<template>
    <div class="pl-2">
        <p>{{ article?.title }}</p>
        <p>{{ article?.content }}</p>
    </div>
</template>

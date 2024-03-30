<script setup lang="ts">
const route = useRoute();
const articleStore = useArticleStore();
console.log(route.params.id);
const article = computed(() => {
    return articleStore.articles.find((article) => article.id === route.params.id);
});
</script>

<template>
    <div>
        <p>{{ article?.title }}</p>
        <p>{{ article?.content }}</p>
    </div>
</template>

<script setup lang="ts">
const articleStore = useArticleStore();

</script>
<template>
    <div>
        <h1>Articles:</h1>
        <ul>
            <li
                v-for="article in articleStore.articles"
                :key="article.id"
            >
                <nuxt-link :to="`/articles/${article.id}`">
                    {{ article.title }}
                </nuxt-link>
            </li>
        </ul>
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

interface ArticleData {
    title: string;
    description: string;
    content: string;
}

const { data } = await useFetch<ArticleData>("/api/blog/get", {
    method: "GET",
    query: {
        id: route.params.id
    }
});

</script>

<template>
    <div class="pl-2">
        <p>{{ data?.title }}</p>
        <p>{{ data?.content }}</p>
    </div>
</template>

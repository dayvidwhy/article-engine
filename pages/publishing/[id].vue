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
        <h1>{{ data?.title }}</h1>
        <h3>{{ data?.description }}</h3>
        <p
            v-for="line in data?.content.split('\n')"
            :key="line"
            class="pb-2"
        >
            {{ line }}
        </p>
    </div>
</template>

<template>
  <div class="p-4">
    <h1 class="font-bold mb-8">Articles</h1>
    <template v-for="article in articles">
        <p class="font-bold">{{ article.title }}</p>
        <div class="max-w-[50ch]" v-html="article.description"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
const { fetchDocs } = useApi()

const { data } = await useAsyncData('articles', () => fetchDocs('articles'))

const articles = computed(() => (data.value as { docs: { id: string; title: string; description: string }[] })?.docs ?? [])
console.log('articles:', articles.value)
</script>

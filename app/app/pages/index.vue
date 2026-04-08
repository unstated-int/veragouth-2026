<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { fetchDocs } = useApi()

const { data } = await useAsyncData('articles', () => fetchDocs('articles'))

const articles = computed(() => (data.value as { docs: { id: string; title: string }[] })?.docs ?? [])
console.log('articles:', articles.value)
</script>

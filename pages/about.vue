<template>
<Hero />
<HomeAbout />
<Blog :articles="articles" />
<AboutClients />
<SatisfyClients />
</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const { data: color } = ref('white')
const { data: articles } = await useAsyncData('articles-list', () => queryContent('articles')
  .only([
    "title",
    "description",
    "link",
    "coverimage",
    "author",
    "date",
    "_path",
    "tags",
    "type",
  ])
  .find())
</script>

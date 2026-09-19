<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import BmHome from './components/BmHome.vue'
import BmGuide from './components/BmGuide.vue'
import BmArticle from './components/BmArticle.vue'

const { frontmatter } = useData()
const DefaultLayout = DefaultTheme.Layout
</script>

<template>
  <BmHome v-if="frontmatter.layout === 'bm-home'" />
  <BmGuide v-else-if="frontmatter.layout === 'bm-guide'" />
  <BmArticle v-else-if="frontmatter.layout === 'bm-article'" />
  <DefaultLayout v-else />
</template>

<script setup>
import { computed } from "vue";
import { Content, useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter } = useData();
const prev = computed(() => frontmatter.value.prev);
const next = computed(() => frontmatter.value.next);

const navLinks = [
  { text: "主页", href: "/bm/" },
  { text: "教程列表", href: "/bm/guide/" },
  { text: "快捷键", href: "/bm/#shortcuts" },
  {
    text: "源码",
    href: "https://github.com/bedrock-dev/BedrockMap",
    external: true,
  },
];
</script>

<template>
  <div class="bm">
    <BmNav :links="navLinks" />

    <article class="bm-article">
      <a class="bm-back" href="/bm/guide/">← 返回教程列表</a>
      <div class="vp-doc">
        <Content />
      </div>

      <nav class="bm-pager">
        <a v-if="prev" :href="prev.link">
          <span>上一篇</span>
          {{ prev.text }}
        </a>
        <a v-if="next" class="bm-next" :href="next.link">
          <span>下一篇</span>
          {{ next.text }}
        </a>
      </nav>
    </article>
  </div>
</template>

<style scoped>
.bm {
  --bm-max: 1120px;
  min-height: 100vh;
  background: var(--vp-c-bg);
}

.bm-article {
  max-width: 780px;
  margin: 0 auto;
  padding: 40px 24px 96px;
}

.bm-back {
  display: inline-block;
  margin-bottom: 26px;
  font-size: 13.5px;
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.2s;
}
.bm-back:hover {
  color: var(--vp-c-brand-1);
}

/* vp-doc 默认给 h1 加了上边框和超大字号，这里按文章页收一收 */
.bm-article :deep(.vp-doc h1) {
  margin: 0 0 8px;
  padding-top: 0;
  border-top: 0;
  font-size: clamp(26px, 4vw, 34px);
  letter-spacing: -0.02em;
}

.bm-pager {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
.bm-pager a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition:
    border-color 0.2s,
    color 0.2s;
}
.bm-pager a:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.bm-pager span {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}
.bm-next {
  margin-left: auto;
  text-align: right;
}

@media (max-width: 640px) {
  .bm-article {
    padding: 28px 20px 72px;
  }
}
</style>

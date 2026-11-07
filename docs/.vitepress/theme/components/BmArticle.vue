<script setup>
import { computed } from "vue";
import { Content, useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter } = useData();
const prev = computed(() => frontmatter.value.prev);
const next = computed(() => frontmatter.value.next);

const navLinks = [
  { text: "主页", href: "/bm/" },
  { text: "平台", href: "/bm/#platforms" },
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
      <header class="bm-article-toolbar">
        <a class="bm-back" href="/bm/guide/">← 返回教程列表</a>
      </header>

      <div class="vp-doc">
        <Content />
      </div>

      <nav class="bm-pager" aria-label="Tutorial pagination">
        <a v-if="prev" :href="prev.link">
          <span>上一篇</span>
          <strong>{{ prev.text }}</strong>
        </a>
        <a v-if="next" class="bm-next" :href="next.link">
          <span>下一篇</span>
          <strong>{{ next.text }}</strong>
        </a>
      </nav>
    </article>
  </div>
</template>

<style scoped>
.bm-article {
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  padding: 42px 24px 104px;
}

.bm-article-toolbar {
  display: flex;
  align-items: center;
  margin: 0 0 42px 24px;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--bm-line);
  font-family: var(--vp-font-family-mono);
  font-size: 9.5px;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
}

.bm-back {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.bm-back:hover {
  color: var(--bm-accent-1);
}

.bm-article .vp-doc {
  margin-left: 24px;
}

.bm-article :deep(.vp-doc h1) {
  max-width: 760px;
  margin: 0 0 20px;
  padding: 0;
  border: 0;
  font-size: clamp(38px, 6vw, 58px);
  line-height: 1.06;
  font-weight: 710;
  letter-spacing: -0.055em;
}

.bm-article :deep(.vp-doc h2) {
  margin-top: 52px;
  padding-top: 18px;
  border-top: 1px solid var(--bm-line);
  font-size: 24px;
  letter-spacing: -0.025em;
}

.bm-article :deep(.vp-doc p),
.bm-article :deep(.vp-doc li) {
  font-size: 15px;
  line-height: 1.82;
}

.bm-article :deep(.vp-doc a) {
  color: var(--bm-accent-1);
  text-decoration-color: color-mix(
    in srgb,
    var(--bm-accent-1) 45%,
    transparent
  );
  text-underline-offset: 3px;
}

.bm-article :deep(.vp-doc img) {
  border: 1px solid var(--bm-line-strong);
}

.bm-pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 72px 0 0 24px;
  border-top: 1px solid var(--bm-line-strong);
}

.bm-pager a {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 9px;
  padding: 20px 18px 20px 0;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.18s ease;
}

.bm-pager a + a {
  padding-right: 0;
  padding-left: 18px;
  border-left: 1px solid var(--bm-line);
}

.bm-pager a:hover {
  color: var(--bm-accent-1);
}

.bm-pager span {
  font-family: var(--vp-font-family-mono);
  font-size: 8.5px;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
}

.bm-pager strong {
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bm-next {
  align-items: flex-end;
  text-align: right;
}

@media (max-width: 640px) {
  .bm-article {
    padding: 28px 20px 76px;
  }

  .bm-article-toolbar,
  .bm-article .vp-doc,
  .bm-pager {
    margin-left: 0;
  }

  .bm-pager {
    grid-template-columns: 1fr;
  }

  .bm-pager a + a {
    padding-left: 0;
    border-top: 1px solid var(--bm-line);
    border-left: 0;
  }

  .bm-next {
    align-items: flex-start;
    text-align: left;
  }
}
</style>

<script setup>
defineProps({
  links: { type: Array, default: () => [] },
  cta: { type: String, default: "下载" },
  langLink: { type: Object, default: null },
  home: { type: String, default: "/bm/" },
});

const downloadUrl = "https://github.com/bedrock-dev/BedrockMap/releases/latest";
</script>

<template>
  <header class="bm-nav">
    <a class="bm-brand" :href="home">
      <img src="/imgs/bm-logo.svg" alt="" width="26" height="26" />
      <span>BedrockMap</span>
    </a>
    <nav class="bm-nav-links">
      <a
        v-for="l in links"
        :key="l.text"
        :href="l.href"
        :target="l.external ? '_blank' : undefined"
        :rel="l.external ? 'noreferrer' : undefined"
        >{{ l.text }}</a
      >
      <a v-if="langLink" class="bm-lang" :href="langLink.href">{{
        langLink.text
      }}</a>
      <a
        class="bm-nav-cta"
        :href="downloadUrl"
        target="_blank"
        rel="noreferrer"
        >{{ cta }}</a
      >
    </nav>
  </header>
</template>

<style scoped>
.bm-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: var(--bm-max, 1120px);
  margin: 0 auto;
  padding: 14px 24px;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--vp-c-bg) 82%, transparent);
  border-bottom: 1px solid var(--vp-c-divider);
}
.bm-brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.bm-nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 14px;
}
.bm-nav-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}
.bm-nav-links a:hover {
  color: var(--vp-c-brand-1);
}
.bm-lang {
  padding: 5px 11px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 13px;
}
.bm-lang:hover {
  border-color: var(--vp-c-brand-1);
}
.bm-nav-cta {
  padding: 7px 16px;
  border-radius: 8px;
  font-weight: 600;
  color: var(--vp-c-white) !important;
  background: var(--vp-c-brand-1);
}
.bm-nav-cta:hover {
  background: var(--vp-c-brand-2);
}

@media (max-width: 640px) {
  .bm-nav-links {
    gap: 16px;
  }
}
</style>

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
    <a class="bm-brand" :href="home" aria-label="BedrockMap home">
      <img src="/imgs/bm-logo.svg" alt="" width="30" height="30" />
      <span class="bm-brand-type">
        <strong>BedrockMap</strong>
        <small>Windows / Android / Web</small>
      </span>
    </a>
    <nav class="bm-nav-links" aria-label="BedrockMap navigation">
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
        >{{ cta }} <span aria-hidden="true">↗</span></a
      >
    </nav>
  </header>
</template>

<style scoped>
.bm-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  max-width: calc(var(--bm-max, 1240px) + 48px);
  margin: 0 auto;
  padding: 12px 24px;
  border-bottom: 1px solid var(--bm-line);
  background: var(--vp-c-bg);
}

.bm-brand {
  display: flex;
  flex: none;
  align-items: center;
  gap: 10px;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.bm-brand img {
  display: block;
  width: 30px;
  height: 30px;
}

.bm-brand-type {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.bm-brand-type strong {
  font-size: 14px;
  font-weight: 680;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.bm-brand-type small {
  font-family: var(--vp-font-family-mono);
  font-size: 7.5px;
  line-height: 1.2;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.bm-nav-links {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(14px, 2vw, 24px);
  font-size: 12.5px;
}

.bm-nav-links a {
  flex: none;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.18s ease;
}

.bm-nav-links a:hover {
  color: var(--bm-accent-1);
}

.bm-lang {
  padding: 5px 0;
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  letter-spacing: 0.03em;
}

.bm-nav-cta {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 12px;
  padding: 7px 11px;
  color: #fff !important;
  background: var(--bm-accent-solid);
}

.bm-nav-cta:hover {
  color: #fff !important;
  background: color-mix(in srgb, var(--bm-accent-solid) 76%, #000);
}

@media (max-width: 720px) {
  .bm-nav {
    flex-wrap: wrap;
    gap: 10px;
    padding: 11px 20px 0;
  }

  .bm-nav-links {
    order: 2;
    width: calc(100% + 40px);
    justify-content: flex-start;
    gap: 20px;
    margin: 0 -20px;
    padding: 10px 20px;
    overflow-x: auto;
    border-top: 1px solid var(--bm-line);
    scrollbar-width: none;
  }

  .bm-nav-links::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 430px) {
  .bm-brand-type small {
    display: none;
  }
}
</style>

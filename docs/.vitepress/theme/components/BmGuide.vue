<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter } = useData();
const guides = computed(() => frontmatter.value.guides ?? []);

const navLinks = [
  { text: "主页", href: "/bm/" },
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

    <section class="bm-head">
      <p class="bm-badge">教程</p>
      <h1>使用教程</h1>
      <p class="bm-intro">{{ frontmatter.intro }}</p>
    </section>

    <section class="bm-cards">
      <ul>
        <li v-for="(g, i) in guides" :key="g.link">
          <a :href="g.link">
            <span class="bm-num">{{ String(i + 1).padStart(2, "0") }}</span>
            <h2>{{ g.title }}</h2>
            <p>{{ g.details }}</p>
            <span class="bm-more">阅读教程 →</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.bm {
  --bm-max: 1120px;
  min-height: 100vh;
  background: var(--vp-c-bg);
}

.bm-head {
  position: relative;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 64px 24px 8px;
  text-align: center;
}
.bm-head::before {
  content: "";
  position: absolute;
  inset: -120px 0 auto;
  height: 380px;
  pointer-events: none;
  background: radial-gradient(
    60% 100% at 50% 0%,
    color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent),
    transparent 70%
  );
}
.bm-badge {
  position: relative;
  display: inline-block;
  margin: 0 0 18px;
  padding: 5px 13px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 12.5px;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
.bm-head h1 {
  position: relative;
  margin: 0;
  font-size: clamp(30px, 5vw, 42px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--vp-c-text-1);
}
.bm-intro {
  position: relative;
  max-width: 620px;
  margin: 14px auto 0;
  font-size: 15.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.bm-cards {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 44px 24px 88px;
}
.bm-cards ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bm-cards a {
  position: relative;
  display: block;
  height: 100%;
  padding: 24px 24px 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition:
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}
.bm-cards a:hover {
  border-color: color-mix(
    in srgb,
    var(--vp-c-brand-1) 55%,
    var(--vp-c-divider)
  );
  transform: translateY(-2px);
  box-shadow: 0 18px 40px -28px rgba(0, 0, 0, 0.5);
}
.bm-num {
  display: block;
  margin-bottom: 14px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--vp-c-brand-1);
}
.bm-cards h2 {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}
.bm-cards p {
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.bm-more {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .bm-head {
    padding: 44px 20px 4px;
  }
  .bm-cards {
    padding: 32px 20px 64px;
  }
}
</style>

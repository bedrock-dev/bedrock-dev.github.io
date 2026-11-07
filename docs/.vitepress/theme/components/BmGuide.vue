<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter } = useData();
const guides = computed(() => frontmatter.value.guides ?? []);

const navLinks = [
  { text: "主页", href: "/bm/" },
  { text: "平台", href: "/bm/#platforms" },
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

    <main>
      <section class="bm-guide-hero">
        <div>
          <p class="bm-kicker">BedrockMap guide</p>
          <h1>使用教程</h1>
        </div>
        <div class="bm-guide-intro">
          <p>{{ frontmatter.intro }}</p>
        </div>
      </section>

      <section class="bm-guide-index">
        <ol>
          <li v-for="(g, i) in guides" :key="g.link">
            <a :href="g.link">
              <span class="bm-index-num">{{ String(i + 1).padStart(2, "0") }}</span>
              <span class="bm-index-content">
                <strong>{{ g.title }}</strong>
                <span>{{ g.details }}</span>
              </span>
              <span class="bm-index-more">阅读 <i aria-hidden="true">→</i></span>
            </a>
          </li>
        </ol>
      </section>
    </main>

    <footer class="bm-guide-footer">
      <a href="/bm/">← 返回 BedrockMap</a>
      <span>BEDROCKMAP / DOCUMENTATION</span>
    </footer>
  </div>
</template>

<style scoped>
.bm-guide-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 72px;
  align-items: end;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 96px 24px 72px;
  border-bottom: 1px solid var(--bm-line);
}

.bm-guide-hero h1 {
  margin: 24px 0 0;
  font-size: clamp(54px, 8vw, 94px);
  font-weight: 730;
  line-height: 0.95;
  letter-spacing: -0.065em;
  color: var(--vp-c-text-1);
}

.bm-guide-intro p {
  max-width: 560px;
  margin: 0;
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.bm-guide-index {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 40px 24px 104px;
}

.bm-guide-index ol {
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--bm-line-strong);
  list-style: none;
}

.bm-guide-index li {
  border-bottom: 1px solid var(--bm-line);
}

.bm-guide-index a {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 90px;
  gap: 24px;
  align-items: center;
  padding: 28px 8px 28px 0;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.bm-guide-index a:hover {
  color: var(--bm-accent-1);
}

.bm-index-num {
  align-self: start;
  padding-top: 3px;
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--bm-accent-1);
}

.bm-index-content {
  display: grid;
  grid-template-columns: minmax(170px, 0.34fr) minmax(0, 0.66fr);
  gap: 34px;
  align-items: start;
}

.bm-index-content strong {
  font-size: clamp(19px, 2.2vw, 25px);
  font-weight: 620;
  line-height: 1.35;
  letter-spacing: -0.025em;
}

.bm-index-content > span {
  max-width: 620px;
  font-size: 14px;
  line-height: 1.72;
  color: var(--vp-c-text-2);
}

.bm-index-more {
  justify-self: end;
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}

.bm-index-more i {
  display: inline-block;
  margin-left: 5px;
  font-style: normal;
  transition: transform 0.2s ease;
}

.bm-guide-index a:hover .bm-index-more {
  color: var(--bm-accent-1);
}

.bm-guide-index a:hover .bm-index-more i {
  transform: translateX(4px);
}

.bm-guide-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 28px 24px 36px;
  border-top: 1px solid var(--bm-line);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}

.bm-guide-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.bm-guide-footer a:hover {
  color: var(--bm-accent-1);
}

@media (max-width: 760px) {
  .bm-guide-hero {
    grid-template-columns: 1fr;
    gap: 38px;
    padding: 66px 20px 52px;
  }

  .bm-guide-index {
    padding: 32px 20px 76px;
  }

  .bm-guide-index a {
    grid-template-columns: 38px minmax(0, 1fr) 22px;
    gap: 12px;
    padding: 22px 0;
  }

  .bm-index-content {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .bm-index-more {
    width: 22px;
    overflow: hidden;
    font-size: 0;
    white-space: nowrap;
  }

  .bm-index-more i {
    margin-left: 0;
    font-size: 11px;
  }

  .bm-guide-footer {
    align-items: flex-start;
    flex-direction: column;
    padding: 24px 20px 32px;
  }
}
</style>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter, localeIndex } = useData();

const isEn = computed(() => localeIndex.value !== "root");

const t = computed(() =>
  isEn.value
    ? {
        features: "Features",
        shortcuts: "Key shortcuts",
        shortcutsSub:
          "Once a world is open, drag the world folder or a save file onto the window to begin.",
        mouse: "Mouse",
        keyboard: "Keyboard",
        download: "Download latest",
        source: "View source",
        feedback: "Report an issue",
        cta: "Download",
        lang: "中文",
        langHref: "/bm/",
        home: "/en/bm/",
        badge: "Open source · AGPL-3.0 · Windows 10",
      }
    : {
        features: "核心功能",
        shortcuts: "主要快捷键",
        shortcutsSub: "打开世界后，把世界文件夹或存档文件拖进窗口即可开始。",
        mouse: "鼠标操作",
        keyboard: "键盘快捷键",
        download: "下载最新版",
        source: "查看源码",
        feedback: "反馈问题",
        cta: "下载",
        lang: "English",
        langHref: "/en/bm/",
        home: "/bm/",
        badge: "开源 · AGPL-3.0 · Windows 10",
      },
);

const hero = computed(() => frontmatter.value.hero ?? {});
const features = computed(() => frontmatter.value.features ?? []);
const mouse = computed(() => frontmatter.value.mouse ?? []);
const shortcuts = computed(() => frontmatter.value.shortcuts ?? []);
const releases = "https://github.com/bedrock-dev/BedrockMap/releases";
const repo = "https://github.com/bedrock-dev/BedrockMap";

const slides = computed(() => {
  const list = frontmatter.value.screenshots;
  if (Array.isArray(list) && list.length) return list;
  return hero.value.screenshot ? [{ src: hero.value.screenshot }] : [];
});

const active = ref(0);
const interval = 6000;
let timer;

const go = (i) => {
  active.value = (i + slides.value.length) % slides.value.length;
};

const start = () => {
  if (slides.value.length > 1 && !timer)
    timer = setInterval(() => go(active.value + 1), interval);
};

const stop = () => {
  clearInterval(timer);
  timer = undefined;
};

onMounted(start);
onUnmounted(stop);

const navLinks = computed(() =>
  isEn.value
    ? [
        { text: "Shortcuts", href: "#shortcuts" },
        { text: "Source", href: repo, external: true },
      ]
    : [
        { text: "快捷键", href: "#shortcuts" },
        { text: "源码", href: repo, external: true },
      ],
);
</script>

<template>
  <div class="bm">
    <BmNav
      :links="navLinks"
      :cta="t.cta"
      :lang-link="{ text: t.lang, href: t.langHref }"
      :home="t.home"
    />

    <section class="bm-hero">
      <p class="bm-badge">{{ t.badge }}</p>
      <h1>{{ hero.name ?? "BedrockMap" }}</h1>
      <p class="bm-tagline">{{ hero.tagline }}</p>
      <p class="bm-desc">{{ hero.description }}</p>
      <div class="bm-actions">
        <a
          class="bm-btn bm-btn-primary"
          :href="hero.download ?? `${releases}/latest`"
          target="_blank"
          rel="noreferrer"
        >
          {{ t.download }}
        </a>
        <a
          class="bm-btn bm-btn-ghost"
          :href="repo"
          target="_blank"
          rel="noreferrer"
          >{{ t.source }}</a
        >
      </div>
      <p class="bm-note">{{ hero.note }}</p>
    </section>

    <section v-if="slides.length" class="bm-shot">
      <div class="bm-carousel" @mouseenter="stop" @mouseleave="start">
        <div
          class="bm-track"
          :style="{ transform: `translateX(-${active * 100}%)` }"
        >
          <figure v-for="(s, i) in slides" :key="s.src">
            <img
              :src="s.src"
              :alt="s.caption ?? `${hero.name ?? 'BedrockMap'} ${i + 1}`"
            />
            <figcaption v-if="s.caption">{{ s.caption }}</figcaption>
          </figure>
        </div>

        <template v-if="slides.length > 1">
          <button
            class="bm-arrow bm-prev"
            :aria-label="isEn ? 'Previous slide' : '上一张'"
            @click="go(active - 1)"
          >
            <span>‹</span>
          </button>
          <button
            class="bm-arrow bm-next"
            :aria-label="isEn ? 'Next slide' : '下一张'"
            @click="go(active + 1)"
          >
            <span>›</span>
          </button>
          <div class="bm-dots">
            <button
              v-for="(s, i) in slides"
              :key="i"
              :class="{ active: i === active }"
              :aria-label="isEn ? `Slide ${i + 1}` : `第 ${i + 1} 张`"
              @click="go(i)"
            />
          </div>
        </template>
      </div>
    </section>

    <section class="bm-features">
      <h2>{{ t.features }}</h2>
      <ul>
        <li v-for="f in features" :key="f.title">
          <h3>{{ f.title }}</h3>
          <p>{{ f.details }}</p>
        </li>
      </ul>
    </section>

    <section id="shortcuts" class="bm-shortcuts">
      <h2>{{ t.shortcuts }}</h2>
      <p class="bm-sub">{{ t.shortcutsSub }}</p>
      <div class="bm-tables">
        <div class="bm-table">
          <h3>{{ t.mouse }}</h3>
          <table>
            <tbody>
              <tr v-for="m in mouse" :key="m.keys">
                <th>{{ m.keys }}</th>
                <td>{{ m.action }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bm-table">
          <h3>{{ t.keyboard }}</h3>
          <table>
            <tbody>
              <tr v-for="s in shortcuts" :key="s.keys">
                <th>{{ s.keys }}</th>
                <td>{{ s.action }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="bm-cta">
      <h2>{{ hero.ctaTitle }}</h2>
      <p>{{ hero.ctaText }}</p>
      <div class="bm-actions">
        <a
          class="bm-btn bm-btn-primary"
          :href="hero.download ?? `${releases}/latest`"
          target="_blank"
          rel="noreferrer"
        >
          {{ t.download }}
        </a>
        <a
          class="bm-btn bm-btn-ghost"
          :href="`${repo}/issues`"
          target="_blank"
          rel="noreferrer"
          >{{ t.feedback }}</a
        >
      </div>
    </section>

    <footer class="bm-footer">
      <span>BedrockDev · BedrockMap</span>
      <nav>
        <a :href="repo" target="_blank" rel="noreferrer">GitHub</a>
        <a :href="`${releases}`" target="_blank" rel="noreferrer">Releases</a>
        <a :href="`${repo}/issues`" target="_blank" rel="noreferrer">Issues</a>
        <a :href="isEn ? '/en/' : '/'">{{
          isEn ? "BedrockDev home" : "BedrockDev 主页"
        }}</a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.bm {
  --bm-max: 1120px;
  min-height: 100vh;
  background: var(--vp-c-bg);
}

/* Hero */
.bm-hero {
  position: relative;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 84px 24px 64px;
  text-align: center;
}
.bm-hero::before {
  content: "";
  position: absolute;
  inset: -120px 0 auto;
  height: 460px;
  pointer-events: none;
  background: radial-gradient(
    60% 100% at 50% 0%,
    color-mix(in srgb, var(--vp-c-brand-1) 22%, transparent),
    transparent 70%
  );
}
.bm-badge {
  position: relative;
  display: inline-block;
  margin: 0 0 22px;
  padding: 5px 13px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
.bm-hero h1 {
  position: relative;
  margin: 0;
  font-size: clamp(40px, 7vw, 68px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.035em;
  background: linear-gradient(
    120deg,
    var(--vp-c-text-1) 30%,
    var(--vp-c-brand-1)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.bm-tagline {
  position: relative;
  margin: 18px 0 0;
  font-size: clamp(17px, 2.4vw, 21px);
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.bm-desc {
  position: relative;
  max-width: 620px;
  margin: 14px auto 0;
  font-size: 15.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

/* 按钮 */
.bm-actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 34px;
}
.bm-btn {
  padding: 12px 26px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.15s,
    box-shadow 0.2s,
    background 0.2s;
}
.bm-btn:hover {
  transform: translateY(-1px);
}
.bm-btn-primary {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-1);
  box-shadow: 0 6px 22px -8px var(--vp-c-brand-1);
}
.bm-btn-primary:hover {
  background: var(--vp-c-brand-2);
}
.bm-btn-ghost {
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.bm-btn-ghost:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.bm-note {
  position: relative;
  margin: 18px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

/* 截图轮播 */
.bm-shot {
  max-width: var(--bm-max);
  margin: 8px auto 0;
  padding: 0 24px;
}
.bm-carousel {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 30px 70px -30px rgba(0, 0, 0, 0.45);
}
.bm-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.bm-track figure {
  flex: 0 0 100%;
  margin: 0;
}
.bm-track img {
  display: block;
  width: 100%;
}
.bm-track figcaption {
  padding: 12px 20px;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}
.bm-arrow {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  font-size: 22px;
  line-height: 1;
  color: var(--vp-c-text-1);
  background: color-mix(in srgb, var(--vp-c-bg) 80%, transparent);
  backdrop-filter: blur(8px);
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.25s,
    background 0.2s,
    color 0.2s;
}
.bm-carousel:hover .bm-arrow,
.bm-arrow:focus-visible {
  opacity: 1;
}
.bm-arrow:hover {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}
.bm-arrow span {
  margin-top: -2px;
}
.bm-prev {
  left: 14px;
}
.bm-next {
  right: 14px;
}
.bm-dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  translate: -50% 0;
  display: flex;
  gap: 8px;
  padding: 7px 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-bg) 70%, transparent);
  backdrop-filter: blur(8px);
}
.bm-dots button {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  opacity: 0.5;
  cursor: pointer;
  transition:
    opacity 0.2s,
    width 0.25s,
    background 0.2s;
}
.bm-dots button.active {
  width: 20px;
  border-radius: 4px;
  opacity: 1;
  background: var(--vp-c-brand-1);
}

/* 特性 */
.bm-features {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 88px 24px 40px;
}
.bm-features h2,
.bm-cta h2 {
  margin: 0 0 8px;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--vp-c-text-1);
}
.bm-features ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 18px;
  margin: 34px 0 0;
  padding: 0;
  list-style: none;
}
.bm-features li {
  position: relative;
  padding: 22px 22px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.bm-features li:hover {
  border-color: color-mix(
    in srgb,
    var(--vp-c-brand-1) 55%,
    var(--vp-c-divider)
  );
  transform: translateY(-2px);
}
.bm-features li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 22px;
  width: 30px;
  height: 3px;
  border-radius: 0 0 3px 3px;
  background: var(--vp-c-brand-1);
}
.bm-features h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 650;
  color: var(--vp-c-text-1);
}
.bm-features p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* 快捷键 */
.bm-shortcuts {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 24px 24px 24px;
}
.bm-shortcuts h2 {
  margin: 0 0 8px;
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--vp-c-text-1);
}
.bm-sub {
  margin: 10px auto 34px;
  max-width: 560px;
  text-align: center;
  font-size: 15px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}
.bm-tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
}
.bm-table {
  padding: 6px 22px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.bm-table h3 {
  margin: 16px 0 10px;
  font-size: 14px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}
.bm-table table {
  width: 100%;
  border-collapse: collapse;
}
.bm-table tr + tr {
  border-top: 1px solid var(--vp-c-divider);
}
.bm-table th,
.bm-table td {
  padding: 10px 0;
  font-size: 14px;
  text-align: left;
  vertical-align: top;
}
.bm-table th {
  width: 46%;
  padding-right: 16px;
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  white-space: nowrap;
  color: var(--vp-c-text-1);
}
.bm-table td {
  color: var(--vp-c-text-2);
}

/* 结尾 CTA */
.bm-cta {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 56px 24px 88px;
  text-align: center;
}
.bm-cta p {
  max-width: 560px;
  margin: 10px auto 0;
  font-size: 15px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

/* 页脚 */
.bm-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 26px 24px 40px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 13.5px;
  color: var(--vp-c-text-3);
}
.bm-footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.bm-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.bm-footer a:hover {
  color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .bm-hero {
    padding: 56px 20px 44px;
  }
}
</style>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import BmNav from "./BmNav.vue";

const { frontmatter, localeIndex } = useData();

const isEn = computed(() => localeIndex.value !== "root");

const t = computed(() =>
  isEn.value
    ? {
        eyebrow: "Minecraft Bedrock / Cross-platform",
        desktop: "Windows desktop",
        desktopMeta: "Windows 10+",
        mobile: "Android",
        mobileMeta: "Android 9+",
        featuresKicker: "Capabilities",
        features: "Built for large worlds and parallel work",
        shortcutsKicker: "Controls",
        shortcuts: "Map and chunk controls",
        shortcutsSub:
          "Pointer, touch and keyboard controls for navigating the map, selecting chunks, opening files and editing worlds.",
        mouse: "Mouse",
        keyboard: "Keyboard",
        download: "Download latest",
        web: "Web version",
        source: "View source",
        feedback: "Report an issue",
        cta: "Download",
        lang: "中文",
        langHref: "/bm/",
        home: "/en/bm/",
        aboutKicker: "About",
        aboutLead: "BedrockMap is maintained by ",
        aboutMaintainer: "BedrockDev and BedrockMap contributors",
        aboutMiddle: ". The source is available on ",
        aboutSource: "GitHub",
        aboutLicenseLead:
          ", and the project is released as free and open source under ",
        aboutLicense: "AGPL-3.0",
        aboutTail: ".",
        disclaimerLabel: "Unofficial project",
        disclaimer:
          "BedrockMap is an independent third-party project. It is not affiliated with, authorized, sponsored, or endorsed by Mojang Studios, Microsoft, or the official Minecraft team. Minecraft and related names, trademarks, and assets belong to their respective owners.",
      }
    : {
        eyebrow: "Minecraft Bedrock / 跨平台",
        desktop: "Windows 桌面端",
        desktopMeta: "Windows 10+",
        mobile: "Android 移动端",
        mobileMeta: "Android 9+",
        featuresKicker: "核心能力",
        features: "为大型世界和多任务工作流构建",
        shortcutsKicker: "操作",
        shortcuts: "地图和区块操作",
        shortcutsSub:
          "浏览地图、选择区块、打开文件和执行编辑时常用的鼠标、触控与键盘操作。",
        mouse: "鼠标",
        keyboard: "键盘",
        download: "下载最新版",
        web: "网页版",
        source: "查看源码",
        feedback: "反馈问题",
        cta: "下载",
        lang: "English",
        langHref: "/en/bm/",
        home: "/bm/",
        aboutKicker: "关于",
        aboutLead: "BedrockMap 由 ",
        aboutMaintainer: "BedrockDev 与 BedrockMap 贡献者",
        aboutMiddle: "维护。源代码托管在 ",
        aboutSource: "GitHub",
        aboutLicenseLead: "，并基于 ",
        aboutLicense: "AGPL-3.0",
        aboutTail: " 许可证开源免费发布。",
        disclaimerLabel: "非官方声明",
        disclaimer:
          "BedrockMap 是独立的第三方项目，与 Mojang Studios、Microsoft 或 Minecraft 官方团队没有任何隶属、授权、赞助、合作或认可关系。Minecraft 及相关名称、商标和素材归其各自所有者所有。",
      },
);

const hero = computed(() => frontmatter.value.hero ?? {});
const features = computed(() => frontmatter.value.features ?? []);
const mouse = computed(() => frontmatter.value.mouse ?? []);
const shortcuts = computed(() => frontmatter.value.shortcuts ?? []);
const releases = "https://github.com/bedrock-dev/BedrockMap/releases";
const repo = "https://github.com/bedrock-dev/BedrockMap";
const organization = "https://github.com/bedrock-dev";
const license = `${repo}/blob/main/LICENSE`;

const platformShots = computed(() => {
  const list = frontmatter.value.screenshots;
  return {
    desktop:
      (Array.isArray(list) && list[0]) ||
      (hero.value.screenshot ? { src: hero.value.screenshot } : null),
    mobile:
      (Array.isArray(list) && list[1]) ||
      (hero.value.mobileScreenshot
        ? { src: hero.value.mobileScreenshot }
        : null),
  };
});

const navLinks = computed(() =>
  isEn.value
    ? [
        { text: "Platforms", href: "#platforms" },
        { text: "Capabilities", href: "#features" },
        { text: "Shortcuts", href: "#shortcuts" },
        { text: "About", href: "#about" },
        { text: "Source", href: repo, external: true },
      ]
    : [
        { text: "平台", href: "#platforms" },
        { text: "功能", href: "#features" },
        { text: "快捷键", href: "#shortcuts" },
        { text: "关于", href: "#about" },
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

    <main>
      <section class="bm-hero">
        <div class="bm-hero-copy">
          <p class="bm-kicker">{{ t.eyebrow }}</p>
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
              {{ t.download }} <span aria-hidden="true">↗</span>
            </a>
            <a
              class="bm-btn bm-btn-ghost"
              href="/bm/web/"
              target="_blank"
              rel="noopener noreferrer"
              >{{ t.web }}</a
            >
            <a
              class="bm-text-link"
              :href="repo"
              target="_blank"
              rel="noreferrer"
              >{{ t.source }} <span aria-hidden="true">↗</span></a
            >
          </div>
        </div>

        <div
          v-if="platformShots.desktop"
          id="platforms"
          class="bm-platform-showcase"
        >
          <figure class="bm-desktop-shot">
            <figcaption>
              <strong>{{ t.desktop }}</strong>
              <span>{{ t.desktopMeta }}</span>
            </figcaption>
            <img
              :src="platformShots.desktop.src"
              :alt="platformShots.desktop.caption ?? t.desktop"
            />
          </figure>

          <figure v-if="platformShots.mobile" class="bm-mobile-shot">
            <figcaption>
              <strong>{{ t.mobile }}</strong>
              <span>{{ t.mobileMeta }}</span>
            </figcaption>
            <img
              :src="platformShots.mobile.src"
              :alt="platformShots.mobile.caption ?? t.mobile"
            />
          </figure>
        </div>
      </section>

      <section id="features" class="bm-section bm-features">
        <header class="bm-section-head">
          <p class="bm-kicker">{{ t.featuresKicker }}</p>
          <h2>{{ t.features }}</h2>
        </header>
        <div class="bm-feature-list">
          <article v-for="f in features" :key="f.title" class="bm-feature">
            <h3>{{ f.title }}</h3>
            <p>{{ f.details }}</p>
          </article>
        </div>
      </section>

      <section id="shortcuts" class="bm-section bm-shortcuts">
        <header class="bm-section-head">
          <p class="bm-kicker">{{ t.shortcutsKicker }}</p>
          <h2>{{ t.shortcuts }}</h2>
          <p class="bm-sub">{{ t.shortcutsSub }}</p>
        </header>

        <div class="bm-input-panel">
          <div class="bm-input-grid">
            <section class="bm-input-group">
              <h3>{{ t.mouse }}</h3>
              <dl>
                <div v-for="m in mouse" :key="m.keys">
                  <dt>{{ m.keys }}</dt>
                  <dd>{{ m.action }}</dd>
                </div>
              </dl>
            </section>
            <section class="bm-input-group">
              <h3>{{ t.keyboard }}</h3>
              <dl>
                <div v-for="s in shortcuts" :key="s.keys">
                  <dt>{{ s.keys }}</dt>
                  <dd>{{ s.action }}</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section id="about" class="bm-about">
        <p class="bm-kicker">{{ t.aboutKicker }}</p>
        <p class="bm-about-text">
          {{ t.aboutLead }}
          <a :href="organization" target="_blank" rel="noreferrer">{{
            t.aboutMaintainer
          }}</a>{{ t.aboutMiddle }}
          <a :href="repo" target="_blank" rel="noreferrer">{{
            t.aboutSource
          }}</a>{{ t.aboutLicenseLead }}
          <a :href="license" target="_blank" rel="noreferrer">{{
            t.aboutLicense
          }}</a>{{ t.aboutTail }}
        </p>
      </section>

      <aside class="bm-disclaimer">
        <strong>{{ t.disclaimerLabel }}</strong>
        <p>{{ t.disclaimer }}</p>
      </aside>

      <section class="bm-download" :aria-label="isEn ? 'Download' : '下载'">
        <div class="bm-actions">
          <a
            class="bm-btn bm-btn-primary"
            :href="hero.download ?? `${releases}/latest`"
            target="_blank"
            rel="noreferrer"
          >
            {{ t.download }} <span aria-hidden="true">↗</span>
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
    </main>

    <footer class="bm-footer">
      <div class="bm-footer-brand">
        <img src="/imgs/bm-logo.svg" alt="" width="28" height="28" />
        <span>BedrockDev / BedrockMap</span>
      </div>
      <nav>
        <a :href="repo" target="_blank" rel="noreferrer">GitHub</a>
        <a :href="releases" target="_blank" rel="noreferrer">Releases</a>
        <a :href="`${repo}/issues`" target="_blank" rel="noreferrer">Issues</a>
        <a :href="isEn ? '/en/' : '/'">{{
          isEn ? "BedrockDev home" : "BedrockDev 主页"
        }}</a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.bm-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(500px, 1.18fr);
  gap: clamp(42px, 6vw, 88px);
  align-items: center;
  max-width: var(--bm-max);
  min-height: 610px;
  margin: 0 auto;
  padding: 74px 24px 72px;
}

.bm-hero-copy {
  padding-bottom: 4px;
}

.bm-hero h1 {
  max-width: 520px;
  margin: 20px 0 0;
  font-size: clamp(52px, 7vw, 86px);
  line-height: 0.98;
  font-weight: 700;
  letter-spacing: -0.055em;
  color: var(--vp-c-text-1);
}

.bm-tagline {
  max-width: 470px;
  margin: 26px 0 0;
  font-size: clamp(20px, 2.4vw, 28px);
  line-height: 1.35;
  font-weight: 560;
  letter-spacing: -0.025em;
  color: var(--vp-c-text-1);
}

.bm-desc {
  max-width: 520px;
  margin: 18px 0 0;
  font-size: 15px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.bm-hero .bm-actions {
  margin-top: 30px;
}

.bm-platform-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(112px, 20%, 145px);
  gap: clamp(14px, 2.4vw, 24px);
  align-items: end;
  min-width: 0;
  scroll-margin-top: 86px;
}

.bm-desktop-shot,
.bm-mobile-shot {
  min-width: 0;
  margin: 0;
}

.bm-platform-showcase figcaption {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 9px;
}

.bm-platform-showcase figcaption strong {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.bm-platform-showcase figcaption span {
  font-size: 11px;
  color: var(--vp-c-text-3);
}

.bm-platform-showcase img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--bm-line);
}

.bm-section {
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 112px 24px;
}

.bm-section-head {
  display: grid;
  grid-template-columns: minmax(150px, 0.36fr) minmax(0, 0.64fr);
  column-gap: 48px;
  align-items: start;
  margin-bottom: 44px;
}

.bm-section-head .bm-kicker {
  padding-top: 7px;
}

.bm-section-head h2 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(30px, 4.2vw, 50px);
  line-height: 1.08;
  font-weight: 680;
  letter-spacing: -0.045em;
  color: var(--vp-c-text-1);
}

.bm-feature-list {
  margin-left: calc(36% + 48px);
  border-top: 1px solid var(--bm-line);
}

.bm-feature {
  display: grid;
  grid-template-columns: minmax(150px, 0.38fr) minmax(0, 0.62fr);
  gap: 20px;
  align-items: start;
  padding: 24px 0 25px;
  border-bottom: 1px solid var(--bm-line);
}

.bm-feature h3 {
  margin: 0;
  font-size: 17px;
  line-height: 1.45;
  font-weight: 620;
  color: var(--vp-c-text-1);
}

.bm-feature p {
  margin: 0;
  font-size: 14px;
  line-height: 1.72;
  color: var(--vp-c-text-2);
}

.bm-shortcuts .bm-section-head {
  grid-template-columns: minmax(150px, 0.36fr) minmax(0, 0.64fr);
  margin-bottom: 34px;
}

.bm-shortcuts .bm-sub {
  grid-column: 2;
  max-width: 640px;
  margin: 18px 0 0;
  font-size: 14.5px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.bm-input-panel {
  margin-left: calc(36% + 48px);
  border-top: 1px solid var(--bm-line);
  border-bottom: 1px solid var(--bm-line);
}

.bm-input-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
}

.bm-input-group {
  min-width: 0;
  padding: 22px 24px 20px 0;
}

.bm-input-group + .bm-input-group {
  padding-right: 0;
  padding-left: 24px;
  border-left: 1px solid var(--bm-line);
}

.bm-input-group h3 {
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.bm-input-group dl {
  margin: 0;
}

.bm-input-group dl > div {
  display: grid;
  grid-template-columns: minmax(90px, 0.42fr) minmax(0, 0.58fr);
  gap: 14px;
  align-items: baseline;
  padding: 9px 0;
  border-top: 1px solid var(--bm-line);
}

.bm-input-group dt {
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 560;
  color: var(--vp-c-text-1);
}

.bm-input-group dd {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.bm-about {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 40px;
  align-items: start;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 0 24px 64px;
  scroll-margin-top: 86px;
}

.bm-about-text {
  max-width: 820px;
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}

.bm-about-text a {
  font-weight: 560;
  color: var(--bm-accent-1);
  text-decoration: none;
}

.bm-about-text a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.bm-disclaimer {
  max-width: calc(var(--bm-max) - 48px);
  margin: 0 auto;
  padding: 24px 0;
}

.bm-disclaimer strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--bm-accent-1);
}

.bm-disclaimer p {
  max-width: 960px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
}

.bm-download {
  display: flex;
  justify-content: center;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 64px 24px 80px;
}

.bm-download .bm-actions {
  justify-content: center;
  margin: 0;
}

.bm-download .bm-btn {
  min-height: 52px;
  min-width: 180px;
  padding: 12px 22px;
  font-size: 14px;
}

.bm-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  max-width: var(--bm-max);
  margin: 0 auto;
  padding: 28px 24px 36px;
  font-family: var(--vp-font-family-mono);
  font-size: 10.5px;
  letter-spacing: 0.035em;
  color: var(--vp-c-text-3);
}

.bm-footer-brand,
.bm-footer nav {
  display: flex;
  align-items: center;
}

.bm-footer-brand {
  gap: 9px;
}

.bm-footer nav {
  flex-wrap: wrap;
  gap: 20px;
}

.bm-footer a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.bm-footer a:hover {
  color: var(--bm-accent-1);
}

@media (max-width: 980px) {
  .bm-hero {
    grid-template-columns: 1fr;
    gap: 52px;
    min-height: 0;
    padding-top: 66px;
  }

  .bm-hero-copy {
    max-width: 680px;
  }

  .bm-platform-showcase {
    width: 100%;
    max-width: 780px;
    margin-left: auto;
  }

  .bm-section-head,
  .bm-shortcuts .bm-section-head {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .bm-section-head .bm-kicker {
    padding-top: 0;
  }

  .bm-shortcuts .bm-sub {
    grid-column: auto;
  }

  .bm-feature-list,
  .bm-input-panel {
    margin-left: 0;
  }
}

@media (max-width: 720px) {
  .bm-hero {
    padding: 48px 20px 58px;
  }

  .bm-hero h1 {
    font-size: clamp(48px, 15vw, 72px);
  }

  .bm-platform-showcase {
    grid-template-columns: minmax(0, 1fr) 112px;
    gap: 12px;
  }

  .bm-section {
    padding: 82px 20px;
  }

  .bm-feature {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .bm-input-grid {
    grid-template-columns: 1fr;
  }

  .bm-input-group,
  .bm-input-group + .bm-input-group {
    padding: 20px 0;
    border-top: 1px solid var(--bm-line);
    border-left: 0;
  }

  .bm-input-group dl > div {
    grid-template-columns: minmax(110px, 0.42fr) minmax(0, 0.58fr);
  }

  .bm-about {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 20px 52px;
  }

  .bm-disclaimer {
    max-width: calc(100% - 40px);
  }

  .bm-download {
    padding: 52px 20px 64px;
  }
}

@media (max-width: 480px) {
  .bm-platform-showcase {
    grid-template-columns: 1fr;
  }

  .bm-mobile-shot {
    width: min(148px, 58%);
    justify-self: end;
  }

  .bm-hero .bm-actions,
  .bm-download .bm-actions {
    align-items: stretch;
  }

  .bm-btn {
    flex: 1 1 100%;
    justify-content: space-between;
  }

  .bm-text-link {
    padding: 6px 0;
  }

  .bm-input-group dl > div {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .bm-footer {
    align-items: flex-start;
    flex-direction: column;
  }

}
</style>

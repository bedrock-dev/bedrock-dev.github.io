import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "BedrockDev",
  themeConfig: {
    sidebar: {
      "/tr/docs/":[
        {
         title: "基本介绍",
         collapsable: false,
          children:[
            "/tr/docs/1.intro",
            "/tr/docs/2.use",
            "/tr/docs/3.func",
            "/tr/docs/4.config",
          ]
        },
        {
    title: "高级功能",
         collapsable: false,
          children:[
            "/tr/docs/5.shortcuts",
            "/tr/docs/6.scripts",
            "/tr/docs/7.cache_data",
            "/tr/docs/8.dev",
            "/tr/docs/9.q&a",

          ]

        }
      ],

    
      // "/guide/": [
      //   {
      //     title: "Guide",
      //     collapsable: false,
      //     children: [
      //       {
      //         title: "Page",
      //         children: [
      //           "/guide/home",
      //           "/guide/api-page",
      //           "/guide/page-layout",
      //           "/guide/navbar",
      //           "/guide/sidebar",
      //           "/guide/dark-mode",
      //         ],
      //       },
      //       {
      //         title: "Modules",
      //         children: [
      //           "/guide/search",
      //           "/guide/global-components",
      //           "/guide/code-switcher",
      //           "/guide/status",
      //         ],
      //       },
      //       "/guide/configuration",
      //       "/guide/migration",
      //       "/guide/documenting",
      //     ],
      //   },
      //   {
      //     title: "Reference",
      //     collapsable: false,
      //     children: [
      //       [
      //         "https://vuepress.vuejs.org/theme/default-theme-config.html",
      //         "Default Theme Config",
      //       ],
      //     ],
      //   },
      // ],
    },
  },
}));

import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
   theme: "vt",
  title: "BedrockDev",
  themeConfig: {
    nav:[
      {
        text:"Trapdoor",
        link:"/tr/"
      },
      {
        text:"BedrockMap",
        link:"/bm/"
      },
      {
        text: "文章",
        link: "/docs/"
      }
    ],
    sidebar: {
      
      "/tr/":[
     
        {
         title: "基本使用",
         collapsable: false,
          children:[
            "/tr/",
            "/tr/use",
            "/tr/func",
            "/tr/config",
          ]
        },
        {
      title: "高级功能",
         collapsable: false,
          children:[
            "/tr/shortcuts",
            "/tr/scripts",
            "/tr/cache_data",
            "/tr/dev",
            "/tr/q&a",
          ]
        },
    {
          title: "外部链接",
          collapsable: false,
          children: [
            [
              "https://github.com/bedrock-dev/trapdoor-ll",
              "源码"
            ],
            [
              "/tr/download",
              "下载",
            ],
          ],
        },
        
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

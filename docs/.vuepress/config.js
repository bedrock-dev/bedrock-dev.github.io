module.exports = {
  base: "/tr-wiki/",
  theme: "vt",
  themeConfig: {
    locales: {
      "/": {
        sidebar: [ 
        "/1.intro",
        "/2.use",
        "/3.func",
        "/4.config",
        "/5.shortcuts",
        "/6.scripts",
        "/7.cache_data",
        "/8.dev",
        "/9.q&a"
      ],
      },
      "/en/": {
        sidebar: [
          "/en/intro",
          "/en/use",
          "/en/func",
          "/en/config",
          "/en/dev",
          "/en/q&a",
        ],
      },
    },
  },
  locales: {
    "/": {
      lang: "简体中文", // 将会被设置为 <html> 的 lang 属性
      title: "trapdoor-wiki",
      description: "trapdoor-wiki",
    },
    "/en/": {
      lang: "English",
      title: "trapdoor-wiki",
      description: "trapdoor-wiki",
    },
  },
};
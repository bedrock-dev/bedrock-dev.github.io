module.exports = {
  base: "/tr-wiki/",
  theme: "vt",
  themeConfig: {
    locales: {
      "/": {
        sidebar: [ 
        "/intro",
        "/use",
        "/func",
        "/config",
        "dev",
        "q&a"],
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
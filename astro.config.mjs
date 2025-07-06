// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        pt: {
          label: "Português",
          lang: "pt",
        },
      },
      favicon: "./src/assets/Botrading.png",
      title: "ScriptBot",
      logo: {
        src: "./src/assets/Botrading.png",
      },
      social: [
        {
          icon: "discord",
          label: "discord",
          href: "https://discord.botrading.net",
        },
      ],
      sidebar: [
        {
          label: "Indicators",
          autogenerate: { directory: "indicators" },
        },
        {
          label: "Constants",
          autogenerate: { directory: "constants" },
        },
        {
          label: "Fundamentals",
          autogenerate: { directory: "fundamentals" },
        },
        {
          label: "Variables",
          autogenerate: { directory: "variables" },
        },
        {
          label: "Functions",
          // autogenerate: { directory: "functions", collapsed: true },
          items: [
            "functions/functions",
            {
              label: "User Variables",
              collapsed: true,
              autogenerate: {
                directory: "functions/uservariables",
                collapsed: true,
              },
            },
            {
              label: "Candles",
              collapsed: true,
              autogenerate: {
                directory: "functions/candles",
                collapsed: true,
              },
            },
            {
              label: "Debugs",
              collapsed: true,
              autogenerate: {
                directory: "functions/debugs",
                collapsed: true,
              },
            },
            {
              label: "Indicators",
              collapsed: true,
              autogenerate: {
                directory: "functions/indicators",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Moldable Vars",
          autogenerate: { directory: "moldablevars" },
        },
      ],
      customCss: ["./src/styles/custom.css"],

      // Custom components
      components: {
        // Override the default `SocialIcons` component.
        FallbackContentNotice:
          "./src/components/override/FallbackContentNotice.astro",
      },
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@utils": path.resolve("./src/utils"),
      },
    },
  },
});

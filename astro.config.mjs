// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import starlightThemeRapide from "starlight-theme-rapide";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
   markdown: {
      rehypePlugins: [rehypeHeadingIds],
   },

   integrations: [
      starlight({
         plugins: [starlightThemeRapide()],
         defaultLocale: "root",
         locales: {
            root: {
               // label: "English",
               // lang: "en",
               label: "Português",
               lang: "pt",
            },
            // pt: {
            //    label: "Português",
            //    lang: "pt",
            //    dir: "ltr",
            // },
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
               label: "Placeholders",
               autogenerate: { directory: "placeholders" },
            },
            {
               label: "Fundamentals",
               autogenerate: { directory: "fundamentals" },
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
      react(),
   ],
   vite: {
      resolve: {
         alias: {
            "@src": path.resolve("./src"),
            "@components": path.resolve("./src/components"),
            "@utils": path.resolve("./src/utils"),
            "@interfaces": path.resolve("./src/interfaces"),
            "@data": path.resolve("./src/data"),
            "@enums": path.resolve("./src/enums"),
            "@services": path.resolve("./src/services"),
            "@models": path.resolve("./src/models"),
         },
      },
   },
});

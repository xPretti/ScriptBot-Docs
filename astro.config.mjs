import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkCustomHeaderId from "remark-custom-header-id";
import mermaid from "astro-mermaid";
import starlightImageZoom from "starlight-image-zoom";

import react from "@astrojs/react";

export default defineConfig({
   markdown: {
      rehypePlugins: [[rehypeHeadingIds, { headingIdCompat: true }]],
      remarkPlugins: [remarkCustomHeaderId],
   },

   integrations: [
      mermaid(),
      starlight({
         plugins: [starlightImageZoom()],
         defaultLocale: "root",
         locales: {
            root: {
               label: "Português",
               lang: "pt",
            },
         },
         favicon: "./favicon.ico",
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
               label: "Settings",
               autogenerate: { directory: "settings" },
               translations: {
                  pt: "Configurações",
               },
            },
            {
               label: "Conditions",
               autogenerate: { directory: "conditions" },
               translations: {
                  pt: "Condições",
               },
            },
            {
               label: "Fundamentals",
               autogenerate: { directory: "fundamentals" },
               translations: {
                  pt: "Fundamentos",
               },
            },
            {
               label: "Placeholders",
               autogenerate: { directory: "placeholders" },
               translations: {
                  pt: "Espaços reservados",
               },
            },
            {
               label: "Indicators",
               autogenerate: { directory: "indicators" },
               translations: {
                  pt: "Indicadores",
               },
            },
            {
               label: "Fragments",
               autogenerate: { directory: "fragments" },
               translations: {
                  pt: "Fragmentos",
               },
            },
         ],
         customCss: ["./src/styles/custom.css"],
      }),
      mdx({
         optimize: true,
      }),
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

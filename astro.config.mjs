import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkCustomHeaderId from "remark-custom-header-id";
import starlightImageZoom from "starlight-image-zoom";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightLlmsTxt from "starlight-llms-txt";

import react from "@astrojs/react";

export default defineConfig({
   markdown: {
      rehypePlugins: [[rehypeHeadingIds, { headingIdCompat: true }]],
      remarkPlugins: [remarkCustomHeaderId],
   },
   site: "https://sb.botrading.net/",
   integrations: [
      starlight({
         plugins: [
            starlightImageZoom(),
            starlightScrollToTop({
               position: "right",
               tooltipText: "Back to top",
               showTooltip: false,
               smoothScroll: true,
               threshold: 10,
               svgPath: "M12 5V19M7 10L12 5L17 10",
               svgStrokeWidth: 1,
               borderRadius: "50",
               showProgressRing: true,
               showOnHomepage: true,
            }),
            starlightLlmsTxt({
               projectName: "ScriptBot",
            }),
         ],
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
            dark: "./src/assets/ScriptBot.png",
            light: "./src/assets/ScriptBot.png",
         },
         social: [
            {
               icon: "discord",
               label: "discord",
               href: "https://discord.botrading.net",
            },
         ],
         sidebar: [
            { label: "Início", link: "/" },
            {
               label: "Settings",
               autogenerate: { directory: "settings" },
               translations: {
                  pt: "Configurações",
               },
            },
            {
               label: "Architecture",
               autogenerate: { directory: "architecture" },
               translations: {
                  pt: "Arquitetura",
               },
            },
            {
               label: "References",
               autogenerate: { directory: "references" },
               translations: {
                  pt: "Referências",
               },
            },
            {
               label: "Placeholders",
               autogenerate: { directory: "placeholders" },
               translations: {
                  pt: "Espaços reservados",
               },
            },
            // {
            //    label: "Resources",
            //    autogenerate: { directory: "resources" },
            //    translations: {
            //       pt: "Recursos",
            //    },
            // },
            {
               label: "Knowledge",
               autogenerate: { directory: "knowledge" },
               translations: {
                  pt: "Base de Conhecimento",
               },
            },
         ],
         customCss: ["./src/styles/custom.css"],
         components: {
            PageFrame: "./src/components/overrides/CustomPageFrame.astro",
            Header: "./src/components/overrides/CustomHeader.astro",
            ThemeSelect: "./src/components/overrides/ThemeSelect.astro",
            ContentPanel: "./src/components/overrides/ContentPanel.astro",
            PageTitle: "./src/components/overrides/PageTitle.astro",
            Head: "./src/components/overrides/Head.astro",
         },
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
            "@configs": path.resolve("./src/configs"),
         },
      },
   },
});

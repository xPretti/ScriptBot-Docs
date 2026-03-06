import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkCustomHeaderId from "remark-custom-header-id";
import starlightImageZoom from "starlight-image-zoom";
import rehypeMermaid from "rehype-mermaid";

import react from "@astrojs/react";

export default defineConfig({
   // site: "https://docs.botrading.net",
   // base: "/scriptbot",
   // base: "/a",

   markdown: {
      rehypePlugins: [
         [rehypeHeadingIds, { headingIdCompat: true }],
         [
            rehypeMermaid,
            {
               strategy: "inline-svg",
               mermaidConfig: {
                  theme: "base",
                  themeVariables: {
                     edgeLabelBackground: "#000000",
                     tertiaryColor: "#000000",
                     fontFamily: "sans-serif",
                  },
                  themeCSS: `
                           /* Aqui as variáveis funcionam perfeitamente! */
                           :root {
                              --mermaid-font-family: var(--sl-font-system) !important;
                           }

                           /* Estilização das Labels (o que você tinha antes) */
                           .labelBkg, .edgeLabel p { 
                              border-radius: 15px !important; 
                              padding: 2px 10px !important;
                              background-color: var(--my-color-mermaid-bg, #2d3436) !important;
                              color: var(--sl-color-white) !important;
                           }

                           /* Remove o fundo padrão chato do Mermaid */
                           .edgeLabel rect { 
                              fill: transparent !important; 
                              stroke: none !important; 
                           }

                           .edgePaths path {
                              stroke: var(--sl-color-white) !important;
                           }

                           .marker.marker {
                              fill: var(--sl-color-white) !important;
                              stroke: var(--sl-color-white) !important;
                           }

                           /* Aplica a fonte do Starlight globalmente no SVG */
                           text {
                              font-family: var(--sl-font-system) !important;
                           }

                           .label-container, 
                           .label-container path,
                           [id^="mermaid-"] .label-container {
                              fill: var(--my-color-mermaid-node-bg, #2d3436) !important;
                              background-color: var(--my-color-mermaid-bg, #2d3436) !important;
                              stroke: var(--sl-color-gray-5) !important; /* Cor da borda, se quiser mudar */
                           }

                           /* Se for um retângulo simples */
                           .node rect {
                              fill: var(--my-color-mermaid-node-bg, #2d3436) !important;
                           }
                           
                           .nodeLabel {
                              color: var(--sl-color-white) !important;
                           }

                           .text path {
                              fill: var(--sl-color-gray-5) !important;
                              stroke: var(--sl-color-gray-5) !important;
                           }
                           `,
                  flowchart: {
                     htmlLabels: true,
                     curve: "basis",
                  },
               },
            },
         ],
      ],
      remarkPlugins: [remarkCustomHeaderId],
   },

   integrations: [
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
            src: "./src/assets/ScriptBot.png",
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

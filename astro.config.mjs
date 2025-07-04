// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/public/favicon.ico",
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
          label: "Variables",
          autogenerate: { directory: "variables" },
        },
        {
          label: "Functions",
          items: [
            "functions/functions",
            {
              label: "Types",
              // collapsed: true,
              autogenerate: { directory: "functions/types" },
            },
          ],
        },
        {
          label: "Moldable Vars",
          autogenerate: { directory: "moldablevars" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
      },
    },
  },
});

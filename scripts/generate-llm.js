import fs from "fs-extra";
import { globSync } from "glob";
import { load } from "cheerio";
import TurndownService from "turndown";

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });

const files = globSync("dist/**/*.html");

const SITE = "https://sb.botrading.net";

function clean(md) {
   return (
      md
         // converter headers estilo markdown antigo
         .replace(/\n([^\n]+)\n[-=]{3,}/g, "\n## $1")

         // corrigir escapes
         .replace(/\\=/g, "=")
         .replace(/\\/g, "")

         // corrigir links relativos
         .replace(/\]\(\/(.*?)\)/g, `](${SITE}/$1)`)

         // normalizar pipes vazios
         .replace(/\|\s*\|\s*/g, "| |")

         // normalizar espaços em pipes
         .replace(/\s*\|\s*/g, " | ")

         // remover múltiplos espaços
         .replace(/[ ]{2,}/g, " ")

         // remover linhas vazias extras
         .replace(/\n{3,}/g, "\n\n")

         .trim()
   );
}

function convertTables($) {
   $("table").each((_, table) => {
      const lines = [];

      $(table)
         .find("tr")
         .each((_, tr) => {
            const cols = [];

            $(tr)
               .find("th, td")
               .each((_, td) => {
                  const text = $(td).text().trim().replace(/\s+/g, " ");
                  cols.push(text);
               });

            if (cols.length === 0) return;

            if (cols.length === 1) {
               lines.push(cols[0]);
            } else {
               lines.push(`${cols[0]} | ${cols[1]}`);
            }
         });

      const replacement = "<pre>" + lines.join("\n") + "</pre>";

      $(table).replaceWith(replacement);
   });
}

function init() {
   console.log("Generating LLM file...");

   if (!fs.existsSync("dist")) {
      console.error("Pasta 'dist' não encontrada. Por favor, execute 'npm run build' antes de gerar o LLM.");
      process.exit(1);
   }

   let output = "# Documentation\n";
   output += "> Documentation for LLMs\n\n";

   for (const file of files) {
      const html = fs.readFileSync(file, "utf8");

      const $ = load(html);

      $("script, style, nav, footer, aside").remove();

      convertTables($);

      const content = $(".sl-markdown-content").html() || $("article").html() || $("main").html();

      if (!content) continue;

      let md = turndown.turndown(content);

      md = clean(md);

      const title = $("title").text().replace(/\|.*/, "").trim();

      output += `\n\n---\n\n# ${title}\n\n${md}\n`;
   }

   fs.writeFileSync("dist/llms.txt", "\ufeff" + output, "utf8");
   fs.writeFileSync("dist/llms-full.txt", "\ufeff" + output, "utf8");

   console.log("LLM file generated");
}

init();

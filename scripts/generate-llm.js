import fs from "fs-extra";
import { globSync } from "glob";
import { load } from "cheerio";
import TurndownService from "turndown";
import path from "path";

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });
const SITE = "https://sb.botrading.net";
const DIST_PATH = "dist";
const DOCS_REL_PATH = "llms";
const BOM = "\ufeff";

function clean(md) {
   return md
      .replace(/\n([^\n]+)\n[-=]{3,}/g, "\n## $1")
      .replace(/\\=/g, "=")
      .replace(/\\/g, "")
      .replace(/\]\(\/([^\s)]+?)\/?\)/g, (match, p1) => {
         const cleanPath = p1.endsWith("/index") ? p1 : p1.replace(/\/$/, "");
         return `](${SITE}/${DOCS_REL_PATH}/${cleanPath}/index.md)`;
      })
      .replace(/\|\s*\|\s*/g, "| |")
      .replace(/\s*\|\s*/g, " | ")
      .replace(/[ ]{2,}/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
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
            lines.push(cols.length === 1 ? cols[0] : `${cols[0]} | ${cols[1]}`);
         });
      $(table).replaceWith("<pre>" + lines.join("\n") + "</pre>");
   });
}

function init() {
   console.log("Gerando documentação com padrão /index.md...");

   if (!fs.existsSync(DIST_PATH)) {
      console.error("Erro: Pasta 'dist' não encontrada.");
      process.exit(1);
   }

   fs.removeSync(path.join(DIST_PATH, DOCS_REL_PATH));

   const files = globSync(`${DIST_PATH}/**/*.html`);

   let fullOutput = "# Documentation\n> Full documentation for LLMs\n\n";
   let indexOutput = "# Botrading Documentation\n\n";
   indexOutput += `> Use [llms-full.txt](${SITE}/llms-full.txt) for the complete documentation.\n\n`;
   indexOutput += "## Documentation Pages\n\n";

   for (const file of files) {
      if (file.includes("404.html")) continue;

      const html = fs.readFileSync(file, "utf8");
      const $ = load(html);

      $("script, style, nav, footer, aside").remove();
      convertTables($);

      const content = $(".sl-markdown-content").html() || $("article").html() || $("main").html();
      if (!content) continue;

      let md = clean(turndown.turndown(content));
      const title = $("title").text().replace(/\|.*/, "").trim();

      let relativePath = path.relative(DIST_PATH, file).replace(".html", "");

      if (!relativePath.endsWith("index")) {
         relativePath = path.join(relativePath, "index");
      }

      const mdFilePath = path.join(DIST_PATH, DOCS_REL_PATH, `${relativePath}.md`);

      fs.outputFileSync(mdFilePath, BOM + `# ${title}\n\n${md}`, "utf8");

      fullOutput += `\n\n---\n\n# ${title}\n\n${md}\n`;

      const urlPath = relativePath.replace(/\\/g, "/");
      indexOutput += `- [${title}](${SITE}/${DOCS_REL_PATH}/${urlPath}.md)\n`;
   }

   fs.outputFileSync(path.join(DIST_PATH, "llms-full.txt"), BOM + fullOutput, "utf8");
   fs.outputFileSync(path.join(DIST_PATH, "llms.txt"), BOM + indexOutput, "utf8");

   console.log("Documentação gerada com sucesso!");
}

init();

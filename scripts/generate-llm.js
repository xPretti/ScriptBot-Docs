import fs from "fs-extra";
import { globSync } from "glob";
import { load } from "cheerio";
import TurndownService from "turndown";
import path from "path";

// --- Configurações ---
const CONFIG = {
   SITE: "https://sb.botrading.net",
   DIST_PATH: "dist",
   DOCS_REL_PATH: "llms",
   BOM: "\ufeff",
   TITLE: "ScriptBot",
   DESCRIPTION: "Full documentation of ScriptBot",
};

const TEMPLATES = {
   full: `# ${CONFIG.TITLE}\n> ${CONFIG.DESCRIPTION}\n\n`,
   index: `# ${CONFIG.TITLE}\n\n> Use [llms-full.txt](${CONFIG.SITE}/llms-full.txt) for the complete documentation.\n\n## Docs\n\n`,
};

const turndown = new TurndownService({
   headingStyle: "atx",
   codeBlockStyle: "fenced",
});

function clean(md) {
   return md
      .replace(/\n([^\n]+)\n[-=]{3,}/g, "\n## $1") // Converte underlines para H2
      .replace(/\\=/g, "=")
      .replace(/\\/g, "")
      .replace(/\]\(\/([^\s)]+?)\/?\)/g, (_, p1) => {
         const cleanPath = p1.endsWith("/index") ? p1 : p1.replace(/\/$/, "");
         return `](${CONFIG.SITE}/${CONFIG.DOCS_REL_PATH}/${cleanPath}/index.md)`;
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
                  cols.push($(td).text().trim().replace(/\s+/g, " "));
               });
            if (cols.length === 0) return;
            lines.push(cols.length === 1 ? cols[0] : cols.join(" | "));
         });
      $(table).replaceWith(`<pre>${lines.join("\n")}</pre>`);
   });
}

// --- Processo Principal ---

function init() {
   console.log(`Gerando documentação para LLMs em: ${CONFIG.DIST_PATH}`);

   if (!fs.existsSync(CONFIG.DIST_PATH)) {
      console.error("Erro: Pasta 'dist' não encontrada.");
      process.exit(1);
   }

   // Limpa a pasta de destino
   fs.removeSync(path.join(CONFIG.DIST_PATH, CONFIG.DOCS_REL_PATH));

   const files = globSync(`${CONFIG.DIST_PATH}/**/*.html`);
   let fullOutput = TEMPLATES.full;
   let indexOutput = TEMPLATES.index;

   for (const file of files) {
      if (file.includes("404.html")) continue;

      const html = fs.readFileSync(file, "utf8");
      const $ = load(html);

      // Cleanup HTML
      $("script, style, nav, footer, aside").remove();
      convertTables($);

      const content = $(".sl-markdown-content").html() || $("article").html() || $("main").html();
      if (!content) continue;

      const title = $("title").text().split("|")[0].trim();
      const mdContent = clean(turndown.turndown(content));

      // Gerencia caminhos
      let relativePath = path.relative(CONFIG.DIST_PATH, file).replace(".html", "");
      if (!relativePath.endsWith("index")) {
         relativePath = path.join(relativePath, "index");
      }

      const mdFilePath = path.join(CONFIG.DIST_PATH, CONFIG.DOCS_REL_PATH, `${relativePath}.md`);
      const urlPath = relativePath.replace(/\\/g, "/");

      // Arquivo Individual
      const finalMd = `${CONFIG.BOM}# ${title}\n\n${mdContent}`;
      fs.outputFileSync(mdFilePath, finalMd, "utf8");

      // Acumula para os índices
      fullOutput += `\n\n---\n\n# ${title}\n\n${mdContent}\n`;
      indexOutput += `- [${title}](${CONFIG.SITE}/${CONFIG.DOCS_REL_PATH}/${urlPath}.md)\n`;
   }

   // Grava arquivos finais
   fs.outputFileSync(path.join(CONFIG.DIST_PATH, "llms-full.txt"), CONFIG.BOM + fullOutput, "utf8");
   fs.outputFileSync(path.join(CONFIG.DIST_PATH, "llms.txt"), CONFIG.BOM + indexOutput, "utf8");

   console.log("Documentação gerada com sucesso!");
}

init();

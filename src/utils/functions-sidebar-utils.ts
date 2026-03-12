import { version } from "os";
import { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import { FUNCTION_MAPPING } from "@src/data/functions-data";

type TranslateFn = (key: string) => string;

export type FunctionPage = {
   label: string;
   link: string;
   category: ENUM_FUNCTION_CATEGORY_TYPE;
   description: string;
   version?: string;
};

export function getFunctionPages(path: string): FunctionPage[] {
   return Array.from(FUNCTION_MAPPING.entries()).flatMap(([categoryKey, functionsMap]) =>
      Array.from(functionsMap.values()).map((fn) => ({
         label: fn.name,
         link: `${path}${categoryKey}/${fn.name}`,
         category: fn.category,
         description: fn.description.simple,
         version: fn.version,
      })),
   );
}

export function buildFunctionsSidebar(pages: FunctionPage[], translation?: TranslateFn) {
   const translateCategory = (category: ENUM_FUNCTION_CATEGORY_TYPE) => {
      const key = `placeholder.function.${category}`;
      return translation ? translation(key) : key;
   };

   const categorizedPages = pages.reduce(
      (acc, page) => {
         const category = translateCategory(page.category);

         if (!acc[category]) acc[category] = [];

         acc[category].push({
            label: page.label,
            link: page.link,
            badge: page.version ? { text: `${page.version}+`, class: "sidebar-version-badge" } : undefined,
         });

         return acc;
      },
      {} as Record<string, { label: string; link: string; badge?: { text: string; class: string } }[]>,
   );

   const sidebarGroups = Object.entries(categorizedPages).map(([category, items]) => ({
      label: category,
      collapsed: false,
      items,
   }));

   return { sidebarGroups };
}

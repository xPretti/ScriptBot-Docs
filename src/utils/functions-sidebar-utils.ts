// src/utils/functions-sidebar.ts
import { FUNCTION_MAPPING } from "@src/data/functions-data";

export function buildFunctionsSidebar(path: string) {
   const pages = Array.from(FUNCTION_MAPPING.entries()).flatMap(
      ([categoryKey, functionsMap]) =>
         Array.from(functionsMap.values()).map((fn) => ({
            label: `${fn.name}`,
            link: `${path}${categoryKey}/${fn.name}`,
            category: fn.category.type,
            categoryLabel: fn.category.label,
            description: fn.description.complex,
         }))
   );

   const pagesWithCategory = pages.filter((p) => p.category);
   const pagesWithoutCategory = pages.filter((p) => !p.category);

   const categorizedPages: Record<string, { label: string; link: string }[]> =
      pagesWithCategory.reduce((acc, page) => {
         const category = page.categoryLabel!;
         if (!acc[category]) acc[category] = [];
         acc[category].push({
            label: page.label,
            link: page.link,
         });
         return acc;
      }, {} as Record<string, { label: string; link: string }[]>);

   const sidebarGroups = [
      ...Object.entries(categorizedPages).map(([category, items]) => ({
         label: category,
         collapsed: false,
         items,
      })),
      ...pagesWithoutCategory.map((p) => ({
         label: p.label,
         link: p.link,
      })),
   ];

   return { sidebarGroups, pages };
}

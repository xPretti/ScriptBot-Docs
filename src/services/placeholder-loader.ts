import { ENUM_PLACEHOLDER_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";
import type { PlaceholderType } from "@src/types/placeholder-type";

type PlaceholderMapping = Map<ENUM_PLACEHOLDER_CATEGORY_TYPE, Map<string, PlaceholderInterface>>;

const PLACEHOLDER_FILES = import.meta.glob<unknown>("/src/content/placeholders/**/*.json", {
   eager: true,
   import: "default",
});

export function loadPlaceholderMapping(type: PlaceholderType, locale = "pt-br"): PlaceholderMapping {
   const mapping: PlaceholderMapping = new Map();

   const basePath = `/src/content/placeholders/${locale}/${type.toUpperCase()}/`;

   for (const [filePath, data] of Object.entries(PLACEHOLDER_FILES)) {
      if (!filePath.startsWith(basePath)) {
         continue;
      }

      const placeholders = normalizePlaceholders(data);

      for (const placeholder of placeholders) {
         let category;
         try {
            category = normalizeCategory(placeholder.category);
         } catch (error) {
            console.error("Erro ao normalizar categoria:", error);
         }

         if (!category) {
            continue;
         }

         const normalizedPlaceholder: PlaceholderInterface = {
            ...placeholder,
            category,
         };

         let categoryMapping = mapping.get(category);

         if (!categoryMapping) {
            categoryMapping = new Map();
            mapping.set(category, categoryMapping);
         }

         if (categoryMapping.has(normalizedPlaceholder.name)) {
            throw new Error(`Placeholder duplicado: "${normalizedPlaceholder.name}" na categoria "${category}".`);
         }

         categoryMapping.set(normalizedPlaceholder.name, normalizedPlaceholder);
      }
   }

   return mapping;
}

function normalizePlaceholders(data: unknown): PlaceholderInterface[] {
   if (Array.isArray(data)) {
      return data as PlaceholderInterface[];
   }

   return [data as PlaceholderInterface];
}

function normalizeCategory(category: string): ENUM_PLACEHOLDER_CATEGORY_TYPE {
   const normalizedKey = category as keyof typeof ENUM_PLACEHOLDER_CATEGORY_TYPE;

   const value = ENUM_PLACEHOLDER_CATEGORY_TYPE[normalizedKey];

   if (!value) {
      throw new Error(`Categoria inválida: "${category}".`);
   }

   return value;
}

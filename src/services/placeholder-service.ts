import { DEFAULT_LOCALE } from "@src/configs/config";
import { ENUM_PLACEHOLDER_CATEGORY_TYPE } from "@src/enums/placeholders-enum";

import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

import type { PlaceholderType } from "@src/types/placeholder-type";

type PlaceholderMapping = Map<ENUM_PLACEHOLDER_CATEGORY_TYPE, Map<string, PlaceholderInterface>>;

const PLACEHOLDER_FILES = import.meta.glob<unknown>("/src/content/placeholders/**/*.json", {
   eager: true,
   import: "default",
});

export const PlaceholderDocs = {
   load(type: PlaceholderType, locale: string): PlaceholderMapping {
      const mapping: PlaceholderMapping = new Map();

      this.loadLocale(mapping, type, locale);

      return mapping;
   },

   loadFallback(type: PlaceholderType, locale: string): PlaceholderMapping {
      const mapping: PlaceholderMapping = new Map();

      this.loadLocale(mapping, type, DEFAULT_LOCALE);

      if (locale !== DEFAULT_LOCALE) {
         this.loadLocale(mapping, type, locale, true);
      }

      return mapping;
   },

   loadLocale(mapping: PlaceholderMapping, type: PlaceholderType, locale: string, allowOverride = false): void {
      const basePath = this.buildBasePath(type, locale);

      for (const [filePath, data] of Object.entries(PLACEHOLDER_FILES)) {
         if (!filePath.startsWith(basePath)) {
            continue;
         }

         const placeholders = this.normalizePlaceholders(data);

         for (const placeholder of placeholders) {
            this.addToMapping(mapping, placeholder, allowOverride);
         }
      }
   },

   buildBasePath(type: PlaceholderType, locale: string): string {
      return `/src/content/placeholders/${locale}/${type.toUpperCase()}/`;
   },

   normalizePlaceholders(data: unknown): PlaceholderInterface[] {
      return Array.isArray(data) ? (data as PlaceholderInterface[]) : [data as PlaceholderInterface];
   },

   addToMapping(mapping: PlaceholderMapping, placeholder: PlaceholderInterface, allowOverride = false): void {
      const category = this.tryNormalizeCategory(placeholder.category);

      if (!category) {
         return;
      }

      const categoryMapping = this.getOrCreateCategory(mapping, category);

      if (categoryMapping.has(placeholder.name) && !allowOverride) {
         throw new Error(`Placeholder duplicado: "${placeholder.name}" na categoria "${category}".`);
      }

      categoryMapping.set(placeholder.name, {
         ...placeholder,
         category,
      });
   },

   getOrCreateCategory(mapping: PlaceholderMapping, category: ENUM_PLACEHOLDER_CATEGORY_TYPE): Map<string, PlaceholderInterface> {
      let categoryMapping = mapping.get(category);

      if (!categoryMapping) {
         categoryMapping = new Map();
         mapping.set(category, categoryMapping);
      }

      return categoryMapping;
   },

   tryNormalizeCategory(category: string): ENUM_PLACEHOLDER_CATEGORY_TYPE | undefined {
      try {
         return this.normalizeCategory(category);
      } catch (error) {
         console.error("Erro ao normalizar categoria:", error);
         return undefined;
      }
   },

   normalizeCategory(category: string): ENUM_PLACEHOLDER_CATEGORY_TYPE {
      const key = category as keyof typeof ENUM_PLACEHOLDER_CATEGORY_TYPE;

      const value = ENUM_PLACEHOLDER_CATEGORY_TYPE[key];

      if (!value) {
         throw new Error(`Categoria inválida: "${category}".`);
      }

      return value;
   },
};

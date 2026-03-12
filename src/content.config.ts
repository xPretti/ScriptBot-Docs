import { defineCollection, z as astroContent } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
   docs: defineCollection({
      loader: docsLoader(),
      schema: docsSchema({
         extend: astroContent.object({
            pageLink: astroContent
               .object({
                  label: astroContent.string(),
                  href: astroContent.string(),
               })
               .optional(),
         }),
      }),
   }),
   i18n: defineCollection({
      loader: i18nLoader(),
      schema: i18nSchema(),
   }),
};

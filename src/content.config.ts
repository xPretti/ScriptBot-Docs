import { defineCollection, z as astroContent } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

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
};

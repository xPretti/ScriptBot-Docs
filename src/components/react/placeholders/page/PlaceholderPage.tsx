import { FUNCTION_MAPPING } from "@src/data/functions-data";

import type { ENUM_PLACEHOLDER_CATEGORY_TYPE, ENUM_PLACEHOLDER_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import PlaceholderContent from "../content/PlaceholderContent";
import { VARIABLE_MAPPING } from "@src/data/variables-data";

export default function PlaceholderPage({ type, category, name }: { type: "function" | "variable"; category: string; name: string }) {
   const fn =
      type === "function"
         ? FUNCTION_MAPPING.get(category as ENUM_PLACEHOLDER_CATEGORY_TYPE)?.get(name)
         : VARIABLE_MAPPING.get(category as ENUM_PLACEHOLDER_CATEGORY_TYPE)?.get(name);

   if (!fn) {
      return <div>Função não encontrada ${name}</div>;
   }

   return (
      <>
         <PlaceholderContent
            item={fn}
            type={type}
         />
      </>
   );
}

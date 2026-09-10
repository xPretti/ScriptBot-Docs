import type { PlaceholderType } from "@src/types/placeholder-type";
import { FUNCTION_MAPPING } from "@src/data/placeholder-data";
import { VARIABLE_MAPPING } from "@src/data/placeholder-data";
import type { ENUM_PLACEHOLDER_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import PlaceholderTable from "./PlaceholderTable";

interface IPlaceholderLoaderProps {
   type: PlaceholderType;
   category: ENUM_PLACEHOLDER_CATEGORY_TYPE;
}

export function PlaceholderLoader({ type, category }: IPlaceholderLoaderProps) {
   const MAPPING = type === "function" ? FUNCTION_MAPPING : VARIABLE_MAPPING;

   const elements = MAPPING.get(category) ? Array.from(MAPPING.get(category)!.values()) : [];

   if (elements.length <= 0) {
      return null;
   }

   return (
      <PlaceholderTable
         type={type}
         elements={elements}
      />
   );
}

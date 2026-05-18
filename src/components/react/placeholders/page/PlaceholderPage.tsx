import { FUNCTION_MAPPING } from "@src/data/functions-data";

import type { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import PlaceholderContent from "../PlaceholderContent";

export default function ReactFnPage({ fnCategory, fnName }: { fnCategory: ENUM_FUNCTION_CATEGORY_TYPE | string; fnName: string }) {
   const fn = FUNCTION_MAPPING.get(fnCategory as ENUM_FUNCTION_CATEGORY_TYPE)?.get(fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

   return (
      <>
         <PlaceholderContent item={fn} />
      </>
   );
}

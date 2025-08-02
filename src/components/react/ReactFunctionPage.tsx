import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./ReactFunctionPage.module.css";

import type { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/function-enums";
import ReactFnContent from "./ReactFnContent";

export default function ReactFunctionPage({ fnCategory, fnName }: { fnCategory: ENUM_FUNCTION_CATEGORY_TYPE | string; fnName: string }) {
   const fn = FUNCTION_MAPPING.get(fnCategory as ENUM_FUNCTION_CATEGORY_TYPE)?.get(fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

   return (
      <>
         <ReactFnContent fn={fn} />
      </>
   );
}

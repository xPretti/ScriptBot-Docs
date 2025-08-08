import { getUrl } from "@src/utils/url-utils";
import styles from "./ReactFnParamType.module.css";
import type { FunctionType } from "@src/@types/functions-type";
import ReactTooltip from "../tooltip/ReactTooltip";
import { TYPES_MAPPING } from "@src/data/types-data";

interface ReactFnParamTypeProps {
   param: FunctionType;
}

export default function ReactFnParamType({ param }: ReactFnParamTypeProps) {
   const getTypeLink = (p: string | undefined) => {
      return p ? getUrl(p) : getUrl("/references/types");
   };

   const typeTooltip = TYPES_MAPPING.get(param.type);

   if (!typeTooltip) {
      return (
         <a href={getTypeLink(param.typeLink)}>
            <span className={styles.type}>{param.type}</span>
         </a>
      );
   }

   return (
      <ReactTooltip placement="top-start">
         <a href={getTypeLink(param.typeLink)}>
            <span className={styles.type}>{param.type}</span>
         </a>
         <div>
            <p className={styles.text}>{typeTooltip.desc}</p>
         </div>
      </ReactTooltip>
   );
}

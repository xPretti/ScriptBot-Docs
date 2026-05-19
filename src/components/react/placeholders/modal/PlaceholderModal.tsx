import { useState } from "react";
import ReactModal from "./ReactModal";
import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./PlaceholderModal.module.css";

import { X } from "lucide-react";
import type { ENUM_FUNCTION_CATEGORY_TYPE, ENUM_VARIABLE_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import { getUrl } from "@src/utils/url-utils";
import PlaceholderContent from "../PlaceholderContent";
import { VARIABLE_MAPPING } from "@src/data/variables-data";

export default function PlaceholderModal({
   isFunction,
   category,
   name,
   children,
}: {
   isFunction: boolean;
   category: string;
   name: string;
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const fn = isFunction
      ? FUNCTION_MAPPING.get(category as ENUM_FUNCTION_CATEGORY_TYPE)?.get(name)
      : VARIABLE_MAPPING.get(category as ENUM_VARIABLE_CATEGORY_TYPE)?.get(name);

   if (!fn) {
      return <div>Função não encontrada ${name}</div>;
   }

   return (
      <>
         <div
            className={styles.description}
            onClick={() => setIsOpen(true)}
         >
            {children}
         </div>
         <ReactModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
         >
            <div className={styles.container}>
               <div className={styles.header}>
                  <div className={styles.headerTop}>
                     <div className={styles.headerTitle}>
                        <h1>{fn.name}[...]</h1>
                     </div>
                     <div className={styles.headerButtons}>
                        <X
                           className={styles.close}
                           onClick={() => setIsOpen(false)}
                        />
                     </div>
                  </div>
               </div>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <PlaceholderContent
                        item={fn}
                        type={isFunction ? "function" : "variable"}
                     />
                  </div>
               </div>
               <div className={styles.footer}>
                  <a
                     href={getUrl(`/placeholders/functions/types/${category}/${name}`)}
                     className={styles.redirectBtn}
                  >
                     Página da função
                  </a>
               </div>
            </div>
         </ReactModal>
      </>
   );
}

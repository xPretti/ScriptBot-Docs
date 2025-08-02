import { useState } from "react";
import ReactModal from "./ReactModal";
import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./ReactFunctionModal.module.css";

import { X } from "lucide-react";
import type { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/function-enums";
import ReactFnContent from "./ReactFnContent";

export default function ReactFunctionModal({
   fnCategory,
   fnName,
   children,
}: {
   fnCategory: ENUM_FUNCTION_CATEGORY_TYPE;
   fnName: string;
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const fn = FUNCTION_MAPPING.get(fnCategory)?.get(fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

   return (
      <>
         <div className={styles.description} onClick={() => setIsOpen(true)}>
            {children}
         </div>
         <ReactModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className={styles.container}>
               <div className={styles.header}>
                  <div className={styles.headerTop}>
                     <div className={styles.headerTitle}>
                        <h1>{fn.name}[...]</h1>
                     </div>
                     <div className={styles.headerButtons}>
                        <X className={styles.close} onClick={() => setIsOpen(false)} />
                     </div>
                  </div>
               </div>
               <div className={styles.body}>
                  <div className={styles.content}>
                     <ReactFnContent fn={fn} />
                  </div>
               </div>
               <div className={styles.footer}>
                  <a href={`/placeholders/functions/types/${fnCategory}/${fnName}`} className={styles.redirectBtn}>
                     Página da função
                  </a>
               </div>
            </div>
         </ReactModal>
      </>
   );
}

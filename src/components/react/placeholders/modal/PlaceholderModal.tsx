import { useState } from "react";
import ReactModal from "./ReactModal";
import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./PlaceholderModal.module.css";

import { SquareArrowOutUpRight, X } from "lucide-react";
import type { ENUM_FUNCTION_CATEGORY_TYPE, ENUM_VARIABLE_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import { getUrl } from "@src/utils/url-utils";
import PlaceholderContent from "../PlaceholderContent";
import { VARIABLE_MAPPING } from "@src/data/variables-data";

export default function PlaceholderModal({
   type,
   category,
   name,
   children,
}: {
   type: "function" | "variable";
   category: string;
   name: string;
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const typeText = type === "function" ? "Função" : "Variável";
   const url = type === "function" ? "/placeholders/functions/types" : "/placeholders/variables/types";

   const fn =
      type === "function"
         ? FUNCTION_MAPPING.get(category as ENUM_FUNCTION_CATEGORY_TYPE)?.get(name)
         : VARIABLE_MAPPING.get(category as ENUM_VARIABLE_CATEGORY_TYPE)?.get(name);

   if (!fn) {
      return (
         <div>
            {typeText} não encontrada ${name}
         </div>
      );
   }

   const typeName = type === "function" ? fn.name + "[...]" : fn.name;

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
                        <h2>{typeName}</h2>
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
                        type={type}
                     />
                  </div>
               </div>
               <div className={styles.footer}>
                  <a
                     href={getUrl(`${url}/${category}/${name}`)}
                     className={styles.redirectBtn}
                  >
                     Página da {typeText.toLowerCase()}
                     <SquareArrowOutUpRight height={22} />
                  </a>
               </div>
            </div>
         </ReactModal>
      </>
   );
}

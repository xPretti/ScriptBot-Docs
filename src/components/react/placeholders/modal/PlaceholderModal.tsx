import ReactModal from "./ReactModal";

import { SquareArrowOutUpRight, X } from "lucide-react";

import PlaceholderContent from "../content/PlaceholderContent";

import { getUrl } from "@src/utils/url-utils";

import styles from "./PlaceholderModal.module.css";
import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

type Props = {
   type: "function" | "variable";
   item: PlaceholderInterface;
   isOpen: boolean;
   onClose: () => void;
};

export default function PlaceholderModal({ type, item, isOpen, onClose }: Props) {
   const typeText = type === "function" ? "Função" : "Variável";

   const url = type === "function" ? "/placeholders/functions/types" : "/placeholders/variables/types";

   const typeName = type === "function" ? `${item.name}[...]` : item.name;

   return (
      <ReactModal
         isOpen={isOpen}
         onClose={onClose}
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
                        onClick={onClose}
                     />
                  </div>
               </div>
            </div>

            <div className={styles.body}>
               <div className={styles.content}>
                  <PlaceholderContent
                     item={item}
                     type={type}
                  />
               </div>
            </div>

            <div className={styles.footer}>
               <a
                  href={getUrl(`${url}/${item.category}/${item.name}`)}
                  className={styles.redirectBtn}
               >
                  Página da {typeText.toLowerCase()}
                  <SquareArrowOutUpRight height={22} />
               </a>
            </div>
         </div>
      </ReactModal>
   );
}

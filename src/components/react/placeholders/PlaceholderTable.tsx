import { useState } from "react";

import { Eye } from "lucide-react";

import CopyText from "../shared/CopyText";

import PlaceholderModal from "./modal/PlaceholderModal";

import styles from "./PlaceholderTable.module.css";

import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

type PlaceholderType = "function" | "variable";

type Props = {
   type: PlaceholderType;
   elements: PlaceholderInterface[];
};

export default function PlaceholderTable({ type, elements }: Props) {
   const [selected, setSelected] = useState<PlaceholderInterface | null>(null);

   const containsAliases = elements.some((fn) => fn.aliases);

   return (
      <>
         <table className={styles.table}>
            <thead>
               <tr>
                  <th>PLACEHOLDERS</th>

                  {containsAliases && <th className={styles.aliases}>ALIASES</th>}

                  <th>RETORNOS</th>
               </tr>
            </thead>

            <tbody>
               {elements.map((fn) => (
                  <tr key={fn.name}>
                     <td>
                        <div className={styles.nameContainer}>
                           <CopyText text={fn.name}>
                              <p>{fn.name}</p>
                           </CopyText>

                           {fn.aliases && (
                              <div className={styles.aliasesMobile}>
                                 <CopyText text={fn.aliases}>
                                    <p>{fn.aliases}</p>
                                 </CopyText>
                              </div>
                           )}
                        </div>
                     </td>

                     {containsAliases && (
                        <td className={styles.aliases}>
                           {fn.aliases && (
                              <CopyText text={fn.aliases}>
                                 <p>{fn.aliases}</p>
                              </CopyText>
                           )}
                        </td>
                     )}

                     <td>
                        <button
                           type="button"
                           className={styles.description}
                           onClick={() => setSelected(fn)}
                        >
                           <p
                              className={styles.text}
                              title={fn.description.full}
                           >
                              {fn.description.simple}
                           </p>

                           <div className={styles.badgeWrapper}>
                              {fn.version && (
                                 <span
                                    className={styles.version}
                                    title={fn.version}
                                 >
                                    {fn.version}+
                                 </span>
                              )}

                              <div className={styles.redirectIcon}>
                                 <Eye
                                    size="1.5rem"
                                    strokeWidth={1.1}
                                 />
                              </div>
                           </div>
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {selected && (
            <PlaceholderModal
               type={type}
               item={selected}
               isOpen
               onClose={() => setSelected(null)}
            />
         )}
      </>
   );
}

import PlaceholderParam from "../params/PlaceholderParam";
import styles from "./PlaceholderReturn.module.css";
import type { FunctionType } from "@src/types/functions-type";

interface Props {
   title: string;
   message?: string;
   type?: FunctionType;
}

export default function PlaceholderReturn({ title, message, type }: Props) {
   if (!message) return null;

   return (
      <div className={styles.returnContainer}>
         {message && (
            <div className={styles.returnItem}>
               <div className={styles.title}>
                  <p>{title}</p>
               </div>
               <div className={styles.value}>
                  <p>{message}</p>
                  {type && (
                     <div className={styles.typeContainer}>
                        <span>Retorno:</span>
                        <PlaceholderParam param={type} />
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

import { BASE_URL } from "@src/configs/config";
import styles from "./ReactFnReturn.module.css";
import { getUrl } from "@src/utils/url-utils";
import ReactFnParamType from "./ReactFnParamType";
import type { FunctionType } from "@src/@types/functions-type";

interface Props {
   title: string;
   message?: string;
   type?: FunctionType;
}

export default function ReactFnReturn({ title, message, type }: Props) {
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
                        <ReactFnParamType param={type} />
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

import styles from "./ReactFnParams.module.css";

import type { FunctionParameter } from "@src/@types/functions-type";

export default function ReactFnParams({ params }: { params: FunctionParameter[] }) {
   if (!params) return null;

   const getTypeLink = (p: string | undefined) => {
      return p ? p : "/fundamentals/types";
   };

   return (
      <table className={styles.table}>
         <tbody>
            {params.map((param, index) => (
               <tr key={index} className={styles.param}>
                  <td>
                     <a href={getTypeLink(param.type.typeLink)}>
                        <span className={styles.type}>{param.type.type}</span>
                     </a>
                  </td>
                  <td className={styles.variable}>{param.value ? <span> {param.name} </span> : <span> {param.name}; </span>}</td>

                  <td className={styles.value}>{param.value && <span> = {param.value};</span>}</td>
                  <td className={styles.comment}>
                     <p> // {param.comment}</p>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

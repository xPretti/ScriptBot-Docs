import { BASE_URL } from "@src/configs/config";
import styles from "./ReactFnParams.module.css";

import type { FunctionParameter } from "@src/@types/functions-type";
import ReactFnParamType from "./ReactFnParamType";

export default function ReactFnParams({ params }: { params: FunctionParameter[] }) {
   if (!params) return null;

   return (
      <table className={styles.table}>
         <tbody>
            {params.map((param, index) => (
               <tr
                  key={index}
                  className={styles.param}
               >
                  <td>
                     <ReactFnParamType param={param.type} />
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

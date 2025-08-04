import styles from "./ReactFnContent.module.css";

import ReactFnReturn from "./ReactFnReturn";
import type { FunctionPlaceholderInterface } from "@src/interfaces/placeholder-interface";
import { getFunctionExample } from "@src/utils/functions-comp-utils";
import ReactCode from "../ReactCode";
import ReactFnParams from "./ReactFnParams";

export default function ReactFnContent({ fn }: { fn: FunctionPlaceholderInterface }) {
   if (!fn) return null;

   const getExamples = () => {
      let result = "//Default example: \n" + getFunctionExample(fn);
      if (fn.aliases !== "") {
         result += "\n\n//Using aliases: \n" + getFunctionExample(fn, true);
      }
      if (fn.examples.length > 0) {
         result += `\n\n//Other examples\n${fn.examples.join("\n")}`;
      }

      return result;
   };

   return (
      <>
         <div className={styles.content}>
            <div className={styles.descriptionContainer}>
               <p>{fn.description.complex}</p>
            </div>
            <div className={styles.titleContent}>
               <h3>Parâmetros</h3>
               {fn.parameters.length > 0 ? (
                  <div className={styles.scrollable}>
                     <ReactFnParams params={fn.parameters} />
                  </div>
               ) : (
                  <p>Esta função não requer parâmetros.</p>
               )}
            </div>
            <div className={styles.titleContent}>
               <h3>Exemplos</h3>
               <ReactCode language="java">{getExamples()}</ReactCode>
            </div>
            {fn.returns && (
               <div className={styles.titleContent}>
                  <h3>Retornos</h3>
                  {fn.returns.error || fn.returns.success ? (
                     <div className={styles.returnsTypes}>
                        <ReactFnReturn
                           title="Em caso de sucesso:"
                           message={fn.returns.success?.message}
                           type={fn.returns.success?.type.type}
                           typeLink={fn.returns.success?.type.typeLink}
                        />
                        <ReactFnReturn
                           title="Em caso de erro:"
                           message={fn.returns.error?.message}
                           type={fn.returns.error?.type.type}
                           typeLink={fn.returns.error?.type.typeLink}
                        />
                     </div>
                  ) : (
                     <ReactFnReturn
                        title="Em caso de sucesso ou erro:"
                        message="Esta função executa uma ação, mas não retorna nenhum valor ao ser executada."
                        type="void"
                        typeLink="/references/types"
                     />
                  )}
               </div>
            )}
         </div>
      </>
   );
}

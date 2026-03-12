import styles from "./ReactFnContent.module.css";

import ReactFnReturn from "./ReactFnReturn";
import type { FunctionPlaceholderInterface } from "@src/interfaces/placeholder-interface";
import { getFunctionExample } from "@src/utils/functions-comp-utils";
import ReactCode from "../ReactCode";
import ReactFnParams from "./ReactFnParams";
import CopyText from "../CopyText";

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
            {fn.version && (
               <div className={styles.versionContainer}>
                  <h4 className={styles.version}>Disponível a partir da versão {fn.version}</h4>
               </div>
            )}
            <div className={styles.descriptionContainer}>
               <p>{fn.description.full}</p>
            </div>
            <div className={`${styles.titleContentName} ${styles.titleContent}`}>
               <h3>Função</h3>
               <p>
                  Nome da função:{" "}
                  <CopyText text={fn.name}>
                     <span>{fn.name}</span>
                  </CopyText>
               </p>
               {fn.aliases !== "" && (
                  <p>
                     Aliases:{" "}
                     <CopyText text={fn.aliases}>
                        <span>{fn.aliases}</span>
                     </CopyText>
                  </p>
               )}
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
                           type={fn.returns.success?.type}
                        />
                        <ReactFnReturn
                           title="Em caso de erro:"
                           message={fn.returns.error?.message}
                           type={fn.returns.error?.type}
                        />
                     </div>
                  ) : (
                     <ReactFnReturn
                        title="Em caso de sucesso ou erro:"
                        message="Esta função executa uma ação, mas não retorna nenhum valor ao ser executada."
                        type={{ type: "void", typeLink: "/references/types" }}
                     />
                  )}
               </div>
            )}
         </div>
      </>
   );
}

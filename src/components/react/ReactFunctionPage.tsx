import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./ReactFunctionPage.module.css";

import ReactFunctionParam from "./ReactFunctionParam";
import ReactFunctionReturn from "./ReactFunctionReturn";
import type { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/function-enums";
import type { FunctionModel } from "@src/interfaces/functions-interface";

export default function ReactFunctionPage({
   fnCategory,
   fnName,
}: {
   fnCategory: ENUM_FUNCTION_CATEGORY_TYPE | string;
   fnName: string;
}) {
   const fn = FUNCTION_MAPPING.get(
      fnCategory as ENUM_FUNCTION_CATEGORY_TYPE
   )?.get(fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

   const getFunctionExample = (isAlias = false) => {
      const name = isAlias ? fn.aliases : fn.name;
      return `${name}[${fn.parameters
         .map((param) => param.name + (param.value ? ` = ${param.value}` : ""))
         .join(", ")}]`;
   };

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <div className={styles.descriptionContainer}>
               <p>{fn.description.complex}</p>
            </div>
         </div>
         <div className={styles.content}>
            <div className={styles.titleContent}>
               <h3>Parâmetros</h3>
               {fn.parameters.length > 0 ? (
                  <div className={styles.paramsTypes}>
                     {fn.parameters.map((param, index) => (
                        <ReactFunctionParam
                           key={index}
                           type={param.type.type}
                           name={param.name}
                           comment={param.comment}
                           value={param.value}
                           typeLink={param.type.typeLink}
                        />
                     ))}
                  </div>
               ) : (
                  <p>Esta função não requer parâmetros.</p>
               )}
            </div>
            <div className={styles.titleContent}>
               <h3>Exemplos</h3>
               <div className={styles.examplesTypes}>
                  <ol>
                     <li>{getFunctionExample()}</li>
                     {fn.aliases && <li>{getFunctionExample(true)}</li>}
                     {fn.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                     ))}
                  </ol>
               </div>
            </div>
            {fn.returns && (
               <div className={styles.titleContent}>
                  <h3>Retornos</h3>
                  {fn.returns.error || fn.returns.success ? (
                     <div className={styles.returnsTypes}>
                        <ReactFunctionReturn
                           title="Em caso de sucesso:"
                           message={fn.returns.success?.message}
                           type={fn.returns.success?.type.type}
                           typeLink={fn.returns.success?.type.typeLink}
                        />
                        <ReactFunctionReturn
                           title="Em caso de erro:"
                           message={fn.returns.error?.message}
                           type={fn.returns.error?.type.type}
                           typeLink={fn.returns.error?.type.typeLink}
                        />
                     </div>
                  ) : (
                     <ReactFunctionReturn
                        title="Em caso de sucesso ou erro:"
                        message="Esta função executa uma ação, mas não retorna nenhum valor ao ser executada."
                        type="void"
                        typeLink="/fundamentals/types"
                     />
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

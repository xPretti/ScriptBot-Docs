import { useState } from "react";
import ReactModal from "./ReactModal";
import { FUNCTION_MAPPING } from "@src/data/functions-data";

import styles from "./ReactFunctionModal.module.css";

import { X } from "lucide-react";
import ReactFunctionParam from "./ReactFunctionParam";
import ReactFunctionReturn from "./ReactFunctionReturn";
import type { ENUM_FUNCTION_CATEGORY_TYPE } from "@src/enums/function-enums";
import { getFunctionExample } from "@src/utils/functions-comp-utils";
import ReactCode from "./ReactCode";

export default function ReactFunctionModal({
   fnCategory,
   fnName,
   children,
}: {
   fnCategory: ENUM_FUNCTION_CATEGORY_TYPE;
   fnName: string;
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const fn = FUNCTION_MAPPING.get(fnCategory)?.get(fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

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
         <div className={styles.description} onClick={() => setIsOpen(true)}>
            {children}
         </div>
         <ReactModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className={styles.container}>
               <div className={styles.header}>
                  <div className={styles.headerTop}>
                     <div className={styles.headerTitle}>
                        <h1>{fn.name}[...]</h1>
                     </div>
                     <div className={styles.headerButtons}>
                        <X
                           className={styles.close}
                           onClick={() => setIsOpen(false)}
                        />
                     </div>
                  </div>
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
                     <ReactCode language="java">{getExamples()}</ReactCode>
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
               <div className={styles.footer}>
                  <a
                     href={`/placeholders/functions/types/${fnCategory}/${fnName}`}
                     className={styles.redirectBtn}
                  >
                     Página da função
                  </a>
               </div>
            </div>
         </ReactModal>
      </>
   );
}

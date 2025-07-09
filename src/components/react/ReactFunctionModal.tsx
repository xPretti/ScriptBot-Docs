import { useState } from "react";
import ReactModal from "./ReactModal";
import { functionsData } from "@src/data/functions-data";

import styles from "./ReactFunctionModal.module.css";

import { X } from "lucide-react";
import ReactFunctionParam from "./ReactFunctionParam";
import ReactFunctionReturn from "./ReactFunctionReturn";

export default function ReactFunctionModal({
   fnName,
   children,
}: {
   fnName: string;
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const fn = functionsData.find((f) => f.name === fnName);

   if (!fn) {
      return <div>Função não encontrada ${fnName}</div>;
   }

   return (
      <div>
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
                        <div>
                           {fn.parameters.map((param) => (
                              <ReactFunctionParam
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
                        {fn.examples.map((example) => (
                           <code>{example}</code>
                        ))}
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
         </ReactModal>
      </div>
   );
}

import { useState } from "react";
import ReactModal from "./ReactModal";
import { functionsData } from "@src/data/functions-data";

import styles from "./ReactFunctionModal.module.css";

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
        <div>
          <h2>{fn.name}</h2>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <p>
          {fn.descricao.simple} {fn.descricao.complex}
        </p>
      </ReactModal>
    </div>
  );
}

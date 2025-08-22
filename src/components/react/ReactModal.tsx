import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./ReactModal.module.css";

interface Props {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export default function ReactModal({ isOpen, onClose, children }: Props) {
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   if (!isOpen) return null;

   const handleClickClose = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   return createPortal(
      <div
         className={styles.container}
         onClick={handleClickClose}
      >
         <div className={styles.backdrop}>
            <div
               className={styles.content}
               onClick={handleClickClose}
            >
               {children}
            </div>
         </div>
      </div>,
      document.body
   );
}

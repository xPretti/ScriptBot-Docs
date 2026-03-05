import React, { useState, useRef, useEffect } from "react";
import styles from "./CopyText.module.css";

interface CopyTextProps {
   text: string;
   children: React.ReactElement;
}

export default function CopyText({ text, children }: CopyTextProps) {
   const [copied, setCopied] = useState(false);
   const timeoutRef = useRef<number | null>(null);

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(text);
         setCopied(true);

         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }

         timeoutRef.current = window.setTimeout(() => {
            setCopied(false);
         }, 2000);
      } catch (error) {
         console.error("Erro ao copiar:", error);
      }
   };

   useEffect(() => {
      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   return (
      <code
         className={styles.code}
         onClick={handleCopy}
         title="Click to clipboard"
      >
         {children}
         {copied && <span className={styles.tooltip}>Copied!</span>}
      </code>
   );
}

import type { FunctionPlaceholderInterface } from "@src/interfaces/placeholder-interface";

import styles from "./InfoSection.module.css";
import Section from "../../shared/Section";
import CopyText from "../../shared/CopyText";

interface Props {
   item: FunctionPlaceholderInterface;
   type: "function" | "variable";
}

export default function InfoSection({ item, type }: Props) {
   const typeText = type === "function" ? "Função" : "Variável";

   return (
      <Section title={typeText}>
         <div className={styles.info}>
            <p>
               Nome:{" "}
               <CopyText text={item.name}>
                  <span>{item.name}</span>
               </CopyText>
            </p>

            {!!item.aliases && (
               <p>
                  Aliases:{" "}
                  <CopyText text={item.aliases}>
                     <span>{item.aliases}</span>
                  </CopyText>
               </p>
            )}
         </div>
      </Section>
   );
}

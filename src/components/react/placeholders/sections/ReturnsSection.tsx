import styles from "./ReturnsSection.module.css";
import Section from "../../shared/Section";
import type { FunctionReturns } from "@src/types/functions-type";
import PlaceholderReturn from "../returns/PlaceholderReturn";

interface Props {
   returns: FunctionReturns | undefined;
}

export default function ReturnsSection({ returns }: Props) {
   if (!returns) return null;

   return (
      <Section title="Retornos">
         {returns?.error || returns?.success ? (
            <div className={styles.returnsTypes}>
               <PlaceholderReturn
                  title="Em caso de sucesso:"
                  message={returns.success?.message}
                  type={returns.success?.type}
               />

               <PlaceholderReturn
                  title="Em caso de erro:"
                  message={returns.error?.message}
                  type={returns.error?.type}
               />
            </div>
         ) : (
            <PlaceholderReturn
               title="Em caso de sucesso ou erro:"
               message="Esta função executa uma ação, mas não retorna nenhum valor ao ser executada."
               type={{
                  type: "void",
                  typeLink: "/references/types",
               }}
            />
         )}
      </Section>
   );
}

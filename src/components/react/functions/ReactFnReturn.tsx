import styles from "./ReactFnReturn.module.css";

interface Props {
   title: string;
   message?: string;
   type?: string;
   typeLink?: string;
}

export default function ReactFnReturn({ title, message, type, typeLink = "/fundamentals/types" }: Props) {
   if (!message) return null;

   return (
      <div className={styles.returnContainer}>
         {message && (
            <div className={styles.returnItem}>
               <div className={styles.title}>
                  <p>{title}</p>
               </div>
               <div className={styles.value}>
                  <p>{message}</p>
                  <div className={styles.typeContainer}>
                     <span>Retorno:</span>
                     <a href={typeLink}>
                        <p className={styles.type}>{type}</p>
                     </a>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

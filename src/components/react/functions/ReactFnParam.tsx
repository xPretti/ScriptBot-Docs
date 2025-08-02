import styles from "./ReactFnParam.module.css";

interface Props {
   type: string;
   name: string;
   comment: string;
   value?: string;
   typeLink?: string;
}

export default function ReactFnParam({ type, name, comment, value, typeLink = "/fundamentals/types" }: Props) {
   return (
      <div className={styles.param}>
         {value ? <p className={styles.optional}>Optional</p> : <p className={styles.required}>Obrigatório</p>}
         <p className={styles.text}>
            <a href={typeLink}>
               <span className={styles.type}>{type}</span>
            </a>
            {value ? (
               <>
                  <span> {name} </span>
                  <span className={styles.value}> = {value};</span>
               </>
            ) : (
               <span> {name}; </span>
            )}
            <span className={styles.comment}> // {comment}</span>
         </p>
      </div>
   );
}

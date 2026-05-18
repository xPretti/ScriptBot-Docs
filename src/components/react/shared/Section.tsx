import type { PropsWithChildren } from "react";

import styles from "./Section.module.css";

interface Props {
   title: string;
}

export default function Section({ title, children }: PropsWithChildren<Props>) {
   return (
      <section className={styles.section}>
         <h3 className={styles.title}>{title}</h3>

         <div className={styles.content}>{children}</div>
      </section>
   );
}

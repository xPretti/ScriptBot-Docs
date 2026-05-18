import styles from "./DescriptionSection.module.css";

interface Props {
   description: string | undefined;
}

export default function DescriptionSection({ description }: Props) {
   if (!description) return null;
   return (
      <div className={styles.container}>
         <p className={styles.description}>{description}</p>
      </div>
   );
}

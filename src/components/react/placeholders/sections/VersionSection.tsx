import styles from "./VersionSection.module.css";

interface Props {
   version?: string;
}

export default function VersionSection({ version }: Props) {
   if (!version) return null;

   return (
      <div className={styles.container}>
         <h4 className={styles.version}>Disponível a partir da versão {version}</h4>
      </div>
   );
}

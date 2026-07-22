import styles from "./PlaceholderContent.module.css";

import DescriptionSection from "./sections/DescriptionSection";
import ExamplesSection from "./sections/ExamplesSection";
import InfoSection from "./sections/InfoSection";
import ParametersSection from "./sections/ParametersSection";
import ReturnsSection from "./sections/ReturnsSection";
import VersionSection from "./sections/VersionSection";

import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

interface Props {
   item: PlaceholderInterface;
   type: "function" | "variable";
}

export default function PlaceholderContent({ item, type }: Props) {
   if (!item) return null;

   return (
      <div className={styles.content}>
         <VersionSection version={item.version} />

         <DescriptionSection description={item.description.full} />

         <InfoSection
            item={item}
            type={type}
         />

         {item?.parameters?.length && (
            <div className={styles.parametersContainer}>
               <ParametersSection params={item.parameters} />
            </div>
         )}

         <ExamplesSection item={item} />

         <ReturnsSection returns={item.returns} />
      </div>
   );
}

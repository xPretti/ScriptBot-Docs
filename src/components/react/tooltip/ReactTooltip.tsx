import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import styles from "./ReactTooltip.module.css";
import { useFloating, type Placement } from "@floating-ui/react";

interface Props {
   children: [ReactElement, ReactElement];
   placement?: Placement;
   delay?: number;
}

export default function ReactTooltip({ children, placement = "top", delay = 300 }: Props) {
   const [isOpen, setIsOpen] = useState(false);
   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

   const { refs, floatingStyles } = useFloating({
      placement,
      middleware: [],
   });

   useEffect(() => {
      const handleWheel = () => {
         setIsOpen(false);
      };

      document.addEventListener("wheel", handleWheel);

      return () => {
         document.removeEventListener("wheel", handleWheel);
      };
   }, []);

   const handleMouseEnter = () => {
      const id = setTimeout(() => setIsOpen(true), delay);
      setTimeoutId(id);
   };

   const handleMouseLeave = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setTimeout(() => setIsOpen(false), delay);
   };

   const name = children[0];
   const tooltip = children[1];

   return (
      <div
         className={styles.tooltipContainer}
         onMouseLeave={() => handleMouseLeave()}
      >
         <div
            ref={refs.setReference}
            onMouseEnter={() => handleMouseEnter()}
         >
            {name}
         </div>

         {isOpen && (
            <div
               ref={refs.setFloating}
               style={floatingStyles}
               className={styles.tooltip}
               role="tooltip"
               id="tooltip-content"
            >
               {tooltip}
            </div>
         )}
      </div>
   );
}

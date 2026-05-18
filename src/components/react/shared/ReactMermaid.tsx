import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface ReactMermaidProps {
   code: string;
}

export default function ReactMermaid({ code }: ReactMermaidProps) {
   const ref = useRef<HTMLDivElement>(null);

   const renderDiagram = async () => {
      const el = ref.current;
      if (!el) return;

      const isDark = document.documentElement.dataset.theme === "dark";

      mermaid.initialize({
         startOnLoad: false,
         theme: "base",
         themeVariables: {
            background: "transparent",
            primaryColor: isDark ? "#1e293b" : "#e5e7eb",
            primaryTextColor: isDark ? "#f8fafc" : "#0f172a",
            primaryBorderColor: isDark ? "#475569" : "#9ca3af",
            lineColor: isDark ? "#94a3b8" : "#475569",
         },
      });

      const id = `mermaid-${btoa(code).slice(0, 10)}`;

      const { svg } = await mermaid.render(id, code);

      // verifica novamente após o await
      if (ref.current) {
         ref.current.innerHTML = svg;
      }
   };

   useEffect(() => {
      renderDiagram();

      const observer = new MutationObserver(() => {
         renderDiagram();
      });

      observer.observe(document.documentElement, {
         attributes: true,
         attributeFilter: ["data-theme"],
      });

      return () => observer.disconnect();
   }, [code]);

   return <div ref={ref} />;
}

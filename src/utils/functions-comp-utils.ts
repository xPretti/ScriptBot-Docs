import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

export const getFunctionExample = (fn: PlaceholderInterface, isAlias = false) => {
   const name = isAlias ? fn.aliases : fn.name;
   if (!fn.parameters || !fn.parameters.length) {
      return name;
   }
   return `${name}[${fn.parameters.map((param) => param.name + (param.value ? ` = ${param.value}` : "")).join(", ")}]`;
};

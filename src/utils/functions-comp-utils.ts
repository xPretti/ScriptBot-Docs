import type { FunctionPlaceholderInterface } from "@src/interfaces/placeholder-interface";

export const getFunctionExample = (
   fn: FunctionPlaceholderInterface,
   isAlias = false
) => {
   const name = isAlias ? fn.aliases : fn.name;
   return `${name}[${fn.parameters
      .map((param) => param.name + (param.value ? ` = ${param.value}` : ""))
      .join(", ")}]`;
};

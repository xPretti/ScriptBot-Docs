import type { FunctionModel } from "@src/interfaces/functions-interface";

export const getFunctionExample = (fn: FunctionModel, isAlias = false) => {
   const name = isAlias ? fn.aliases : fn.name;
   return `${name}[${fn.parameters
      .map((param) => param.name + (param.value ? ` = ${param.value}` : ""))
      .join(", ")}]`;
};

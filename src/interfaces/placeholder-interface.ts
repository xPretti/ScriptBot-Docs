import type { FunctionParameter, FunctionReturns } from "@src/types/functions-type";
import type { PlaceholderDescription } from "@src/types/placeholder-type";

export interface PlaceholderInterface {
   category: string;
   name: string;
   aliases: string;
   version?: string;
   description: PlaceholderDescription;
   parameters?: FunctionParameter[];
   examples?: string[];
   returns?: FunctionReturns;
}

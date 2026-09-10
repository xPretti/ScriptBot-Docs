import type { FunctionParameter, FunctionReturns } from "@src/types/functions-type";
import type { PlaceholderDescription, PlaceholderType } from "@src/types/placeholder-type";

export interface PlaceholderInterface {
   type: PlaceholderType;
   category: string;
   name: string;
   aliases: string;
   version?: string;
   description: PlaceholderDescription;
   parameters?: FunctionParameter[];
   examples?: string[];
   returns?: FunctionReturns;
}

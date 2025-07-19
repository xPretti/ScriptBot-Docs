import type {
   FunctionDescription,
   FunctionParameter,
   FunctionReturns,
} from "@src/@types/functions-type";
import type { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";

export interface FunctionModel {
   category: ENUM_FUNCTION_CATEGORY_TYPE;
   name: string;
   aliases: string;
   description: FunctionDescription;
   parameters: FunctionParameter[];
   examples: string[];
   returns?: FunctionReturns;
}

import type {
   FunctionParameter,
   FunctionReturns,
} from "@src/@types/functions-type";
import type { PlaceholderDescription } from "@src/@types/placeholder-type";
import type { ENUM_VARIABLE_CATEGORY_TYPE } from "@src/enums/variable-enums";
import type { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";

export interface PlaceholderInterface {
   name: string;
   aliases: string;
   description: PlaceholderDescription;
}

export interface FunctionPlaceholderInterface extends PlaceholderInterface {
   category: ENUM_FUNCTION_CATEGORY_TYPE;
   parameters: FunctionParameter[];
   examples: string[];
   returns?: FunctionReturns;
}

export interface VariablePlaceholderInterface extends PlaceholderInterface {
   category: ENUM_VARIABLE_CATEGORY_TYPE;
}

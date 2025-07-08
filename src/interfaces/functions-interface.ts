import type { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";

export interface FunctionType {
  type: string;
  typeLink?: string;
}

export interface FunctionDescription {
  simple: string;
  complex: string;
}

export interface FunctionParameter {
  type: FunctionType;
  name: string;
  comment: string;
  value?: string;
}

export interface FunctionReturn {
  message: string;
  type: FunctionType;
}

export interface FunctionReturns {
  success?: FunctionReturn;
  error?: FunctionReturn;
}

export interface FunctionModel {
  category: ENUM_FUNCTION_CATEGORY_TYPE;
  name: string;
  aliases: string;
  descricao: FunctionDescription;
  parameters: FunctionParameter[];
  examples: string[];
  returns?: FunctionReturns;
}

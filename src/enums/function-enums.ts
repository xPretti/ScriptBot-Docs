export enum ENUM_FUNCTION_CATEGORY_TYPE {
   INDICATORS = "indicators",
   USER_VARIABLES = "uservariables",
   CANDLES = "candles",
   DEBUGS = "debugs",
   MATH = "math",
}

export const getFunctionCategoryLabel: Record<
   ENUM_FUNCTION_CATEGORY_TYPE,
   () => string
> = {
   [ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS]: () => "Indicadores",
   [ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES]: () => "Variáveis de usuário",
   [ENUM_FUNCTION_CATEGORY_TYPE.CANDLES]: () => "Velas",
   [ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS]: () => "Depurações",
   [ENUM_FUNCTION_CATEGORY_TYPE.MATH]: () => "Matemática",
};

export enum ENUM_FUNCTION_CATEGORY_TYPE {
   INDICATORS = "indicators",
   USER_VARIABLES = "uservariables",
   CANDLES = "candles",
   DEBUGS = "debugs",
   MATH = "math",
   ACCOUNT = "account",
   CONVERTER = "converter",
   MARKET = "market",
   TIME = "time",
}

export const getFunctionCategoryLabel: Record<
   ENUM_FUNCTION_CATEGORY_TYPE,
   () => string
> = {
   [ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS]: () => "Indicadores",
   [ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES]: () => "Variáveis de usuário",
   [ENUM_FUNCTION_CATEGORY_TYPE.CANDLES]: () => "Velas",
   [ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS]: () => "Depurações",
   [ENUM_FUNCTION_CATEGORY_TYPE.MATH]: () => "Matemáticas",
   [ENUM_FUNCTION_CATEGORY_TYPE.ACCOUNT]: () => "Contas",
   [ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER]: () => "Conversores",
   [ENUM_FUNCTION_CATEGORY_TYPE.MARKET]: () => "Mercado",
   [ENUM_FUNCTION_CATEGORY_TYPE.TIME]: () => "Tempo",
};

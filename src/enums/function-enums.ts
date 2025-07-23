export enum ENUM_FUNCTION_CATEGORY_TYPE {
   INDICATOR = "indicator",
   USER_VARIABLE = "uservariable",
   CANDLE = "candle",
   DEBUG = "debug",
   MATH = "math",
   ACCOUNT = "account",
   CONVERTER = "converter",
   MARKET = "market",
   TIME = "time",
   OPEN_TRADE = "opentrade",
   CLOSE_TRADE = "closetrade",
   TRADE = "trade",
}

export const getFunctionCategoryLabel: Record<
   ENUM_FUNCTION_CATEGORY_TYPE,
   () => string
> = {
   [ENUM_FUNCTION_CATEGORY_TYPE.INDICATOR]: () => "Indicadores",
   [ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE]: () => "Variáveis de usuário",
   [ENUM_FUNCTION_CATEGORY_TYPE.CANDLE]: () => "Candles",
   [ENUM_FUNCTION_CATEGORY_TYPE.DEBUG]: () => "Depuradores",
   [ENUM_FUNCTION_CATEGORY_TYPE.MATH]: () => "Matemáticas",
   [ENUM_FUNCTION_CATEGORY_TYPE.ACCOUNT]: () => "Contas",
   [ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER]: () => "Conversores",
   [ENUM_FUNCTION_CATEGORY_TYPE.MARKET]: () => "Mercados",
   [ENUM_FUNCTION_CATEGORY_TYPE.TIME]: () => "Tempos",
   [ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE]: () => "Negociações abertas",
   [ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE]: () => "Negociações fechadas",
   [ENUM_FUNCTION_CATEGORY_TYPE.TRADE]: () => "Negociações",
};

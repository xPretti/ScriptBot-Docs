export const ENUM_FUNCTION_CATEGORY_TYPE = {
   INDICATOR: "indicator",
   USER_VARIABLE: "uservariable",
   CANDLE: "candle",
   DEBUG: "debug",
   MATH: "math",
   ACCOUNT: "account",
   CONVERTER: "converter",
   MARKET: "market",
   TIME: "time",
   OPEN_TRADE: "opentrade",
   CLOSE_TRADE: "closetrade",
   TRADE: "trade",
   GLOBAL_VARIABLE: "globalvariable",
   BASIC_OBJECTS: "basicobjects",
   LOGICS: "logics",
} as const;

export type ENUM_FUNCTION_CATEGORY_TYPE = (typeof ENUM_FUNCTION_CATEGORY_TYPE)[keyof typeof ENUM_FUNCTION_CATEGORY_TYPE];

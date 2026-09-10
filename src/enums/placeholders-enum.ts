export const ENUM_PLACEHOLDER_CATEGORY_TYPE = {
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
   LOCAL_POSITION: "localposition",
   LOCAL_TRIGGER: "localtrigger",
   SIGNAL: "signal",
   OPERATOR: "operator",
} as const;

export type ENUM_PLACEHOLDER_CATEGORY_TYPE = (typeof ENUM_PLACEHOLDER_CATEGORY_TYPE)[keyof typeof ENUM_PLACEHOLDER_CATEGORY_TYPE];

export enum ENUM_VARIABLE_CATEGORY_TYPE {
   LOCAL_POSITION = "localposition",
   LOCAL_TRIGGER = "localtrigger",
   ACCOUNT = "account",
   MARKET = "market",
   OPEN_TRADE = "opentrade",
   CLOSE_TRADE = "closetrade",
   SIGNAL = "signal",
}

export const getVariableCategoryLabel: Record<
   ENUM_VARIABLE_CATEGORY_TYPE,
   () => string
> = {
   [ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION]: () => "Posição local",
   [ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER]: () => "Gatilho local",
   [ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT]: () => "Contas",
   [ENUM_VARIABLE_CATEGORY_TYPE.MARKET]: () => "Mercados",
   [ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE]: () => "Negociações abertas",
   [ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE]: () => "Negociações fechadas",
   [ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL]: () => "Sinais",
};

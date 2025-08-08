import type { TypesType } from "@src/@types/types-type";

export const TYPES_MAPPING: Map<string, TypesType> = new Map([
   ["void", { desc: "Representa um valor vazio, sem retorno." }],
   ["any", { desc: "Representa qualquer valor. Seja um int, double, string, etc." }],
   ["int", { desc: "Representa um inteiro com sinal (-2147483648 até 2147483647)." }],
   ["uint", { desc: "Representa um inteiro positivo (0 até 4294967295)." }],
   ["datetime", { desc: "Representa um horário em segundos." }],
   ["long", { desc: "Representa um inteiro com sinal de 64 bits (-9223372036854775808 até 9223372036854775807)." }],
   ["ulong", { desc: "Representa um inteiro sem sinal de 64 bits (0 até 18446744073709551615)." }],
   ["char", { desc: "Representa um caractere Unicode." }],
   ["uchar", { desc: "Representa um caractere sem sinal." }],
   ["short", { desc: "Representa um inteiro com sinal de 16 bits (-32768 até 32767)." }],
   ["ushort", { desc: "Representa um inteiro sem sinal de 16 bits (0 até 65535)." }],
   ["float", { desc: "Representa um número de ponto flutuante de precisão simples (7 dígitos)." }],
   ["double", { desc: "Representa um número de ponto flutuante de precisão dupla (15-16 dígitos)." }],
   ["string", { desc: "Representa uma sequência de caracteres Unicode." }],
   ["bool", { desc: "Representa um valor lógico (true ou false)." }],

   ["ENUM_TRADE", { desc: "Representa o tipo de trade: \n'TYPE_BUY', 'TYPE_SELL', 'TYPE_ALL'." }],
   ["ENUM_TIMEFRAME", { desc: "Representa um intervalo de tempo: \n'M1', 'M5', 'M15', 'M30', 'H1', 'H4', 'D1'." }],
   ["ENUM_TIME_HISTORIC", { desc: "Representa um tipo de histórico: \n'TYPE_DAY', 'TYPE_WEEK', 'TYPE_MONTH', 'TYPE_YEAR', 'TYPE_ALL'" }],
   [
      "ENUM_TIME_TYPE",
      { desc: "Representa um tipo de horário: \n'TYPE_SEC', 'TYPE_MIN', 'TYPE_HOUR', 'TYPE_DAY', 'TYPE_DAY_WEEK', 'TYPE_DAY_YEAR','TYPE_MONTH', 'TYPE_YEAR'" },
   ],
   [
      "ENUM_POS_DOUBLE",
      { desc: "Representa propriedade de uma posição: \n'TYPE_VOLUME', 'TYPE_OPEN', 'TYPE_SL', 'TYPE_TP', 'TYPE_CURRENT', 'TYPE_SWAP', 'TYPE_PROFIT'" },
   ],
   [
      "ENUM_POS_INT",
      {
         desc: "Representa propriedade de uma posição: \n'TYPE_TICKET', 'TYPE_TIME', 'TYPE_TIME_MSC', 'TYPE_TIME_UPDATE', 'TYPE_TIME_UPDATE_MSC', 'TYPE_TYPE', 'TYPE_MAGIC', 'TYPE_IDENTIFIER', 'TYPE_REASON'",
      },
   ],
   ["ENUM_POS_STRING", { desc: "Representa propriedade de uma posição: \n'TYPE_SYMBOL', 'TYPE_COMMENT', 'TYPE_EXTERNAL_ID'" }],
   [
      "ENUM_ORDER_DOUBLE",
      {
         desc: "Representa propriedade de uma ordem: \n'TYPE_VOLUME_INITIAL', 'TYPE_VOLUME', 'TYPE_OPEN', 'TYPE_SL', 'TYPE_TP', 'TYPE_CURRENT', 'TYPE_STOP_LIMIT'",
      },
   ],
   [
      "ENUM_ORDER_INT",
      {
         desc: "Representa propriedade de uma ordem: \n'TYPE_TICKET', 'TYPE_TIME_SETUP', 'TYPE_TYPE', 'TYPE_STATE', 'TYPE_TIME_EXPIRATION', 'TYPE_TIME_DONE', 'TYPE_TIME_SETUP_MSC', 'TYPE_TIME_DONE_MSC', 'TYPE_FILLING', 'TYPE_TIME', 'TYPE_MAGIC', 'TYPE_REASON', 'TYPE_POSITION_ID', 'TYPE_POSITION_BY_ID'",
      },
   ],
   ["ENUM_ORDER_STRING", { desc: "Representa propriedade de uma ordem: \n'TYPE_SYMBOL', 'TYPE_COMMENT'" }],
   ["ENUM_MARKET_ACTION", { desc: "Representa o tipo de fechamento: \n'TYPE_IN', 'TYPE_OUT', 'TYPE_ALL'." }],
   ["ENUM_MARKET_GET", { desc: "Representa o tipo de retorno: \n'TYPE_POSITIVE', 'TYPE_NEGATIVE', 'TYPE_ALL'." }],
   ["ENUM_TRADE_MODIFY", { desc: "Representa o tipo de modificação: \n'TYPE_PRICE', 'TYPE_POINT'." }],
]);

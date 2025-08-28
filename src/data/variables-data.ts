import { ENUM_VARIABLE_CATEGORY_TYPE } from "@src/enums/variable-enums";
import type { VariablePlaceholderInterface } from "@src/interfaces/placeholder-interface";

export const VARIABLE_MAPPING: Map<ENUM_VARIABLE_CATEGORY_TYPE, Map<string, VariablePlaceholderInterface>> = new Map();

[
   // Local Position
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TICKET",
      aliases: "",
      description: {
         simple: "Retorna o ticket do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_REQUEST",
      aliases: "",
      description: {
         simple: "Retorna o ticket de solicitação do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PARENT",
      aliases: "",
      description: {
         simple: "Retorna o ticket da ordem-mãe, se houver.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_MAGIC",
      aliases: "",
      description: {
         simple: "Retorna o magic number do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_SYMBOL",
      aliases: "",
      description: {
         simple: "Retorna o ativo no qual o pedido foi criado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TIME",
      aliases: "",
      description: {
         simple: "Retorna o horário de abertura do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PRICE",
      aliases: "",
      description: {
         simple: "Retorna o preço de abertura do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_SL",
      aliases: "",
      description: {
         simple: "Retorna o preço do stop loss do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TP",
      aliases: "",
      description: {
         simple: "Retorna o preço do take profit do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PROFIT",
      aliases: "",
      description: {
         simple: "Retorna o lucro atual da posição.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_VOLUME",
      aliases: "",
      description: {
         simple: "Retorna o volume atual do pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_UPTIME",
      aliases: "",
      description: {
         simple: "Retorna o tempo, em segundos, que o pedido está aberto.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TYPE",
      aliases: "",
      description: {
         simple: "Retorna o tipo do pedido (0 = Compra, 1 = Venda).",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_COMMENT",
      aliases: "",
      description: {
         simple: "Retorna o comentário associado ao pedido.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_CHILD",
      aliases: "",
      description: {
         simple: "Retorna se o pedido é filho de outra posição.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_CLIENT",
      aliases: "",
      description: {
         simple: "Retorna se o pedido foi adicionado usando expressões lógicas (como Buy(), Sell(), etc.).",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_SA",
      aliases: "",
      description: {
         simple: "Retorna se o pedido foi adicionado pelo subsistema de Preço Médio Simples.",
      },
   },

   //Local Trigger
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_TYPE",
      aliases: "",
      description: {
         simple: "Retorna o tipo do gatilho. (0 = Compra, 1 = Venda)",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_IS_OPERATION",
      aliases: "",
      description: {
         simple: "Retorna se o gatilho é uma operação boleana.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_OPERATION",
      aliases: "",
      description: {
         simple: "Retorna o resultado da operação. (0 = Falso, 1 = Verdadeiro)",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_PRICE",
      aliases: "",
      description: {
         simple: "Retorna o preço do gatilho, caso ele seja um gatilho de preço.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_WEIGHT_MIN",
      aliases: "",
      description: {
         simple: "Retorna o peso mínimo do filtro.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_WEIGHT_VALIDATE",
      aliases: "",
      description: {
         simple: "Retorna o peso total validado do filtro.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros validados.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS_COM",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros complementares validados.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS_REQ",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros obrigatórios validados.",
      },
   },

   // ACCOUNT
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "BALANCE",
      aliases: "BAL",
      description: {
         simple: "Retorna o saldo da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "CREDIT",
      aliases: "CRED",
      description: {
         simple: "Retorna o crédito da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "EQUITY",
      aliases: "EQT",
      description: {
         simple: "Retorna o patrimônio líquido da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN",
      aliases: "",
      description: {
         simple: "Retorna a margem da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_FREE",
      aliases: "MARGF",
      description: {
         simple: "Retorna a margem livre da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_LEVEL",
      aliases: "MARGL",
      description: {
         simple: "Retorna o nível de margem da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_INITIAL",
      aliases: "MARGI",
      description: {
         simple: "Retorna a margem inicial da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_MAINTENANCE",
      aliases: "MARGM",
      description: {
         simple: "Retorna a margem de manutenção da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "LOGIN",
      aliases: "",
      description: {
         simple: "Retorna o número da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "NAME",
      aliases: "",
      description: {
         simple: "Retorna o nome do titular da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "SERVER",
      aliases: "SRV",
      description: {
         simple: "Retorna o servidor da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "CURRENCY",
      aliases: "CURR",
      description: {
         simple: "Retorna a moeda da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "COMPANY",
      aliases: "COMP",
      description: {
         simple: "Retorna a empresa/corretora da conta.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "LIMIT_ORDER",
      aliases: "LIMITO",
      description: {
         simple: "Retorna o limite máximo de ordens da conta.",
      },
   },

   // MARKET
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TOTAL_CANDLE",
      aliases: "TCANDLE",
      description: {
         simple: "Retorna o total de candles.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_LEFT",
      aliases: "TLEFT",
      description: {
         simple: "Retorna o tempo restante.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_CURRENT",
      aliases: "TCURRENT",
      description: {
         simple: "Retorna o tempo atual.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_LOCAL",
      aliases: "TLOCAL",
      description: {
         simple: "Retorna o tempo local.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_SERVER",
      aliases: "TSERVER",
      description: {
         simple: "Retorna o tempo do servidor.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "DAY_OF_WEEK",
      aliases: "DAYW",
      description: {
         simple: "Retorna o dia da semana.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "DAY_OF_YEAR",
      aliases: "DAYY",
      description: {
         simple: "Retorna o dia do ano.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "MONTH",
      aliases: "",
      description: {
         simple: "Retorna o mês atual.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "YEAR",
      aliases: "",
      description: {
         simple: "Retorna o ano atual.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST",
      aliases: "",
      description: {
         simple: "Retorna o último preço comercializado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_HIGH",
      aliases: "LASTH",
      description: {
         simple: "Retorna a máxima do dia.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_LOW",
      aliases: "LASTL",
      description: {
         simple: "Retorna a mínima do dia.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_TIME",
      aliases: "LASTT",
      description: {
         simple: "Retorna o último tempo comercializado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK",
      aliases: "",
      description: {
         simple: "Retorna o preço de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK_HIGH",
      aliases: "ASKH",
      description: {
         simple: "Retorna o preço máximo de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK_LOW",
      aliases: "ASKL",
      description: {
         simple: "Retorna o preço mínimo de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID",
      aliases: "",
      description: {
         simple: "Retorna o preço de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID_HIGH",
      aliases: "BIDH",
      description: {
         simple: "Retorna o preço máximo de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID_LOW",
      aliases: "BIDL",
      description: {
         simple: "Retorna o preço mínimo de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "SYMBOL",
      aliases: "",
      description: {
         simple: "Retorna o ativo que o robô está operando.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "MAGIC",
      aliases: "",
      description: {
         simple: "Retorna o id (magic number) que o robô está operando.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "REAL",
      aliases: "",
      description: {
         simple: "Retorna o ativo real, o ativo que as ordens serão executadas.",
      },
   },

   // OPEN TRADES
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_VOLUME_OPEN",
      aliases: "AVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_VOLUME_OPEN",
      aliases: "BVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_VOLUME_OPEN",
      aliases: "SVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_POS_OPEN",
      aliases: "APOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_POS_OPEN",
      aliases: "BPOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_POS_OPEN",
      aliases: "SPOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_OPEN",
      aliases: "AOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos, tanto de posições quanto de ordens.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_OPEN",
      aliases: "BOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_OPEN",
      aliases: "SOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_PROFIT_OPEN",
      aliases: "APROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_PROFIT_OPEN",
      aliases: "BPROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições de compra abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_PROFIT_OPEN",
      aliases: "SPROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições de venda abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_ORDER_OPEN",
      aliases: "AORDERO",
      description: {
         simple: "Retorna a quantidade de ordens abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_ORDER_OPEN",
      aliases: "BORDERO",
      description: {
         simple: "Retorna a quantidade de ordens de compra abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_ORDER_OPEN",
      aliases: "SORDERO",
      description: {
         simple: "Retorna a quantidade de ordens de venda abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_AVG_PRICE",
      aliases: "AAVG",
      description: {
         simple: "Retorna o preço médio de todas as posições abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_AVG_DIR",
      aliases: "AAVGDIR",
      description: {
         simple: "Retorna a direção média das posições abertas. (-1 = Venda, 0 = Equilíbrio e 1 = Compra).",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_AVG_PRICE",
      aliases: "BAVG",
      description: {
         simple: "Retorna o preço médio das posições de compra abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_AVG_DIR",
      aliases: "BAVGDIR",
      description: {
         simple: "Retorna a direção média das posições de compra abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_AVG_PRICE",
      aliases: "SAVG",
      description: {
         simple: "Retorna o preço médio das posições de venda abertas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_AVG_DIR",
      aliases: "SAVGDIR",
      description: {
         simple: "Retorna a direção média das posições de venda abertas.",
      },
   },
   // CLOSED TRADES
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_VOLUME",
      aliases: "AVOL",
      description: { simple: "Retorna a soma total do volume." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_VOLUME",
      aliases: "BVOL",
      description: { simple: "Retorna a soma do volume de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_VOLUME",
      aliases: "SVOL",
      description: { simple: "Retorna a soma do volume de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_PROFIT",
      aliases: "APROFIT",
      description: { simple: "Retorna o total do lucro." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_PROFIT",
      aliases: "BPROFIT",
      description: { simple: "Retorna o total do lucro de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_PROFIT",
      aliases: "SPROFIT",
      description: { simple: "Retorna o total do lucro de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_GAIN_PROFIT",
      aliases: "AGAINP",
      description: {
         simple: "Retorna o total de profit ganho ignorando as perdas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_GAIN_PROFIT",
      aliases: "BGAINP",
      description: {
         simple: "Retorna o total de profit ganho em compras ignorando as perdas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_GAIN_PROFIT",
      aliases: "SGAINP",
      description: {
         simple: "Retorna o total de profit ganho em vendas ignorando as perdas.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_LOSS_PROFIT",
      aliases: "ALOSSP",
      description: {
         simple: "Retorna o total de profit perdido ignorando os ganhos.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_LOSS_PROFIT",
      aliases: "BLOSSP",
      description: {
         simple: "Retorna o total de profit perdido em compras ignorando os ganhos.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_LOSS_PROFIT",
      aliases: "SLOSSP",
      description: {
         simple: "Retorna o total de profit perdido em vendas ignorando os ganhos.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_POS",
      aliases: "APOS",
      description: { simple: "Retorna o total de posições." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_POS",
      aliases: "BPOS",
      description: { simple: "Retorna o total de posições de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_POS",
      aliases: "SPOS",
      description: { simple: "Retorna o total de posições de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_GAIN",
      aliases: "AGAIN",
      description: { simple: "Retorna o total de vitorias." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_GAIN",
      aliases: "BGAIN",
      description: { simple: "Retorna o total de vitorias de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_GAIN",
      aliases: "SGAIN",
      description: { simple: "Retorna o total de vitorias de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_LOSS",
      aliases: "ALOSS",
      description: { simple: "Retorna o total de derrotas." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_LOSS",
      aliases: "BLOSS",
      description: { simple: "Retorna o total de derrotas de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_LOSS",
      aliases: "SLOSS",
      description: { simple: "Retorna o total de derrotas de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_COMMISSION",
      aliases: "ACOMM",
      description: { simple: "Retorna o total de comissões." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_COMMISSION",
      aliases: "BCOMM",
      description: { simple: "Retorna o total de comissões de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_COMMISSION",
      aliases: "SCOMM",
      description: { simple: "Retorna o total de comissões de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_SWAP",
      aliases: "ASWAP",
      description: { simple: "Retorna o total de trocas." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_SWAP",
      aliases: "BSWAP",
      description: { simple: "Retorna o total de trocas de compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_SWAP",
      aliases: "SSWAP",
      description: { simple: "Retorna o total de trocas de venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET",
      aliases: "",
      description: { simple: "Retorna o ticket da ultima posição." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET_BUY",
      aliases: "TICKETB",
      description: { simple: "Retorna o ticket da ultima compra." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET_SELL",
      aliases: "TICKETS",
      description: { simple: "Retorna o ticket da ultima venda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET",
      aliases: "GTICKET",
      description: { simple: "Retorna o ticket da ultima posição com ganho." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET_BUY",
      aliases: "GTICKETB",
      description: { simple: "Retorna o ticket da ultima compra com ganho." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET_SELL",
      aliases: "GTICKETS",
      description: { simple: "Retorna o ticket da ultima venda com ganho." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET",
      aliases: "LTICKET",
      description: { simple: "Retorna o ticket da ultima posição com perda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET_BUY",
      aliases: "LTICKETB",
      description: { simple: "Retorna o ticket da ultima compra com perda." },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET_SELL",
      aliases: "LTICKETS",
      description: { simple: "Retorna o ticket da ultima venda com perda." },
   },

   // SIGNAL
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TOTAL",
      aliases: "SIGTT",
      description: {
         simple: "Retorna a soma de todos os sinais do dia.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_BUY",
      aliases: "SIGB",
      description: {
         simple: "Retorna a soma de sinais de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_SELL",
      aliases: "SIGS",
      description: {
         simple: "Retorna a soma de sinais de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_LAST",
      aliases: "SIGL",
      description: {
         simple: "Retorna o tipo do último sinal. (-1 = Nenhum, 0 = Compra, 1 = Venda)",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME",
      aliases: "SIGT",
      description: {
         simple: "Retorna a hora do último sinal.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_BUY",
      aliases: "SIGTB",
      description: {
         simple: "Retorna a hora do último sinal de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_SELL",
      aliases: "SIGTS",
      description: {
         simple: "Retorna a hora do último sinal de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE",
      aliases: "SIGP",
      description: {
         simple: "Retorna o preço do último sinal.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_BUY",
      aliases: "SIGPB",
      description: {
         simple: "Retorna o preço do último sinal de compra.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_SELL",
      aliases: "SIGPS",
      description: {
         simple: "Retorna o preço do último sinal de venda.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TOTAL_CONFIRM",
      aliases: "SIGTC",
      description: {
         simple: "Retorna a soma de sinais confirmados.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_LAST_CONFIRM",
      aliases: "SIGLC",
      description: {
         simple: "Retorna o tipo do último sinal confirmado. (-1 = Nenhum, 0 = Compra, 1 = Venda)",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_BUY_CONFIRM",
      aliases: "SIGBC",
      description: {
         simple: "Retorna a soma de sinais de compra confirmados.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_SELL_CONFIRM",
      aliases: "SIGSC",
      description: {
         simple: "Retorna a soma de sinais de venda confirmados.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_LAST_CONFIRM",
      aliases: "SIGTLC",
      description: {
         simple: "Retorna a hora do último sinal confirmado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_BUY_CONFIRM",
      aliases: "SIGTBC",
      description: {
         simple: "Retorna a hora do último sinal de compra confirmado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_SELL_CONFIRM",
      aliases: "SIGTSC",
      description: {
         simple: "Retorna a hora do último sinal de venda confirmado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_LAST_CONFIRM",
      aliases: "SIGPLC",
      description: {
         simple: "Retorna o preço do último sinal confirmado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_BUY_CONFIRM",
      aliases: "SIGPBC",
      description: {
         simple: "Retorna o preço do último sinal de compra confirmado.",
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_SELL_CONFIRM",
      aliases: "SIGPSC",
      description: {
         simple: "Retorna o preço do último sinal de venda confirmado.",
      },
   },
].forEach((fn: VariablePlaceholderInterface) => {
   const existing = VARIABLE_MAPPING.get(fn.category);
   if (!existing) {
      VARIABLE_MAPPING.set(fn.category, new Map([[fn.name, fn]]));
   } else {
      existing.set(fn.name, fn);
   }
});

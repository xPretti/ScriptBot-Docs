import { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";
import type { FunctionModel } from "../interfaces/functions-interface";

export const FUNCTION_MAPPING: Map<
   ENUM_FUNCTION_CATEGORY_TYPE,
   Map<string, FunctionModel>
> = new Map();

[
   // {
   //    category: {
   //       type: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
   //       label: "Indicadores",
   //    },
   //    name: "Teste12",
   //    aliases: "T1",
   //    description: {
   //       simple: "Retorna o nome Teste",
   //       complex:
   //          "Esta função retorna o nome Teste e retorna o nome Invalid em caso de erro.",
   //    },
   //    parameters: [
   //       {
   //          type: {
   //             type: "string",
   //             typeLink: "/fundamentals/types",
   //          },
   //          name: "param1",
   //          comment: "Primeiro parâmetro",
   //       },
   //       {
   //          type: {
   //             type: "string",
   //             typeLink: "/fundamentals/types",
   //          },
   //          name: "param2",
   //          comment: "Segundo parâmetro",
   //          value: "666",
   //       },
   //    ],
   //    examples: [
   //       "```js\nTeste1[Param1, Param2]\n```",
   //       "```js\nT1[Param1]\n```",
   //    ],
   //    returns: {
   //       success: {
   //          message: "Em caso de sucesso retorno o nome Teste",
   //          type: {
   //             type: "string",
   //             typeLink: "/fundamentals/types",
   //          },
   //       },
   //       error: {
   //          message: "Em caso de erro retorno o nome Invalid",
   //          type: {
   //             type: "string",
   //             typeLink: "/fundamentals/types",
   //          },
   //       },
   //    },
   // },

   // DEBUGS
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS,
      name: "Log",
      aliases: "",
      description: {
         simple: "Imprime um texto nas Logs do ScriptBot",
         complex:
            "Esta função é usada para imprimir um texto nas Logs do ScriptBot, ela é útil quando queremos separar textos de debug das Logs do Metatrader.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "text1",
            comment: "Texto a ser impresso.",
         },
         {
            type: {
               type: "string",
            },
            name: "text2",
            comment:
               "Segundo parametro de texto que será concatenado ao primeiro.",
            value: '""',
         },
         {
            type: {
               type: "string",
            },
            name: "text...63",
            comment:
               "Outro parametro de texto que será concatenado, máximo de 63 parametros.",
            value: '""',
         },
      ],
      examples: [
         'Log["Hello World!"]',
         'Log["Symbol: ", SYMBOL, " CurrentTime: ", TIME_CURRENT]',
      ],
      returns: {
         success: {
            message:
               "Retorna um valor boolean (true) em caso de sucesso de execução.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um valor boolean (false) em caso de erro de execução.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS,
      name: "Print",
      aliases: "",
      description: {
         simple: "Imprime um texto nas logs do Metatrader",
         complex:
            "Esta função é usada para imprimir um texto nas logs do Metatrader, muito utilizada para depurar o código.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "text1",
            comment: "Texto a ser impresso.",
         },
         {
            type: {
               type: "string",
            },
            name: "text2",
            comment:
               "Segundo parametro de texto que será concatenado ao primeiro.",
            value: '""',
         },
         {
            type: {
               type: "string",
            },
            name: "text...63",
            comment:
               "Outro parametro de texto que será concatenado, máximo de 63 parametros.",
            value: '""',
         },
      ],
      examples: [
         'Print["Hello World!"]',
         'Print["Symbol: ", SYMBOL, " CurrentTime: ", TIME_CURRENT]',
      ],
      returns: {
         success: {
            message:
               "Retorna um valor boolean (true) em caso de sucesso de execução.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um valor boolean (false) em caso de erro de execução.",
            type: {
               type: "bool",
            },
         },
      },
   },
   // INDICATORS
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "Indicator",
      aliases: "IND",
      description: {
         simple: "Retorna o valor do buffer de um indicador",
         complex:
            "Esta função acessa diretamente o buffer de um indicador e retorna os valores armazenados, permitindo a leitura dos dados calculados pelo indicador em cada barra do gráfico.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "id",
            comment: "Categoria que o indicador esta instalado.",
            value: "0",
         },
         {
            type: {
               type: "uint",
            },
            name: "buffer",
            comment: "Buffer do indicador que armazena o valor.",
            value: "0",
         },
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referância para obter o preço do indicador.",
            value: "0",
         },
      ],
      examples: ["CLOSE[1] <= IND[7, 0, 1] && CLOSE[0] >= IND[7, 1, 1]"],
      returns: {
         success: {
            message: "Retorna o valor do buffer do indicador do tipo double.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "Indicator'X'",
      aliases: "IND'X'",
      description: {
         simple: "Retorna o valor do buffer de um indicador",
         complex:
            "Esta função acessa diretamente o buffer de um indicador e retorna os valores armazenados, permitindo a leitura dos dados calculados pelo indicador em cada barra do gráfico. Esta função é prefixada, sendo necessário substituir o 'x' por um valor entre 0 e 20, onde 'x' representa a categoria em que o indicador está configurado nas definições do robô.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "buffer",
            comment: "Buffer do indicador que armazena o valor.",
            value: "0",
         },
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referância para obter o preço do indicador.",
            value: "0",
         },
      ],
      examples: [
         "IND1[buffer, candle]",
         "CLOSE[1] <= IND7[0, 1] && CLOSE[0] >= IND7[1, 1]",
      ],
      returns: {
         success: {
            message: "Retorna o valor do buffer do indicador do tipo double.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   // USER VARIABLES
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ClearDouble",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetDouble["Count"] >= 10 -> ClearDouble[];'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ClearInt",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetInt["Count"] >= 10 -> ClearInt[];'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ClearString",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetInt["Count"] >= 10 -> ClearString[];'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "CreateDouble",
      aliases: "",
      description: {
         simple: "Cria uma variável caso ela não exista",
         complex: "Esta função permite criar uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['CreateDouble["Name", 777]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "CreateInt",
      aliases: "",
      description: {
         simple: "Cria uma variável caso ela não exista",
         complex: "Esta função permite criar uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "long",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['CreateInt["Name", 777]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "CreateString",
      aliases: "",
      description: {
         simple: "Cria uma variável caso ela não exista",
         complex: "Esta função permite criar uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "string",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['CreateString["Name", "my text"]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "GetDouble",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário",
         complex:
            "Esta função retorna o valor de uma variável criada pelo usuário.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['GetDouble["Name"'],
      returns: {
         success: {
            message: "Retorna o valor armazenado na variável.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna '0.0' caso a variável não exista.",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "GetInt",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário",
         complex:
            "Esta função retorna o valor de uma variável criada pelo usuário.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['GetInt["Name"'],
      returns: {
         success: {
            message: "Retorna o valor armazenado na variável.",
            type: {
               type: "long",
            },
         },
         error: {
            message: "Retorna '0' caso a variável não exista.",
            type: {
               type: "long",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "GetString",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário",
         complex:
            "Esta função retorna o valor de uma variável criada pelo usuário.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['GetString["Name"'],
      returns: {
         success: {
            message: "Retorna o valor armazenado na variável.",
            type: {
               type: "string",
            },
         },
         error: {
            message: "Retorna valor vazio caso a variável não exista.",
            type: {
               type: "string",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "RemoveDouble",
      aliases: "",
      description: {
         simple: "Remove uma variável caso ela exista",
         complex: "Esta função permite remover uma variável caso ela exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['RemoveDouble["Name"'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi removida..",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "RemoveInt",
      aliases: "",
      description: {
         simple: "Remove uma variável caso ela exista",
         complex: "Esta função permite remover uma variável caso ela exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['RemoveInt["Name"'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi removida..",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "RemoveString",
      aliases: "",
      description: {
         simple: "Remove uma variável caso ela exista",
         complex: "Esta função permite remover uma variável caso ela exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
      ],
      examples: ['RemoveString["Name"'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi removida..",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ReplaceDouble",
      aliases: "",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista",
         complex:
            "Esta função permite substituir o valor de uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['ReplaceDouble["Name", 888]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ReplaceInt",
      aliases: "",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista",
         complex:
            "Esta função permite substituir o valor de uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "long",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['ReplaceInt["Name", 888]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "ReplaceString",
      aliases: "",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista",
         complex:
            "Esta função permite substituir o valor de uma variável caso não exista.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "string",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['ReplaceString["Name", "my other text"]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi criada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "SetDouble",
      aliases: "",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova",
         complex:
            "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['SetDouble["Name", 777]'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "SetInt",
      aliases: "",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova",
         complex:
            "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "long",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['SetInt["Name", 777]'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
      name: "SetString",
      aliases: "",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova",
         complex:
            "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "variable",
            comment: "Nome da variável.",
         },
         {
            type: {
               type: "string",
            },
            name: "value",
            comment: "Valor da variável.",
         },
      ],
      examples: ['SetString["Name", "my other text"]'],
      returns: {
         success: {
            message:
               "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message:
               "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   //CANDLE
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Open",
      aliases: "O",
      description: {
         simple: "Retorna o preço de abertura de uma vela",
         complex: "Esta função retorna o preço de abertura de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["Open[1]", 'Open[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Close",
      aliases: "C",
      description: {
         simple: "Retorna o preço de fechamento de uma vela",
         complex: "Esta função retorna o preço de fechamento de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["Close[1]", 'Close[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "High",
      aliases: "H",
      description: {
         simple: "Retorna o preço da máxima de uma vela",
         complex: "Esta função retorna o preço da máxima de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["High[1]", 'High[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Low",
      aliases: "L",
      description: {
         simple: "Retorna o preço da mínima de uma vela",
         complex: "Esta função retorna o preço da mínima de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["Low[1]", 'Low[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0.0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Time",
      aliases: "T",
      description: {
         simple: "Retorna o horário de abertura de uma vela",
         complex: "Esta função retorna o horário de abertura de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["Time[1]", 'Time[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o horário da vela.",
            type: {
               type: "uint",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo uint (0).",
            type: {
               type: "uint",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Direction",
      aliases: "DIR",
      description: {
         simple:
            "Retorna a direção de uma vela (-1 = Negativa, 0 = Neutra, 1 = Positiva)",
         complex:
            "Esta função retorna a direção simplificada de uma vela, ou seja, se a vela é positiva ou negativa. (-1 = Negativa, 0 = Neutra, 1 = Positiva)",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: [
         "Direction[1]",
         'Direction[1, M5, "EURUSD"]',
         "DIR[1] == 1 // Check if the candle is positive/buying",
      ],
      returns: {
         success: {
            message: "Retorna a direção da vela.",
            type: {
               type: "int",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo int (0).",
            type: {
               type: "int",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Spread",
      aliases: "SPD",
      description: {
         simple: "Retorna a quantidade de spread de uma vela",
         complex: "Esta função retorna a quantidade de spread de uma vela.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["Spread[1]", 'Spread[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o spread da vela.",
            type: {
               type: "int",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo int (0).",
            type: {
               type: "int",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "Candle",
      aliases: "",
      description: {
         simple: "Retorna o index da vela",
         complex:
            "Esta função retorna o identificador da vela, usado para obter o index utilizando o horário especificado.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "timeSeconds",
            comment: "O horário em segundos.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: [
         "Candle[1]",
         'Candle[1, M5, "EURUSD"]',
         'Candle[ToTime["13:00"]] // How to get the candle at 13:00 of the day',
         "Candle[TIME_CURRENT-300] // How to get the last 5 minutes candles index",
      ],
      returns: {
         success: {
            message: "Retorna o index da vela.",
            type: {
               type: "int",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo int (0).",
            type: {
               type: "int",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "MaxHigh",
      aliases: "MaxH",
      description: {
         simple: "Retorna o preço máximo entre duas posições de velas",
         complex:
            "Esta função retorna o maior preço entre duas posições. Ela realiza uma varredura do índice inicial até o índice final, identificando e retornando o preço da maior vela encontrada nesse intervalo.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "startIndex",
            comment: "O index da primeira vela de referência.",
         },
         {
            type: {
               type: "uint",
            },
            name: "endIndex",
            comment: "O index da ultima vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["MaxHigh[0, 20]", 'MaxHigh[0, 20, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da maior vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "MaxLow",
      aliases: "MaxL",
      description: {
         simple: "Retorna o preço mínimo entre duas posições de velas",
         complex:
            "Esta função retorna o menor preço entre duas posições. Ela realiza uma varredura do índice inicial até o índice final, identificando e retornando o preço da menor vela encontrada nesse intervalo.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "startIndex",
            comment: "O index da primeira vela de referência.",
         },
         {
            type: {
               type: "uint",
            },
            name: "endIndex",
            comment: "O index da ultima vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["MaxLow[0, 20]", 'MaxLow[0, 20, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o preço da menor vela.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "TickVolume",
      aliases: "TICKV",
      description: {
         simple: "Retorna o volume de uma vela",
         complex:
            "Esta função retorna o volume de uma vela com base nos dados de tick.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["TickVolume[1]", 'TickVolume[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o volume da vela.",
            type: {
               type: "long",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo long (0).",
            type: {
               type: "long",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
      name: "RealVolume",
      aliases: "REALV",
      description: {
         simple: "Retorna o volume de uma vela usando os dados reais",
         complex:
            "Esta função retorna o volume de uma vela com base em dados reais. Em alguns mercados, no entanto, o volume pode ser constantemente zero devido à ausência de dados de volume no feed de dados, seja por limitações da corretora, do tipo de ativo (como forex, que muitas vezes não fornece volume real), ou pela forma como o volume é calculado e disponibilizado.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "candle",
            comment: "A vela de referência.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["TickVolume[1]", 'TickVolume[1, M5, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o volume da vela.",
            type: {
               type: "long",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo long (0).",
            type: {
               type: "long",
            },
         },
      },
   },
   // MATH
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Median",
      aliases: "Med",
      description: {
         simple: "Retorna a media entre dois valores",
         complex: "Esta função retorna a media entre dois valores.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "first",
            comment: "O primeiro valor.",
         },
         {
            type: {
               type: "double",
            },
            name: "second",
            comment: "O segundo valor.",
         },
      ],
      examples: ["Median[749, 750]"],
      returns: {
         success: {
            message: "Retorna o preço médio entre os dois valores.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "TickToPoint",
      aliases: "TickTP",
      description: {
         simple: "Retorna o valor de tick convertido em pontos",
         complex: "Esta função retorna o valor de tick convertido em pontos.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor que será calculado.",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["TickToPoint[50]", 'TickToPoint[50, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o valor de tick convertido.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "MoneyToPoint",
      aliases: "MoneyTP",
      description: {
         simple: "Retorna o valor na moeda convertida em pontos",
         complex: "Esta função retorna o valor na moeda convertida em pontos.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor que será calculado.",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["MoneyToPoint[50]", 'MoneyToPoint[50, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o valor de tick convertido.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "PipToPoint",
      aliases: "PipTP",
      description: {
         simple: "Retorna o valor do pip convertido em pontos",
         complex: "Esta função retorna o valor do pip convertido em pontos.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor que será calculado.",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: ["PipToPoint[50]", 'PipToPoint[50, "EURUSD"]'],
      returns: {
         success: {
            message: "Retorna o valor de tick convertido.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "CountStep",
      aliases: "Count",
      description: {
         simple: "Retorna a quantidade de passos que ocorreram",
         complex:
            "Esta função calcula a quantidade de passos realizados e arredonda o resultado para o inteiro mais próximo de zero.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "step",
            comment: "O valor do passo.",
         },
      ],
      examples: ["CountStep[50, 2]"],
      returns: {
         success: {
            message: "Retorna a quantidade de passos.",
            type: {
               type: "uint",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo uint (0).",
            type: {
               type: "uint",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "CountStepGradual",
      aliases: "CountGrad",
      description: {
         simple:
            "Retorna a quantidade de passos que ocorreram de forma gradual",
         complex:
            "Esta função calcula a quantidade de passos realizados de forma gradual e arredonda o resultado para o inteiro mais próximo de zero.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "step",
            comment: "O valor do passo.",
         },
         {
            type: {
               type: "double",
            },
            name: "multiplier",
            comment: "O valor do multiplicador.",
            value: "1.0",
         },
      ],
      examples: ["CountStepGradual[50, 2]"],
      returns: {
         success: {
            message: "Retorna a quantidade de passos.",
            type: {
               type: "uint",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo uint (0).",
            type: {
               type: "uint",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Division",
      aliases: "Divi",
      description: {
         simple:
            "Retorna a divisão entre dois valores, permitindo que o denominador seja zero",
         complex:
            "Esta função retorna a divisão entre dois valores, permitindo que o denominador seja zero e evitando divisões por zero.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "divisor",
            comment: "O valor do denominador.",
         },
      ],
      examples: ["Division[50, 2]"],
      returns: {
         success: {
            message: "Retorna o resultado da divisão.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "RestDivision",
      aliases: "RDivi",
      description: {
         simple:
            "Retorna o resto da divisão entre dois valores, permitindo que o denominador seja zero",
         complex:
            "Esta função retorna o resto da divisão entre dois valores, permitindo que o denominador seja zero e evitando divisões por zero.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "divisor",
            comment: "O valor do denominador.",
         },
      ],
      examples: ["RestDivision[50, 2]"],
      returns: {
         success: {
            message: "Retorna o resto da divisão.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Percent",
      aliases: "",
      description: {
         simple:
            "Retorna a variação percentual de value até target, com value sendo o valor base",
         complex:
            "Esta função retorna a variação percentual de value até target, com value sendo o valor base.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "target",
            comment: "O valor do alvo.",
         },
      ],
      examples: ["Percent[100, 120] // 20%", "Percent[100, 50] // -50%"],
      returns: {
         success: {
            message: "Retorna a variação percentual.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "PercentOfValue",
      aliases: "PercentValue",
      description: {
         simple: "Retorna a quantidade percentual de um valor",
         complex: "Esta função retorna a quantidade percentual de um valor.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor base.",
         },
         {
            type: {
               type: "double",
            },
            name: "percent",
            comment: "O valor percentual que será retornado.",
         },
      ],
      examples: [
         "PercentOfValue[100, 20] // Return 20.0",
         "PercentOfValue[200, 50] // Return 100.0",
      ],
      returns: {
         success: {
            message: "Retorna a quantidade percentual.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "HitPercent",
      aliases: "",
      description: {
         simple: "Retorna a quantidade percentual de acerto",
         complex:
            "Esta função retorna a quantidade percentual de acerto entre gain e loss. A variação sempre será de 0% a 100%.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "gain",
            comment: "O valor de quantidade de ganho.",
         },
         {
            type: {
               type: "double",
            },
            name: "loss",
            comment: "O valor de quantidade de perda.",
         },
      ],
      examples: [
         "HitPercent[30, 70] // Is 30% of hit percent",
         "HitPercent[30, 100] // Is 23,07% of hit percent",
      ],
      returns: {
         success: {
            message: "Retorna a quantidade percentual de acerto.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "CorrectPrice",
      aliases: "FixPrice",
      description: {
         simple: "Retorna o valor correto de um preço",
         complex:
            "Esta função corrige preços inválidos, convertendo-os para valores válidos conforme o passo do mercado.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "price",
            comment: "O valor do preço.",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O simbolo de referência.",
            value: "SYMBOL",
         },
      ],
      examples: [],
      returns: {
         success: {
            message: "Retorna o preço correto do ativo alvo.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Random",
      aliases: "",
      description: {
         simple: "Retorna um valor inteiro aleatório entre dois valores",
         complex:
            "Esta função retorna um valor inteiro aleatório entre dois valores.",
      },
      parameters: [
         {
            type: {
               type: "int",
            },
            name: "min",
            comment: "O valor minimo.",
         },
         {
            type: {
               type: "int",
            },
            name: "max",
            comment: "O valor maximo.",
         },
      ],
      examples: ["Random[0, 1000]"],
      returns: {
         success: {
            message: "Retorna um valor inteiro aleatório entre dois valores.",
            type: {
               type: "int",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo int (0).",
            type: {
               type: "int",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Round",
      aliases: "",
      description: {
         simple: "Retorna o valor arredondado",
         complex: "Esta função retorna o valor arredondado.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor para ser arredondado.",
         },
      ],
      examples: ["Round[10.7] // 11", "Round[10.3] // 10", "Round[Close[0]/2]"],
      returns: {
         success: {
            message: "Retorna o valor arredondado.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "RoundUp",
      aliases: "",
      description: {
         simple: "Retorna o valor arredondado para cima",
         complex:
            "Esta função retorna o valor arredondado para cima, garantindo que o resultado seja sempre o próximo inteiro maior ou igual.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor para ser arredondado.",
         },
      ],
      examples: [
         "RoundUp[10.7] // 11",
         "RoundUp[10.3] // 11",
         "RoundUp[Close[0]/2]",
      ],
      returns: {
         success: {
            message: "Retorna o valor arredondado.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "RoundDown",
      aliases: "",
      description: {
         simple: "Retorna o valor arredondado para baixo",
         complex:
            "Esta função retorna o valor arredondado para baixo, garantindo que o resultado seja sempre o próximo inteiro menor ou igual.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "O valor para ser arredondado.",
         },
      ],
      examples: [
         "RoundDown[10.7] // 10",
         "RoundDown[10.3] // 10",
         "RoundDown[Close[0]/2]",
      ],
      returns: {
         success: {
            message: "Retorna o valor arredondado.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Max",
      aliases: "",
      description: {
         simple: "Retorna o maior valor entre dois números",
         complex:
            "Esta função retorna o maior valor entre dois números fornecidos.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "first",
            comment: "o primeiro valor.",
         },
         {
            type: {
               type: "double",
            },
            name: "second",
            comment: "O segundo valor.",
         },
      ],
      examples: ["Max[10, 20] // 20", "Max[60, 40] // 60"],
      returns: {
         success: {
            message: "Retorna o maior valor.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Min",
      aliases: "",
      description: {
         simple: "Retorna o menor valor entre dois números",
         complex:
            "Esta função retorna o menor valor entre dois números fornecidos.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "first",
            comment: "o primeiro valor.",
         },
         {
            type: {
               type: "double",
            },
            name: "second",
            comment: "O segundo valor.",
         },
      ],
      examples: ["Min[10, 20] // 10", "Min[60, 40] // 40"],
      returns: {
         success: {
            message: "Retorna o menor valor.",
            type: {
               type: "double",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo double (0).",
            type: {
               type: "double",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "IsChance",
      aliases: "Chance",
      description: {
         simple: "Retorna verdadeiro com base em uma chance percentual",
         complex:
            "Esta função retorna verdadeiro com base em uma chance percentual entre 0 e 100. Por exemplo, ao passar 30, há aproximadamente 30% de chance de retornar verdadeiro.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "chance",
            comment: "o valor da chance.",
         },
      ],
      examples: [
         "IsChance[10] // It contains 10% chance of returning true.",
         "IsChance[60]",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro caso a chance seja atingida.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna falso caso a chance não seja atingida.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MATH,
      name: "Decimals",
      aliases: "Decimal",
      description: {
         simple: "Retorna o número de casas decimais de um valor",
         complex:
            "Esta função retorna a quantidade de casas decimais presentes em um número, indicando seu nível de precisão.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "o valor a ser verificado.",
         },
      ],
      examples: ["Decimals[10.00002] // Is 5"],
      returns: {
         success: {
            message: "Retorna a quantidade de casas decimais.",
            type: {
               type: "int",
            },
         },
         error: {
            message: "Retorna o valor padrão zero para o tipo int (0).",
            type: {
               type: "int",
            },
         },
      },
   },
].forEach((fn: FunctionModel) => {
   const existing = FUNCTION_MAPPING.get(fn.category);
   if (!existing) {
      FUNCTION_MAPPING.set(fn.category, new Map([[fn.name, fn]]));
   } else {
      existing.set(fn.name, fn);
   }
});

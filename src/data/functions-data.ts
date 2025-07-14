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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS,
         label: "Depurações",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.DEBUGS,
         label: "Depurações",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
         label: "Indicadores",
      },
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
      examples: [
         "Indicator[id, buffer, candle]",
         "IND[id, buffer, candle]",
         "CLOSE[1] <= IND[7, 0, 1] && CLOSE[0] >= IND[7, 1, 1]",
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
   {
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
         label: "Indicadores",
      },
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
         "Indicator0[buffer, candle]",
         "Indicator10[buffer, candle]",
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
      name: "ClearDouble",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ["ClearDouble[]", 'GetDouble["Count"] >= 10 -> ClearDouble[];'],
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
      name: "ClearInt",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ["ClearInt[]", 'GetInt["Count"] >= 10 -> ClearInt[];'],
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
      name: "ClearString",
      aliases: "",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário",
         complex:
            "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ["ClearString[]", 'GetInt["Count"] >= 10 -> ClearString[];'],
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLES,
         label: "Variáveis de usuário",
      },
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
      examples: ['SetInt["Name", "my other text"]'],
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
      category: {
         type: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
         label: "Velas",
      },
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
            comment: "A vela de referência para obter o preço de abertura.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/fundamentals/mt5-enumerators#timeframes",
            },
            name: "timeframe",
            comment:
               "O tempo gráfico de referência para obter o preço de abertura.",
            value: "0",
         },
         {
            type: {
               type: "string",
            },
            name: "symbol",
            comment: "O ativo de referência para obter o preço de abertura.",
            value: "SYMBOL",
         },
      ],
      examples: [
         "Open[candle, timeframe, symbol]",
         "Open[1]",
         'Open[1, M5, "EURUSD"]',
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
].forEach((fn: FunctionModel) => {
   const existing = FUNCTION_MAPPING.get(fn.category.type);
   if (!existing) {
      FUNCTION_MAPPING.set(fn.category.type, new Map([[fn.name, fn]]));
   } else {
      existing.set(fn.name, fn);
   }
});

import { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";
import type { FunctionPlaceholderInterface } from "../interfaces/placeholder-interface";

export const FUNCTION_MAPPING: Map<ENUM_FUNCTION_CATEGORY_TYPE, Map<string, FunctionPlaceholderInterface>> = new Map();

[
   // DEBUGS
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.DEBUG,
      name: "Log",
      aliases: "",
      description: {
         simple: "Imprime um texto nas Logs do ScriptBot.",
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
            comment: "Segundo parametro de texto que será concatenado ao primeiro.",
            value: '""',
         },
         {
            type: {
               type: "string",
            },
            name: "text...63",
            comment: "Outro parametro de texto que será concatenado, máximo de 63 parametros.",
            value: '""',
         },
      ],
      examples: ['Log["Hello World!"]', 'Log["Symbol: ", SYMBOL, " CurrentTime: ", TIME_CURRENT]'],
      returns: {
         success: {
            message: "Retorna um valor boolean (true) em caso de sucesso de execução.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um valor boolean (false) em caso de erro de execução.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.DEBUG,
      name: "Print",
      aliases: "",
      description: {
         simple: "Imprime um texto nas logs do Metatrader.",
         complex: "Esta função é usada para imprimir um texto nas logs do Metatrader, muito utilizada para depurar o código.",
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
            comment: "Segundo parametro de texto que será concatenado ao primeiro.",
            value: '""',
         },
         {
            type: {
               type: "string",
            },
            name: "text...63",
            comment: "Outro parametro de texto que será concatenado, máximo de 63 parametros.",
            value: '""',
         },
      ],
      examples: ['Print["Hello World!"]', 'Print["Symbol: ", SYMBOL, " CurrentTime: ", TIME_CURRENT]'],
      returns: {
         success: {
            message: "Retorna um valor boolean (true) em caso de sucesso de execução.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um valor boolean (false) em caso de erro de execução.",
            type: {
               type: "bool",
            },
         },
      },
   },
   // INDICATORS
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATOR,
      name: "Indicator",
      aliases: "IND",
      description: {
         simple: "Retorna o valor do buffer de um indicador.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATOR,
      name: "Indicator'X'",
      aliases: "IND'X'",
      description: {
         simple: "Retorna o valor do buffer de um indicador.",
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
      examples: ["IND1[buffer, candle]", "CLOSE[1] <= IND7[0, 1] && CLOSE[0] >= IND7[1, 1]"],
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ClearDouble",
      aliases: "CleDou",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário.",
         complex: "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetDouble["Count"] >= 10 -> ClearDouble[];'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ClearInt",
      aliases: "CleInt",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário.",
         complex: "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetInt["Count"] >= 10 -> ClearInt[];'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ClearString",
      aliases: "CleStr",
      description: {
         simple: "Remove todas as variáveis criadas pelo usuário.",
         complex: "Esta função permite remover todas as variáveis criadas pelo usuário.",
      },
      parameters: [],
      examples: ['GetInt["Count"] >= 10 -> ClearString[];'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se as variáveis foram removidas.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se as variáveis não foram removidas ou não existem.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "CreateDouble",
      aliases: "CreDou",
      description: {
         simple: "Cria uma variável caso ela não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "CreateInt",
      aliases: "CreInt",
      description: {
         simple: "Cria uma variável caso ela não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "CreateString",
      aliases: "CreStr",
      description: {
         simple: "Cria uma variável caso ela não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "GetDouble",
      aliases: "GetDou",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário.",
         complex: "Esta função retorna o valor de uma variável criada pelo usuário.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "GetInt",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário.",
         complex: "Esta função retorna o valor de uma variável criada pelo usuário.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "GetString",
      aliases: "GetStr",
      description: {
         simple: "Retorna o valor de uma variável criada pelo usuário.",
         complex: "Esta função retorna o valor de uma variável criada pelo usuário.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "RemoveDouble",
      aliases: "RemDou",
      description: {
         simple: "Remove uma variável caso ela exista.",
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
            message: "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "RemoveInt",
      aliases: "RemInt",
      description: {
         simple: "Remove uma variável caso ela exista.",
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
            message: "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "RemoveString",
      aliases: "RemStr",
      description: {
         simple: "Remove uma variável caso ela exista.",
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
      examples: ['RemoveString["Name"]'],
      returns: {
         success: {
            message: "Retorna um boolean (true) se a variável foi removida..",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se a variável nao foi removida ou se não existia uma variável com esse nome.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ReplaceDouble",
      aliases: "RepDou",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista.",
         complex: "Esta função permite substituir o valor de uma variável caso não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ReplaceInt",
      aliases: "RepInt",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista.",
         complex: "Esta função permite substituir o valor de uma variável caso não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "ReplaceString",
      aliases: "RepStr",
      description: {
         simple: "Substitui o valor de uma variável caso ela exista.",
         complex: "Esta função permite substituir o valor de uma variável caso não exista.",
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
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou variavel já existente.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "SetDouble",
      aliases: "SetDou",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova.",
         complex: "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
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
            message: "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "SetInt",
      aliases: "",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova.",
         complex: "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
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
            message: "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "SetString",
      aliases: "SetStr",
      description: {
         simple: "Define o valor de uma variável ou cria uma nova.",
         complex: "Esta função define o valor de uma variável. Se a variável não existir, ela será criada, caso já exista, seu valor será substituído.",
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
            message: "Retorna um boolean (true) se a variável foi criada ou atualizada.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna um boolean (false) se a variável não foi criada por conta de um erro ou o valor não foi atualizado.",
            type: {
               type: "bool",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "AddDouble",
      aliases: "AddDou",
      description: {
         simple: "Adiciona um valor double a uma variável existente.",
         complex: "Esta função adiciona um valor double ao valor atual de uma variável. Se a variável não existir, ela será criada com o valor especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável.",
         },
         {
            type: { type: "double" },
            name: "value",
            comment: "Valor double a ser adicionado.",
         },
      ],
      examples: ['AddDouble("saldo", 15.75)'],
      returns: {
         success: {
            message: "Retorna true se o valor foi adicionado/criado com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se ocorrer um erro na operação.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.USER_VARIABLE,
      name: "AddInt",
      aliases: "",
      description: {
         simple: "Adiciona um valor inteiro a uma variável existente.",
         complex: "Esta função adiciona um valor inteiro ao valor atual de uma variável. Se a variável não existir, ela será criada com o valor especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável.",
         },
         {
            type: { type: "int" },
            name: "value",
            comment: "Valor inteiro a ser adicionado.",
         },
      ],
      examples: ['AddInt("contador", 5)'],
      returns: {
         success: {
            message: "Retorna true se o valor foi adicionado/criado com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se ocorrer um erro na operação.",
            type: { type: "bool" },
         },
      },
   },
   //GLOBAL
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "GetGlobal",
      aliases: "GetG",
      description: {
         simple: "Obtém o valor de uma variável global do tipo double.",
         complex: "Esta função retorna o valor armazenado em uma variável global do tipo double. Se a variável não existir, retorna 0.0.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
      ],
      examples: ['GetGlobal("minha_variavel")'],
      returns: {
         success: {
            message: "Retorna o valor double da variável global.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se a variável não existir.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "CreateGlobal",
      aliases: "CreG",
      description: {
         simple: "Cria uma nova variável global do tipo double.",
         complex: "Esta função cria uma nova variável global do tipo double com o valor especificado. Retorna false se a variável já existir.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
         {
            type: { type: "double" },
            name: "value",
            comment: "Valor inicial da variável.",
         },
      ],
      examples: ['CreateGlobal("nova_variavel", 123.45)'],
      returns: {
         success: {
            message: "Retorna true se a variável foi criada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a variável já existir ou ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "ReplaceGlobal",
      aliases: "RepG",
      description: {
         simple: "Substitui o valor de uma variável global existente.",
         complex: "Esta função substitui o valor de uma variável global do tipo double existente. Retorna false se a variável não existir.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
         {
            type: { type: "double" },
            name: "value",
            comment: "Novo valor da variável.",
         },
      ],
      examples: ['ReplaceGlobal("minha_variavel", 678.90)'],
      returns: {
         success: {
            message: "Retorna true se o valor foi substituído com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a variável não existir ou ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "GetGlobalTime",
      aliases: "GetGT",
      description: {
         simple: "Obtém o timestamp do último acesso de uma variável global.",
         complex: "Esta função retorna o timestamp do último acesso (leitura ou escrita) de uma variável global do tipo double.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
      ],
      examples: ['GetGlobalTime("minha_variavel")'],
      returns: {
         success: {
            message: "Retorna o timestamp do último acesso da variável.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a variável não existir.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "SetGlobal",
      aliases: "SetG",
      description: {
         simple: "Define o valor de uma variável global (cria se não existir).",
         complex: "Esta função define o valor de uma variável global do tipo double. Se a variável não existir, ela será criada.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
         {
            type: { type: "double" },
            name: "value",
            comment: "Valor a ser definido.",
         },
      ],
      examples: ['SetGlobal("minha_variavel", 555.55)'],
      returns: {
         success: {
            message: "Retorna true se o valor foi definido com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "AddGlobal",
      aliases: "AddG",
      description: {
         simple: "Adiciona um valor a uma variável global existente.",
         complex: "Esta função adiciona um valor ao valor atual de uma variável global do tipo double. A variável deve existir previamente.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global.",
         },
         {
            type: { type: "double" },
            name: "value",
            comment: "Valor a ser adicionado.",
         },
      ],
      examples: ['AddGlobal("contador", 1.0)'],
      returns: {
         success: {
            message: "Retorna true se o valor foi adicionado com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a variável não existir ou ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "RemoveGlobal",
      aliases: "RemG",
      description: {
         simple: "Remove uma variável global do tipo double.",
         complex: "Esta função remove uma variável global do tipo double do sistema. Retorna false se a variável não existir.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "name",
            comment: "Nome da variável global a ser removida.",
         },
      ],
      examples: ['RemoveGlobal("variavel_antiga")'],
      returns: {
         success: {
            message: "Retorna true se a variável foi removida com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a variável não existir ou ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.GLOBAL_VARIABLE,
      name: "ClearGlobal",
      aliases: "CleG",
      description: {
         simple: "Limpa variáveis globais com um prefixo específico.",
         complex: "Esta função remove todas as variáveis globais do tipo double que começam com o prefixo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "prefix",
            comment: "Prefixo das variáveis a serem removidas.",
         },
      ],
      examples: ['ClearGlobal("temp_")'],
      returns: {
         success: {
            message: "Retorna true se as variáveis foram removidas com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se ocorrer um erro.",
            type: { type: "bool" },
         },
      },
   },
   //CANDLE
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Open",
      aliases: "O",
      description: {
         simple: "Retorna o preço de abertura de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Close",
      aliases: "C",
      description: {
         simple: "Retorna o preço de fechamento de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "High",
      aliases: "H",
      description: {
         simple: "Retorna o preço da máxima de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Low",
      aliases: "L",
      description: {
         simple: "Retorna o preço da mínima de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Time",
      aliases: "T",
      description: {
         simple: "Retorna o horário de abertura de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Direction",
      aliases: "DIR",
      description: {
         simple: "Retorna a direção de uma vela (-1 = Negativa, 0 = Neutra, 1 = Positiva).",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      examples: ["Direction[1]", 'Direction[1, M5, "EURUSD"]', "DIR[1] == 1 // Check if the candle is positive/buying"],
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Spread",
      aliases: "SPD",
      description: {
         simple: "Retorna a quantidade de spread de uma vela.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "Candle",
      aliases: "",
      description: {
         simple: "Retorna o index da vela.",
         complex: "Esta função retorna o identificador da vela, usado para obter o index utilizando o horário especificado.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "MaxHigh",
      aliases: "MaxH",
      description: {
         simple: "Retorna o preço máximo entre duas posições de velas.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "MaxLow",
      aliases: "MaxL",
      description: {
         simple: "Retorna o preço mínimo entre duas posições de velas.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "TickVolume",
      aliases: "TICKV",
      description: {
         simple: "Retorna o volume de uma vela.",
         complex: "Esta função retorna o volume de uma vela com base nos dados de tick.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLE,
      name: "RealVolume",
      aliases: "REALV",
      description: {
         simple: "Retorna o volume de uma vela usando os dados reais.",
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
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico de referência.",
            value: "CURRENT",
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
         simple: "Retorna a media entre dois valores.",
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
         simple: "Retorna o valor de tick convertido em pontos.",
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
         simple: "Retorna o valor na moeda convertida em pontos.",
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
         simple: "Retorna o valor do pip convertido em pontos.",
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
         simple: "Retorna a quantidade de passos que ocorreram.",
         complex: "Esta função calcula a quantidade de passos realizados e arredonda o resultado para o inteiro mais próximo de zero.",
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
         simple: "Retorna a quantidade de passos que ocorreram de forma gradual.",
         complex: "Esta função calcula a quantidade de passos realizados de forma gradual e arredonda o resultado para o inteiro mais próximo de zero.",
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
         simple: "Retorna a divisão entre dois valores, permitindo que o denominador seja zero.",
         complex: "Esta função retorna a divisão entre dois valores, permitindo que o denominador seja zero e evitando divisões por zero.",
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
         simple: "Retorna o resto da divisão entre dois valores, permitindo que o denominador seja zero.",
         complex: "Esta função retorna o resto da divisão entre dois valores, permitindo que o denominador seja zero e evitando divisões por zero.",
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
         simple: "Retorna a variação percentual de value até target, com value sendo o valor base.",
         complex: "Esta função retorna a variação percentual de value até target, com value sendo o valor base.",
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
         simple: "Retorna a quantidade percentual de um valor.",
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
      examples: ["PercentOfValue[100, 20] // Return 20.0", "PercentOfValue[200, 50] // Return 100.0"],
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
         simple: "Retorna a quantidade percentual de acerto.",
         complex: "Esta função retorna a quantidade percentual de acerto entre gain e loss. A variação sempre será de 0% a 100%.",
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
      examples: ["HitPercent[30, 70] // Is 30% of hit percent", "HitPercent[30, 100] // Is 23,07% of hit percent"],
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
         simple: "Retorna o valor correto de um preço.",
         complex: "Esta função corrige preços inválidos, convertendo-os para valores válidos conforme o passo do mercado.",
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
         simple: "Retorna um valor inteiro aleatório entre dois valores.",
         complex: "Esta função retorna um valor inteiro aleatório entre dois valores.",
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
         simple: "Retorna o valor arredondado.",
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
         simple: "Retorna o valor arredondado para cima.",
         complex: "Esta função retorna o valor arredondado para cima, garantindo que o resultado seja sempre o próximo inteiro maior ou igual.",
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
      examples: ["RoundUp[10.7] // 11", "RoundUp[10.3] // 11", "RoundUp[Close[0]/2]"],
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
         simple: "Retorna o valor arredondado para baixo.",
         complex: "Esta função retorna o valor arredondado para baixo, garantindo que o resultado seja sempre o próximo inteiro menor ou igual.",
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
      examples: ["RoundDown[10.7] // 10", "RoundDown[10.3] // 10", "RoundDown[Close[0]/2]"],
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
         simple: "Retorna o maior valor entre dois números.",
         complex: "Esta função retorna o maior valor entre dois números fornecidos.",
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
         simple: "Retorna o menor valor entre dois números.",
         complex: "Esta função retorna o menor valor entre dois números fornecidos.",
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
         simple: "Retorna verdadeiro com base em uma chance percentual.",
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
      examples: ["IsChance[10] // It contains 10% chance of returning true.", "IsChance[60]"],
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
         simple: "Retorna o número de casas decimais de um valor.",
         complex: "Esta função retorna a quantidade de casas decimais presentes em um número, indicando seu nível de precisão.",
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
   // CONTA
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.ACCOUNT,
      name: "GetVolume",
      aliases: "GetVol",
      description: {
         simple: "Retorna o volume que a ordem será executada.",
         complex: "Esta função retorna o volume que a ordem será colocada no mercado.",
      },
      parameters: [],
      examples: [],
      returns: {
         success: {
            message: "Retorna o volume.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.ACCOUNT,
      name: "SetVolume",
      aliases: "SetVol",
      description: {
         simple: "Define o novo volume da ordem.",
         complex:
            "Esta função define o novo volume utilizado no sistema de envio de ordens. Ela altera diretaemente o valor no gerenciador de volume, portanto, é importante considerar o método de cálculo do mesmo.",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "o valor do volume.",
         },
         {
            type: {
               type: "double",
            },
            name: "defaultValue",
            comment: "o valor padrão do volume.",
            value: "VOLUME_MIN",
         },
      ],
      examples: ["SetVol[10]"],
      returns: {
         success: {
            message: "Retorna true se o volume for alterado com sucesso, ou false caso contrário.",
            type: {
               type: "bool",
            },
         },
         error: {
            message: "Retorna false em caso de erro ou falha.",
            type: {
               type: "bool",
            },
         },
      },
   },
   // CONVERSORES
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToPositive",
      aliases: "Pos",
      description: {
         simple: "Retorna o valor absoluto de um número.",
         complex: "Esta função retorna o valor absoluto de um número, ou seja, o seu valor sem sinal (sempre positivo).",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "o valor a ser convertido.",
         },
      ],
      examples: [
         "ToPositive[-10] // Is 10",
         `ToPositive[Close[0]-Open[0]] // Result of the calculation "close [0] -Open [0]" will be positive even when "Open" is larger.`,
      ],
      returns: {
         success: {
            message: "Retorna o valor absoluto.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToNegative",
      aliases: "Neg",
      description: {
         simple: "Retorna o valor negativo de um número.",
         complex: "Esta função retorna o valor negativo de um número, ou seja, o seu valor com sinal (sempre negativo).",
      },
      parameters: [
         {
            type: {
               type: "double",
            },
            name: "value",
            comment: "o valor a ser convertido.",
         },
      ],
      examples: [
         "ToNegative[10] // Is -10",
         `ToNegative[Close[0]-Open[0]] // Result of the calculation "close [0] -Open [0]" will be negative even when "Open" is smaller.`,
      ],
      returns: {
         success: {
            message: "Retorna o valor negativo.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToTime",
      aliases: "",
      description: {
         simple: "Retorna o horário em forma de texto simples para data em segundos.",
         complex:
            "Esta função retorna o horário em forma de texto para número em segundos. Com esta função você pode acessar a vela do dia usando um horário em forma de texto, por exemplo '13:00'.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "time",
            comment: "o valor do horário.",
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
      examples: [`ToTime["19:00"]`],
      returns: {
         success: {
            message: "Retorna o horário em segundos.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToTimeModify",
      aliases: "TMod",
      description: {
         simple: "Retorna o horário modificado.",
         complex: "Esta função permite modificar um horário passado de referencia.",
      },
      parameters: [
         {
            type: {
               type: "int",
            },
            name: "time",
            comment: "o valor do horário em segundos.",
         },
         {
            type: {
               type: "int",
            },
            name: "seconds",
            comment: "O valor de segundos a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: {
               type: "int",
            },
            name: "minutes",
            comment: "O valor de minutos a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: {
               type: "int",
            },
            name: "hours",
            comment: "O valor de horas a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: {
               type: "int",
            },
            name: "day",
            comment: "O valor do dia a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: {
               type: "int",
            },
            name: "month",
            comment: "O valor do mês a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: {
               type: "int",
            },
            name: "year",
            comment: "O valor do ano a ser modificado ou -1 para ignorar.",
            value: "-1",
         },
      ],
      examples: [
         `ToTimeModify[TIME_CURRENT, 50, 10, 12] // I would modify the seconds, minutes and hours.`,
         `ToTimeModify[TIME_CURRENT, -1, -1, -1, 10] // I would only change the day, the other data would remain the same.`,
      ],
      returns: {
         success: {
            message: "Retorna o novo horário em segundos.",
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
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToTimeFormat",
      aliases: "TFormat",
      description: {
         simple: "Retorna o horário em forma de texto.",
         complex: "Esta função transforma um valor em segundos em uma representação textual de horário.",
      },
      parameters: [
         {
            type: {
               type: "uint",
            },
            name: "time",
            comment: "o valor do horário.",
         },
      ],
      examples: [`ToTimeFormat[TIME_CURRENT] // It would be similar to: "1970.01.01 19:00:00"`],
      returns: {
         success: {
            message: "Retorna o horário em forma de texto.",
            type: {
               type: "string",
            },
         },
         error: {
            message: "Retorna a string vazia.",
            type: {
               type: "string",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToFormat",
      aliases: "Format",
      description: {
         simple: "Retorna uma nova string formatada.",
         complex: "Esta função permite modificar um texto, formatando-o de acordo com os parâmetros definidos internamente.",
      },
      parameters: [
         {
            type: {
               type: "string",
            },
            name: "text",
            comment: "o valor do texto.",
         },
         {
            type: {
               type: "any",
            },
            name: "param1",
            comment: "Primeiro parametro que será formatado.",
            value: '""',
         },
         {
            type: {
               type: "any",
            },
            name: "param...63",
            comment: "Os demais parametros que serão formatados. Não pode ser mais de 63.",
            value: '""',
         },
      ],
      examples: [
         `ToFormat["Hello, {0}!", "World"]] // New text: "Hello, World!"`,
         `ToFormat["My text is {0} and my number is {1}!", "Metatrader is God", 10]] // New text: "My text is Metatrader is God and my number is 10!"`,
         `ToFormat["My list: {0}, {1}, again {0}!", "Jujubas", 777]] // New text: "My list: Jujubas, 777, again Jujubas!"`,
      ],
      returns: {
         success: {
            message: "Retorna o novo texto formatado.",
            type: {
               type: "string",
            },
         },
         error: {
            message: "Retorna a string vazia.",
            type: {
               type: "string",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CONVERTER,
      name: "ToInt",
      aliases: "",
      description: {
         simple: "Retorna o valor convertido para inteiro.",
         complex:
            "Esta função retorna o valor convertido para inteiro. Se o valor for uma string, ele será convertido para zero. Caso seja um número decimal, será arredondado para o inteiro mais próximo.",
      },
      parameters: [
         {
            type: {
               type: "any",
            },
            name: "value",
            comment: "o valor a ser convertido.",
         },
      ],
      examples: ["ToInt[10.5] // Is 10", `ToInt["9999"] // Is 9999`, `ToInt["My age 30"] // To convert to zero`],
      returns: {
         success: {
            message: "Retorna o valor convertido para inteiro.",
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
   // MERCADO
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "Last",
      aliases: "",
      description: {
         simple: "Retorna o último preço de negociação.",
         complex: "Esta função retorna o valor do último preço de negociação para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['Last["PETR4"]'],
      returns: {
         success: {
            message: "Retorna o último preço.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "LastHigh",
      aliases: "LastH",
      description: {
         simple: "Retorna o maior preço do último negócio.",
         complex: "Esta função retorna o maior preço registrado no último negócio do símbolo informado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['LastHigh["VALE3"]'],
      returns: {
         success: {
            message: "Retorna o maior preço do último negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "LastLow",
      aliases: "LastL",
      description: {
         simple: "Retorna o menor preço do último negócio.",
         complex: "Esta função retorna o menor preço registrado no último negócio do símbolo informado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['LastLow["VALE3"]'],
      returns: {
         success: {
            message: "Retorna o menor preço do último negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "Ask",
      aliases: "",
      description: {
         simple: "Retorna o preço de venda (ask).",
         complex: "Esta função retorna o preço de venda (ask) atual do símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['Ask["PETR4"]'],
      returns: {
         success: {
            message: "Retorna o preço de venda.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "AskHigh",
      aliases: "AskH",
      description: {
         simple: "Retorna o maior preço de venda (ask).",
         complex: "Esta função retorna o maior valor de ask registrado no dia para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['AskHigh["ITUB4"]'],
      returns: {
         success: {
            message: "Retorna o maior preço de venda.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "AskLow",
      aliases: "AskL",
      description: {
         simple: "Retorna o menor preço de venda (ask).",
         complex: "Esta função retorna o menor valor de ask registrado no dia para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['AskLow["ITUB4"]'],
      returns: {
         success: {
            message: "Retorna o menor preço de venda.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "Bid",
      aliases: "",
      description: {
         simple: "Retorna o preço de compra (bid).",
         complex: "Esta função retorna o preço de compra (bid) atual do símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['Bid["BBAS3"]'],
      returns: {
         success: {
            message: "Retorna o preço de compra.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "BidHigh",
      aliases: "BidH",
      description: {
         simple: "Retorna o maior preço de compra (bid).",
         complex: "Esta função retorna o maior valor de bid registrado no dia para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['BidHigh["BBAS3"]'],
      returns: {
         success: {
            message: "Retorna o maior preço de compra.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "BidLow",
      aliases: "BidL",
      description: {
         simple: "Retorna o menor preço de compra (bid).",
         complex: "Esta função retorna o menor valor de bid registrado no dia para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['BidLow["BBAS3"]'],
      returns: {
         success: {
            message: "Retorna o menor preço de compra.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "LastTime",
      aliases: "LastT",
      description: {
         simple: "Retorna o horário do último negócio.",
         complex: "Esta função retorna o horário da última negociação para o símbolo especificado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['LastTime["PETR4"]'],
      returns: {
         success: {
            message: "Retorna o horário da última negociação.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero se o símbolo for inválido.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayStartTime",
      aliases: "DayST",
      description: {
         simple: "Retorna o horário de início do pregão no dia especificado.",
         complex: "Esta função retorna o horário de abertura do pregão para o ativo no dia informado. Pode variar conforme o ativo e o mercado.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayStartTime[0, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o horário de abertura do pregão.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna null se os dados estiverem indisponíveis.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayEndTime",
      aliases: "DayET",
      description: {
         simple: "Retorna o horário de encerramento do pregão no dia especificado.",
         complex: "Esta função retorna o horário de fechamento do pregão para o ativo no dia informado.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayEndTime[0, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o horário de fechamento do pregão.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna null se os dados estiverem indisponíveis.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayStartCandle",
      aliases: "DaySC",
      description: {
         simple: "Retorna a vela (candle) de início do dia.",
         complex: "Esta função retorna o identificador da primeira vela (candle) do dia para o ativo especificado.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayStartCandle[20250719, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna a vela inicial do dia.",
            type: { type: "uint" },
         },
         error: {
            message: "Retorna 0 se não houver vela no dia.",
            type: { type: "uint" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayEndCandle",
      aliases: "DayEC",
      description: {
         simple: "Retorna a vela (candle) de fim do dia.",
         complex: "Esta função retorna o identificador da última vela (candle) do dia para o ativo especificado.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayEndCandle[0, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna a última vela do dia.",
            type: { type: "uint" },
         },
         error: {
            message: "Retorna 0 se não houver vela no dia.",
            type: { type: "uint" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayHigh",
      aliases: "DayH",
      description: {
         simple: "Retorna o maior preço do dia.",
         complex: "Esta função retorna o maior valor de preço negociado no dia, para o timeframe e símbolo informados.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico.",
            value: "CURRENT",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayHigh[0, M5, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o maior preço do dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se não houver dados.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.MARKET,
      name: "DayLow",
      aliases: "DayL",
      description: {
         simple: "Retorna o menor preço do dia.",
         complex: "Esta função retorna o menor valor de preço negociado no dia, para o timeframe e símbolo informados.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "day",
            comment: "O valor do dia, sendo 0 o dia atual, 1 o dia anterior, etc.",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "O tempo gráfico.",
            value: "CURRENT",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "O símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayLow[0, M5, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o menor preço do dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna zero se não houver dados.",
            type: { type: "double" },
         },
      },
   },
   // TEMPO
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "IsTime",
      aliases: "",
      description: {
         simple: "Verifica se o tempo corresponde aos critérios informados.",
         complex:
            "Esta função verifica se o horário de referência corresponde aos valores fornecidos para hora, minuto e segundo. Caso algum dos valores seja -1, ele será ignorado no critério.",
      },
      parameters: [
         {
            type: { type: "datetime" },
            name: "timeRef",
            comment: "Horário de referência.",
         },
         {
            type: { type: "int" },
            name: "hour",
            comment: "Hora (0 a 23) ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: { type: "int" },
            name: "minute",
            comment: "Minuto (0 a 59) ou -1 para ignorar.",
            value: "-1",
         },
         {
            type: { type: "int" },
            name: "second",
            comment: "Segundo (0 a 59) ou -1 para ignorar.",
            value: "-1",
         },
      ],
      examples: ["IsTime[TIME_CURRENT, 10] // Returns true if the hour is 10", "IsTime[TIME_CURRENT, -1, 30] // Returns true if the minute is 30"],
      returns: {
         success: {
            message: "Retorna true se o horário corresponder aos critérios.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se não corresponder ou houver erro nos parâmetros.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "SymbolTime",
      aliases: "STime",
      description: {
         simple: "Retorna o horário atual do símbolo.",
         complex: "Esta função retorna o horário atual do ativo (símbolo) no mercado correspondente.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['SymbolTime["PETR4"]'],
      returns: {
         success: {
            message: "Retorna o horário atual do ativo.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna null se o símbolo for inválido.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "TimeLeft",
      aliases: "TLeft",
      description: {
         simple: "Retorna o tempo restante da vela atual.",
         complex: "Esta função retorna quanto tempo falta para o término da vela atual no timeframe e símbolo especificados.",
      },
      parameters: [
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['TimeLeft[M5, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o tempo restante (em segundos) da vela atual.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se os parâmetros forem inválidos.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "DayOfWeek",
      aliases: "DayW",
      description: {
         simple: "Retorna o dia da semana.",
         complex: "Esta função retorna o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado) do símbolo informado.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayOfWeek["PETR4"]'],
      returns: {
         success: {
            message: "Retorna o número correspondente ao dia da semana.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se não for possível determinar o dia.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "DayOfYear",
      aliases: "DayY",
      description: {
         simple: "Retorna o dia do ano.",
         complex: "Esta função retorna o número do dia no ano (1 a 366) com base no horário atual do símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['DayOfYear["VALE3"]'],
      returns: {
         success: {
            message: "Retorna o dia do ano.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se o símbolo for inválido.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "Month",
      aliases: "",
      description: {
         simple: "Retorna o mês atual.",
         complex: "Esta função retorna o número do mês atual (1 a 12) com base no horário atual do símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['Month["VALE3"]'],
      returns: {
         success: {
            message: "Retorna o número do mês.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se não for possível determinar o mês.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "Year",
      aliases: "",
      description: {
         simple: "Retorna o ano atual.",
         complex: "Esta função retorna o número do ano atual com base no horário do símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['Year["VALE3"]'],
      returns: {
         success: {
            message: "Retorna o ano atual (ex: 2025).",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se não for possível determinar o ano.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "StartTime",
      aliases: "StartT",
      description: {
         simple: "Retorna o horário inicial de referência.",
         complex: "Esta função retorna o horário de início conforme o método informado. Pode representar abertura do dia, semana, mês, etc.",
      },
      parameters: [
         {
            type: {
               type: "ENUM_TIME_HISTORIC",
               typeLink: "/references/enumerators#time-historic",
            },
            name: "method",
            comment: "Método de cálculo (ex: 'TYPE_DAY', 'TYPE_WEEK' ...).",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "SYMBOL",
         },
      ],
      examples: ['StartTime[TYPE_DAY, "PETR4"]'],
      returns: {
         success: {
            message: "Retorna o horário de início conforme o método.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna null se o método ou símbolo for inválido.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TIME,
      name: "ValueOfTime",
      aliases: "ValueT",
      description: {
         simple: "Converte o horário em valor numérico baseado no método.",
         complex: "Esta função retorna um valor numérico representando o tempo, conforme o método especificado. Podendo ser segundos, minutos, horas, etc..",
      },
      parameters: [
         {
            type: { type: "datetime" },
            name: "time",
            comment: "Horário a ser convertido.",
         },
         {
            type: {
               type: "ENUM_TIME",
               typeLink: "/references/enumerators#time-type",
            },
            name: "method",
            comment: "Método de retorno. (ex: 'TYPE_SEC', 'TYPE_MIN' ...).",
         },
      ],
      examples: ["ValueOfTime[TimeNow, TYPE_SEC]"],
      returns: {
         success: {
            message: "Retorna o valor numérico correspondente ao horário.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se o horário ou método forem inválidos.",
            type: { type: "int" },
         },
      },
   },
   // TRADES
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllVolumeOpen",
      aliases: "AVolO",
      description: {
         simple: "Retorna o volume total de todas as posições e ordens abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições e ordens abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllVolumeOpen["PETR4", 123456, -1, H1]'],
      returns: {
         success: {
            message: "Retorna o volume total de todas as posições e ordens abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições e ordens abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyVolumeOpen",
      aliases: "BVolO",
      description: {
         simple: "Retorna o volume total das posições e ordens de compra abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições e ordens de compra abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyVolumeOpen["VALE3", 123456, -1, D1]'],
      returns: {
         success: {
            message: "Retorna o volume total das posições e ordens de compra abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições e ordens de compra abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellVolumeOpen",
      aliases: "SVolO",
      description: {
         simple: "Retorna o volume total das posições e ordens de venda abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições e ordens de venda abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellVolumeOpen["ITUB4", 123456, -1, W1]'],
      returns: {
         success: {
            message: "Retorna o volume total das posições e ordens de venda abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições e ordens de venda abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllPosVolumeOpen",
      aliases: "APVolO",
      description: {
         simple: "Retorna o volume total de todas as posições abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições abertas.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllPosVolumeOpen["BBAS3", 123456, -1, MN1]'],
      returns: {
         success: {
            message: "Retorna o volume total de todas as posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyPosVolumeOpen",
      aliases: "BPVolO",
      description: {
         simple: "Retorna o volume total das posições de compra abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições de compra abertas.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyPosVolumeOpen["PETR4", 123456, -1, H4]'],
      returns: {
         success: {
            message: "Retorna o volume total das posições de compra abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de compra abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellPosVolumeOpen",
      aliases: "SPVolO",
      description: {
         simple: "Retorna o volume total das posições de venda abertas.",
         complex: "Esta função retorna o volume total combinado de todas as posições de venda abertas.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellPosVolumeOpen["VALE3", 123456, -1, D1]'],
      returns: {
         success: {
            message: "Retorna o volume total das posições de venda abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de venda abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllOrderVolumeOpen",
      aliases: "AOVolO",
      description: {
         simple: "Retorna o volume total de todas as ordens pendentes.",
         complex: "Esta função retorna o volume total combinado de todas as ordens pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllOrderVolumeOpen["ITUB4", 123456, -1, W1]'],
      returns: {
         success: {
            message: "Retorna o volume total de todas as ordens pendentes.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver ordens pendentes.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyOrderVolumeOpen",
      aliases: "BOVolO",
      description: {
         simple: "Retorna o volume total das ordens de compra pendentes.",
         complex: "Esta função retorna o volume total combinado de todas as ordens de compra pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyOrderVolumeOpen["BBAS3", 123456, -1, MN1]'],
      returns: {
         success: {
            message: "Retorna o volume total das ordens de compra pendentes.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver ordens de compra pendentes.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellOrderVolumeOpen",
      aliases: "SOVolO",
      description: {
         simple: "Retorna o volume total das ordens de venda pendentes.",
         complex: "Esta função retorna o volume total combinado de todas as ordens de venda pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellOrderVolumeOpen["PETR4", 123456, -1, H1]'],
      returns: {
         success: {
            message: "Retorna o volume total das ordens de venda pendentes.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver ordens de venda pendentes.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllOpen",
      aliases: "AOpen",
      description: {
         simple: "Retorna a quantidade total de posições e ordens abertas.",
         complex: "Esta função retorna o total combinado de posições abertas e ordens pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllOpen["VALE3", 123456, -1, D1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições e ordens abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições ou ordens abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyOpen",
      aliases: "BOpen",
      description: {
         simple: "Retorna a quantidade total de posições e ordens de compra abertas.",
         complex: "Esta função retorna o total combinado de posições de compra abertas e ordens de compra pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyOpen["ITUB4", 123456, -1, W1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições e ordens de compra abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições ou ordens de compra abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellOpen",
      aliases: "SOpen",
      description: {
         simple: "Retorna a quantidade total de posições e ordens de venda abertas.",
         complex: "Esta função retorna o total combinado de posições de venda abertas e ordens de venda pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellOpen["BBAS3", 123456, -1, MN1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições e ordens de venda abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições ou ordens de venda abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllPosOpen",
      aliases: "APosO",
      description: {
         simple: "Retorna a quantidade total de posições abertas.",
         complex: "Esta função retorna o total de posições abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllPosOpen["PETR4", 123456, -1, H4]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyPosOpen",
      aliases: "BPosO",
      description: {
         simple: "Retorna a quantidade total de posições de compra abertas.",
         complex: "Esta função retorna o total de posições de compra abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyPosOpen["VALE3", 123456, -1, D1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições de compra abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições de compra abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellPosOpen",
      aliases: "SPosO",
      description: {
         simple: "Retorna a quantidade total de posições de venda abertas.",
         complex: "Esta função retorna o total de posições de venda abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellPosOpen["ITUB4", 123456, -1, W1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de posições de venda abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver posições de venda abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllOrderOpen",
      aliases: "AOrderO",
      description: {
         simple: "Retorna a quantidade total de ordens pendentes.",
         complex: "Esta função retorna o total de ordens pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllOrderOpen["BBAS3", 123456, -1, MN1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de ordens pendentes.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver ordens pendentes.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyOrderOpen",
      aliases: "BOrderO",
      description: {
         simple: "Retorna a quantidade total de ordens de compra pendentes.",
         complex: "Esta função retorna o total de ordens de compra pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyOrderOpen["PETR4", 123456, -1, H1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de ordens de compra pendentes.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver ordens de compra pendentes.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellOrderOpen",
      aliases: "SOrderO",
      description: {
         simple: "Retorna a quantidade total de ordens de venda pendentes.",
         complex: "Esta função retorna o total de ordens de venda pendentes, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellOrderOpen["VALE3", 123456, -1, D1]'],
      returns: {
         success: {
            message: "Retorna a quantidade total de ordens de venda pendentes.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se não houver ordens de venda pendentes.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllProfitOpen",
      aliases: "AProfitO",
      description: {
         simple: "Retorna o lucro/prejuízo total de todas as posições abertas.",
         complex: "Esta função retorna o lucro/prejuízo total combinado de todas as posições abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['AllProfitOpen["ITUB4", 123456, -1, W1]'],
      returns: {
         success: {
            message: "Retorna o lucro/prejuízo total de todas as posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyProfitOpen",
      aliases: "BProfitO",
      description: {
         simple: "Retorna o lucro/prejuízo total das posições de compra abertas.",
         complex: "Esta função retorna o lucro/prejuízo total combinado de todas as posições de compra abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['BuyProfitOpen["BBAS3", 123456, -1, MN1]'],
      returns: {
         success: {
            message: "Retorna o lucro/prejuízo total das posições de compra abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de compra abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellProfitOpen",
      aliases: "SProfitO",
      description: {
         simple: "Retorna o lucro/prejuízo total das posições de venda abertas.",
         complex: "Esta função retorna o lucro/prejuízo total combinado de todas as posições de venda abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "int" },
            name: "candle",
            comment: "Índice da vela de inicio (-1 para todas).",
            value: "-1",
         },
         {
            type: {
               type: "ENUM_TIMEFRAME",
               typeLink: "/references/enumerators#timeframes",
            },
            name: "timeframe",
            comment: "Tempo gráfico.",
            value: "CURRENT",
         },
      ],
      examples: ['SellProfitOpen["PETR4", 123456, -1, H4]'],
      returns: {
         success: {
            message: "Retorna o lucro/prejuízo total das posições de venda abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de venda abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AvgPrice",
      aliases: "PAvgP",
      description: {
         simple: "Retorna o preço médio das posições abertas.",
         complex:
            "Esta função retorna o preço médio ponderado pelo volume de todas as posições abertas, considerando o tipo de operação e os filtros fornecidos.",
      },
      parameters: [
         {
            type: {
               type: "ENUM_POSITION_TYPE",
               typeLink: "/references/enumerators#position-type",
            },
            name: "type",
            comment: "Tipo de posição (COMPRA/VENDA/TODAS).",
            value: "TYPE_ALL",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['AvgPrice(POSITION_TYPE_BUY, "VALE3", 123456)'],
      returns: {
         success: {
            message: "Retorna o preço médio das posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AvgDir",
      aliases: "PAvgDir",
      description: {
         simple: "Retorna a direção média das posições abertas.",
         complex: "Esta função retorna a direção média ponderada das posições abertas, considerando o tipo de operação e os filtros fornecidos.",
      },
      parameters: [
         {
            type: {
               type: "ENUM_POSITION_TYPE",
               typeLink: "/references/enumerators#position-type",
            },
            name: "type",
            comment: "Tipo de posição (COMPRA/VENDA/TODAS).",
            value: "TYPE_ALL",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['AvgDir(POSITION_TYPE_SELL, "ITUB4", 123456)'],
      returns: {
         success: {
            message: "Retorna a direção média das posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllAvgPrice",
      aliases: "AAvgPrice",
      description: {
         simple: "Retorna o preço médio de todas as posições abertas.",
         complex: "Esta função retorna o preço médio ponderado pelo volume de todas as posições abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['AllAvgPrice("BBAS3", 123456)'],
      returns: {
         success: {
            message: "Retorna o preço médio de todas as posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyAvgPrice",
      aliases: "BAvgPrice",
      description: {
         simple: "Retorna o preço médio das posições de compra abertas.",
         complex: "Esta função retorna o preço médio ponderado pelo volume de todas as posições de compra abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['BuyAvgPrice("PETR4", 123456)'],
      returns: {
         success: {
            message: "Retorna o preço médio das posições de compra abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de compra abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellAvgPrice",
      aliases: "SAvgPrice",
      description: {
         simple: "Retorna o preço médio das posições de venda abertas.",
         complex: "Esta função retorna o preço médio ponderado pelo volume de todas as posições de venda abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['SellAvgPrice("VALE3", 123456)'],
      returns: {
         success: {
            message: "Retorna o preço médio das posições de venda abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de venda abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "AllAvgDir",
      aliases: "AAvgDir",
      description: {
         simple: "Retorna a direção média de todas as posições abertas.",
         complex: "Esta função retorna a direção média ponderada de todas as posições abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['AllAvgDir("ITUB4", 123456)'],
      returns: {
         success: {
            message: "Retorna a direção média de todas as posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "BuyAvgDir",
      aliases: "BAvgDir",
      description: {
         simple: "Retorna a direção média das posições de compra abertas.",
         complex: "Esta função retorna a direção média ponderada de todas as posições de compra abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['BuyAvgDir("BBAS3", 123456)'],
      returns: {
         success: {
            message: "Retorna a direção média das posições de compra abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de compra abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "SellAvgDir",
      aliases: "SAvgDir",
      description: {
         simple: "Retorna a direção média das posições de venda abertas.",
         complex: "Esta função retorna a direção média ponderada de todas as posições de venda abertas, considerando os filtros fornecidos.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: ['SellAvgDir("PETR4", 123456)'],
      returns: {
         success: {
            message: "Retorna a direção média das posições de venda abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver posições de venda abertas.",
            type: { type: "double" },
         },
      },
   },
   //
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTicket",
      aliases: "PTicket",
      description: {
         simple: "Retorna o ticket de uma posição.",
         complex: "Esta função retorna o ticket de uma posição aberta usando os parâmetros informados.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "index",
            comment: "Indice da posição. Começando com 0 para a mais atual.",
         },
         {
            type: {
               type: "ENUM_TRADE",
               typeLink: "/references/enumerators#trade",
            },
            name: "type",
            comment: "Tipo de trade: 'TYPE_BUY', 'TYPE_SELL', 'TYPE_ALL'.",
            value: "TYPE_ALL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
      ],
      examples: ["PosTicket[0, TYPE_BUY] // Retorna o ticket da compra mais recente"],
      returns: {
         success: {
            message: "Retorna o ticket da posição.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se nenhuma posição for encontrada com os parâmetros informados.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosDouble",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade numérica (double) de uma posição.",
         complex:
            "Esta função retorna o valor de uma propriedade específica do tipo double (número com casas decimais) de uma posição aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
         {
            type: {
               type: "ENUM_POS_DOUBLE",
               typeLink: "/references/enumerators#position-property-double",
            },
            name: "property",
            comment: "Propriedade da posição: 'TYPE_VOLUME' (volume/lotes), 'TYPE_OPEN' (preço de abertura).",
         },
      ],
      examples: [
         "PosDouble[123456, TYPE_VOLUME] // Retorna o volume/lotes da posição",
         "PosDouble[PosTicket[0], TYPE_OPEN] // Retorna o preço de abertura da posição",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se a posição não existir ou a propriedade for inválida.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosInt",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade inteira de uma posição.",
         complex: "Esta função retorna o valor de uma propriedade específica do tipo inteiro de uma posição aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
         {
            type: {
               type: "ENUM_POS_INT",
               typeLink: "/references/enumerators#position-property-int",
            },
            name: "property",
            comment: "Propriedade da posição: 'TYPE_TIME' (timestamp de abertura), 'TYPE_MAGIC' (número mágico).",
         },
      ],
      examples: [
         "PosInt[123456, TYPE_TIME] // Retorna o timestamp de abertura da posição",
         "PosInt[PosTicket[0], TYPE_MAGIC] // Retorna o número mágico da posição",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a posição não existir ou a propriedade for inválida.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosString",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade textual de uma posição.",
         complex: "Esta função retorna o valor de uma propriedade específica do tipo string (texto) de uma posição aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
         {
            type: {
               type: "ENUM_POS_STRING",
               typeLink: "/references/enumerators#position-property-string",
            },
            name: "property",
            comment: "Propriedade da posição: 'TYPE_SYMBOL' (símbolo do ativo), 'TYPE_COMMENT' (comentário da operação).",
         },
      ],
      examples: [
         "PosString[123456, TYPE_SYMBOL] // Retorna o símbolo do ativo da posição",
         "PosString[PosTicket[0], TYPE_COMMENT] // Retorna o comentário da posição",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna uma string vazia se a posição não existir ou a propriedade for inválida.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosCurrent",
      aliases: "PCurrent",
      description: {
         simple: "Retorna o preço atual de uma posição aberta.",
         complex: "Esta função retorna o preço atual de uma posição aberta identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosCurrent[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço atual da posição.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosOpen",
      aliases: "PO",
      description: {
         simple: "Retorna o preço de abertura de uma posição.",
         complex: "Esta função retorna o preço de abertura de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosOpen[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço de abertura da posição.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosProfit",
      aliases: "PProfit",
      description: {
         simple: "Retorna o lucro atual de uma posição.",
         complex: "Esta função retorna o lucro ou prejuízo atual (em moeda do ativo) de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosProfit[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o lucro/prejuízo atual da posição.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosStop",
      aliases: "PSL",
      description: {
         simple: "Retorna o preço do Stop Loss de uma posição.",
         complex: "Esta função retorna o preço definido para o Stop Loss de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosStop[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do Stop Loss.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não tiver Stop Loss definido ou não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosSwap",
      aliases: "PSWAP",
      description: {
         simple: "Retorna o valor do swap acumulado de uma posição.",
         complex: "Esta função retorna o valor total de swap acumulado para uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosSwap[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o valor acumulado de swap.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTake",
      aliases: "PTP",
      description: {
         simple: "Retorna o preço do Take Profit de uma posição.",
         complex: "Esta função retorna o preço definido para o Take Profit de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosTake[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do Take Profit.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não tiver Take Profit definido ou não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosVolume",
      aliases: "PVol",
      description: {
         simple: "Retorna o volume de uma posição.",
         complex: "Esta função retorna o volume (tamanho) de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosVolume[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o volume da posição.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosIdentifier",
      aliases: "PIdent",
      description: {
         simple: "Retorna o identificador único de uma posição.",
         complex:
            "Esta função retorna o identificador da posição, um valor único atribuído a cada nova posição aberta, que permanece inalterado durante toda a sua existência. Alterações na posição não modificam esse identificador.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosIdentifier[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ticket da posição.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosMagic",
      aliases: "PMagic",
      description: {
         simple: "Retorna o número mágico de uma posição.",
         complex: "Esta função retorna o número mágico (identificador do robô) de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosMagic[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o número mágico da posição.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosReason",
      aliases: "PReason",
      description: {
         simple: "Retorna o motivo de abertura de uma posição.",
         complex: "Esta função retorna o código que indica o motivo pelo qual a posição foi aberta.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosReason[PosTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código do motivo de abertura. 0: Terminal desktop. 1: Aplicativo móvel. 2: Plataforma web. 3: Expert Advisor, script ou outro código MQL5",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTime",
      aliases: "PT",
      description: {
         simple: "Retorna o horário de abertura de uma posição.",
         complex: "Esta função retorna o horário de abertura de uma posição no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosTime[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime de abertura da posição.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTimeMsc",
      aliases: "PTMsc",
      description: {
         simple: "Retorna o horário de abertura de uma posição em milissegundos.",
         complex: "Esta função retorna o horário de abertura de uma posição no formato datetime em milissegundos desde 01/01/1970.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosTimeMsc[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o timestamp em milissegundos.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTimeUpdate",
      aliases: "PTUpdate",
      description: {
         simple: "Retorna o horário da última atualização de uma posição.",
         complex: "Esta função retorna o horário da última atualização (modificação) de uma posição no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosTimeUpdate[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime da última atualização.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosTimeUpdateMsc",
      aliases: "PTUpdateMsc",
      description: {
         simple: "Retorna o horário da última atualização de uma posição em milissegundos.",
         complex: "Esta função retorna o horário da última atualização de uma posição no formato datetime em milissegundos desde 01/01/1970.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosTimeUpdateMsc[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o timestamp em milissegundos.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se a posição não for encontrada.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosType",
      aliases: "PType",
      description: {
         simple: "Retorna o tipo de uma posição (compra/venda).",
         complex: "Esta função retorna o tipo da posição (0 para compra, 1 para venda) identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosType[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna 0 (compra) ou 1 (venda).",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se a posição não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosSymbol",
      aliases: "PSymbol",
      description: {
         simple: "Retorna o símbolo do ativo de uma posição.",
         complex: "Esta função retorna o símbolo do ativo negociado em uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosSymbol[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o símbolo do ativo.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se a posição não for encontrada.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosComment",
      aliases: "PComment",
      description: {
         simple: "Retorna o comentário associado a uma posição.",
         complex: "Esta função retorna o comentário/texto descritivo associado a uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosComment[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o comentário da posição.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se a posição não for encontrada.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "PosExternal",
      aliases: "PExternal",
      description: {
         simple: "Retorna o ID externo de uma posição.",
         complex: "Esta função retorna o identificador externo (gerado pelo servidor) de uma posição identificada pelo ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição.",
         },
      ],
      examples: ["PosExternal[PosTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ID externo da posição.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se a posição não for encontrada.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderTicket",
      aliases: "OTicket",
      description: {
         simple: "Retorna o ticket de uma ordem.",
         complex: "Esta função retorna o ticket de uma ordem aberta usando os parâmetros informados.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "index",
            comment: "Indice da ordem. Começando com 0 para a mais atual.",
         },
         {
            type: {
               type: "ENUM_TRADE",
               typeLink: "/references/enumerators#trade",
            },
            name: "type",
            comment: "Tipo de trade: 'TYPE_BUY', 'TYPE_SELL', 'TYPE_ALL'.",
            value: "TYPE_ALL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
      ],
      examples: ["OrderTicket[0, TYPE_BUY] // Retorna o ticket da compra mais recente"],
      returns: {
         success: {
            message: "Retorna o ticket da ordem.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se nenhuma ordem for encontrada com os parâmetros informados.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderDouble",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade numérica (double) de uma ordem.",
         complex:
            "Esta função retorna o valor de uma propriedade específica do tipo double (número com casas decimais) de uma ordem aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
         {
            type: {
               type: "ENUM_ORDER_DOUBLE",
               typeLink: "/references/enumerators#order-property-double",
            },
            name: "property",
            comment: "Propriedade da ordem: 'TYPE_VOLUME' (volume/lotes), 'TYPE_OPEN' (preço de abertura).",
         },
      ],
      examples: [
         "OrderDouble[123456, TYPE_VOLUME] // Retorna o volume/lotes da ordem",
         "OrderDouble[OrderTicket[0], TYPE_OPEN] // Retorna o preço de abertura da ordem",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se a ordem não existir ou a propriedade for inválida.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderInt",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade inteira de uma ordem.",
         complex: "Esta função retorna o valor de uma propriedade específica do tipo inteiro de uma ordem aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
         {
            type: {
               type: "ENUM_ORDER_INT",
               typeLink: "/references/enumerators#order-property-int",
            },
            name: "property",
            comment: "Propriedade da ordem: 'TYPE_TIME_SETUP' (timestamp de abertura), 'TYPE_MAGIC' (número mágico).",
         },
      ],
      examples: [
         "OrderInt[123456, TYPE_TIME_SETUP] // Retorna o timestamp de abertura da ordem",
         "OrderInt[OrderTicket[0], TYPE_MAGIC] // Retorna o número mágico da ordem",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não existir ou a propriedade for inválida.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderString",
      aliases: "",
      description: {
         simple: "Retorna o valor de uma propriedade textual de uma ordem.",
         complex: "Esta função retorna o valor de uma propriedade específica do tipo string (texto) de uma ordem aberta, identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
         {
            type: {
               type: "ENUM_ORDER_STRING",
               typeLink: "/references/enumerators#order-property-string",
            },
            name: "property",
            comment: "Propriedade da ordem: 'TYPE_SYMBOL' (símbolo do ativo), 'TYPE_COMMENT' (comentário da operação).",
         },
      ],
      examples: [
         "OrderString[123456, TYPE_SYMBOL] // Retorna o símbolo do ativo da ordem",
         "OrderString[OrderTicket[0], TYPE_COMMENT] // Retorna o comentário da ordem",
      ],
      returns: {
         success: {
            message: "Retorna o valor da propriedade solicitada.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna uma string vazia se a ordem não existir ou a propriedade for inválida.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderVolumeInit",
      aliases: "OVolInit",
      description: {
         simple: "Retorna o volume inicial de uma ordem pendente.",
         complex: "Esta função retorna o volume inicial especificado quando a ordem pendente foi criada.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderVolumeInit[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o volume inicial da ordem.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderVolume",
      aliases: "OVol",
      description: {
         simple: "Retorna o volume atual de uma ordem.",
         complex: "Esta função retorna o volume atual (tamanho) de uma ordem, que pode ter sido modificado após a criação.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderVolume[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o volume atual da ordem.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderOpen",
      aliases: "OO",
      description: {
         simple: "Retorna o preço de abertura de uma ordem.",
         complex: "Esta função retorna o preço de abertura especificado para uma ordem pendente.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderOpen[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço de abertura da ordem.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderStop",
      aliases: "OSL",
      description: {
         simple: "Retorna o preço do Stop Loss de uma ordem.",
         complex: "Esta função retorna o preço definido para o Stop Loss de uma ordem pendente.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderStop[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do Stop Loss.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não tiver Stop Loss definido ou não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderTake",
      aliases: "OTP",
      description: {
         simple: "Retorna o preço do Take Profit de uma ordem.",
         complex: "Esta função retorna o preço definido para o Take Profit de uma ordem pendente.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderTake[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do Take Profit.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não tiver Take Profit definido ou não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderCurrent",
      aliases: "OCurrent",
      description: {
         simple: "Retorna o preço atual de uma ordem pendente.",
         complex: "Esta função retorna o preço atual (de mercado) para o ativo da ordem pendente.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderCurrent[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço atual do ativo da ordem.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderStopLimit",
      aliases: "OSLLimit",
      description: {
         simple: "Retorna o preço de ativação para ordens Stop Limit.",
         complex: "Esta função retorna o preço de ativação especificado para ordens do tipo Stop Limit.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderStopLimit[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço de ativação da Stop Limit.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se a ordem não for do tipo Stop Limit ou não for encontrada.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderSetup",
      aliases: "OSetup",
      description: {
         simple: "Retorna a data/hora de criação da ordem.",
         complex: "Esta função retorna o momento em que a ordem foi criada no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderSetup[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime de criação da ordem.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderType",
      aliases: "OType",
      description: {
         simple: "Retorna o tipo de uma ordem.",
         complex: "Esta função retorna o tipo da ordem (compra/venda, stop/limit, etc) conforme enumerador de tipos de ordem.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderType[OrderTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código do tipo de ordem. (0: Compra mercado, 1: Venda mercado, 2: Buy Limit, 3: Sell Limit, 4: Buy Stop, 5: Sell Stop, 6: Buy Stop Limit, 7: Sell Stop Limit, 8: Fechar por oposta)",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderState",
      aliases: "OState",
      description: {
         simple: "Retorna o estado atual de uma ordem.",
         complex: "Esta função retorna o estado atual da ordem conforme enumerador de estados.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderState[OrderTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código do estado da ordem. (0: Verificando, 1: Aceita, 2: Cancelada, 3: Parcial, 4: Executada, 5: Rejeitada, 6: Expirada, 7: Registrando, 8: Modificando, 9: Cancelando)",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderTimeExpiration",
      aliases: "OTExpira",
      description: {
         simple: "Retorna a data/hora de expiração de uma ordem.",
         complex: "Esta função retorna o momento em que a ordem pendente irá expirar (se aplicável) no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderTimeExpiration[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime de expiração da ordem.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a ordem não tiver expiração ou não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderDone",
      aliases: "ODone",
      description: {
         simple: "Retorna a data/hora de execução ou cancelamento de uma ordem.",
         complex: "Esta função retorna o momento em que a ordem foi executada ou cancelada no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderDone[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime de execução/cancelamento.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a ordem ainda estiver pendente ou não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderSetupMsc",
      aliases: "OSetupMsc",
      description: {
         simple: "Retorna a data/hora de criação da ordem em milissegundos.",
         complex: "Esta função retorna o momento em que a ordem foi criada no formato timestamp em milissegundos desde 01/01/1970.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderSetupMsc[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o timestamp em milissegundos.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderDoneMsc",
      aliases: "ODoneMsc",
      description: {
         simple: "Retorna a data/hora de execução ou cancelamento em milissegundos.",
         complex: "Esta função retorna o momento em que a ordem foi executada ou cancelada no formato timestamp em milissegundos desde 01/01/1970.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderDoneMsc[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o timestamp em milissegundos.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se a ordem ainda estiver pendente ou não for encontrada.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderFilling",
      aliases: "OFilling",
      description: {
         simple: "Retorna a política de preenchimento de uma ordem.",
         complex: "Esta função retorna o tipo de política de preenchimento (FOK, IOC, etc) conforme enumerador de tipos de preenchimento.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderFilling[OrderTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código da política de preenchimento. (0: FOK (tudo ou nada), 1: IOC (tudo/parcial), 2: BOC (só livro), 3: Return (parcial continua))",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderTime",
      aliases: "OT",
      description: {
         simple: "Retorna a data/hora da última modificação da ordem.",
         complex: "Esta função retorna o momento da última modificação da ordem no formato datetime.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderTime[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o datetime da última modificação.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderMagic",
      aliases: "OMagic",
      description: {
         simple: "Retorna o número mágico de uma ordem.",
         complex: "Esta função retorna o número mágico (identificador personalizado do robô) associado a uma ordem.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderMagic[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o número mágico da ordem.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderReason",
      aliases: "OReason",
      description: {
         simple: "Retorna o motivo de criação da ordem.",
         complex: "Esta função retorna o código que indica o motivo pelo qual a ordem foi criada (manual, EA, etc).",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderReason[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o código do motivo de criação. (0: Desktop, 1: Mobile, 2: Web, 3: Expert, 4: Stop Loss, 5: Take Profit, 6: Stop Out) ",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderId",
      aliases: "OId",
      description: {
         simple: "Retorna o ID da ordem no sistema.",
         complex: "Esta função retorna o identificador único da ordem no sistema de negociação.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderId[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ID da ordem.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderById",
      aliases: "OById",
      description: {
         simple: "Retorna o ticket da ordem pelo ID do sistema.",
         complex: "Esta função retorna o número do ticket correspondente a um ID de ordem no sistema.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "ID da ordem no sistema.",
         },
      ],
      examples: ["OrderById[987654]"],
      returns: {
         success: {
            message: "Retorna o número do ticket da ordem.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se a ordem não for encontrada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderSymbol",
      aliases: "OSymbol",
      description: {
         simple: "Retorna o símbolo do ativo de uma ordem.",
         complex: "Esta função retorna o símbolo do ativo negociado em uma ordem.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderSymbol[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o símbolo do ativo.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se a ordem não for encontrada.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.OPEN_TRADE,
      name: "OrderComment",
      aliases: "OComment",
      description: {
         simple: "Retorna o comentário associado a uma ordem.",
         complex: "Esta função retorna o comentário/texto descritivo associado a uma ordem.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem.",
         },
      ],
      examples: ["OrderComment[OrderTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o comentário da ordem.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se a ordem não for encontrada.",
            type: { type: "string" },
         },
      },
   },
   // DEALS
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealTicket",
      aliases: "DTicket",
      description: {
         simple: "Retorna o ticket de uma posição fechada.",
         complex: "Esta função retorna o ticket de uma posição fechada usando os parâmetros informados.",
      },
      parameters: [
         {
            type: { type: "int" },
            name: "index",
            comment: "Indice da posição. Começando com 0 para a mais atual.",
         },
         {
            type: {
               type: "ENUM_TRADE",
               typeLink: "/references/enumerators#trade",
            },
            name: "type",
            comment: "Tipo de trade: 'TYPE_BUY', 'TYPE_SELL', 'TYPE_ALL'",
            value: "TYPE_ALL",
         },
         {
            type: {
               type: "ENUM_MARKET_ACTION",
               typeLink: "/references/enumerators#market-action",
            },
            name: "actionType",
            comment: "Tipo de fechamento: 'TYPE_IN', 'TYPE_OUT', 'TYPE_ALL'.",
            value: "TYPE_ALL",
         },
         {
            type: {
               type: "ENUM_TIME_HISTORIC",
               typeLink: "/references/enumerators#time-historic",
            },
            name: "dateType",
            comment: "Tipo de data de inicio: 'TYPE_DAY', 'TYPE_WEEK'",
            value: "TYPE_DAY",
         },
         {
            type: {
               type: "ENUM_MARKET_GET",
               typeLink: "/references/enumerators#market-get",
            },
            name: "profitType",
            comment: "Tipo de retorno de lucro: 'TYPE_POSITIVE', 'TYPE_NEGATIVE'",
            value: "TYPE_ALL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
      ],
      examples: [
         "DealTicket[0, TYPE_BUY, TYPE_IN] // Retorna o ticket da última posição de compra (ordem de abertura).",
         "DealTicket[0, TYPE_BUY, TYPE_OUT] // Retorna o ticket da última posição de compra (ordem que fechou).",
      ],
      returns: {
         success: {
            message: "Retorna o ticket da posição.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se nenhuma posição for encontrada com os parâmetros informados.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealProfit",
      aliases: "DProfit",
      description: {
         simple: "Retorna o lucro/prejuízo de um negócio.",
         complex: "Esta função retorna o valor do lucro ou prejuízo (em moeda do ativo) de um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealProfit[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o valor do lucro/prejuízo do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealOpen",
      aliases: "DO",
      description: {
         simple: "Retorna o preço de abertura de um negócio.",
         complex: "Esta função retorna o preço de abertura de um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealOpen[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço de abertura do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealCommission",
      aliases: "DComm",
      description: {
         simple: "Retorna o valor da comissão de um negócio.",
         complex: "Esta função retorna o valor da comissão cobrada em um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealCommission[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o valor da comissão do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealFee",
      aliases: "DFee",
      description: {
         simple: "Retorna o valor da taxa de um negócio.",
         complex: "Esta função retorna o valor da taxa cobrada em um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealFee[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o valor da taxa do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealStop",
      aliases: "DSL",
      description: {
         simple: "Retorna o preço do stop loss de um negócio.",
         complex: "Esta função retorna o preço do stop loss definido para um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealStop[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do stop loss do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealTake",
      aliases: "DTP",
      description: {
         simple: "Retorna o preço do take profit de um negócio.",
         complex: "Esta função retorna o preço do take profit definido para um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealTake[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o preço do take profit do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealSwap",
      aliases: "DSwap",
      description: {
         simple: "Retorna o valor do swap de um negócio.",
         complex: "Esta função retorna o valor do swap acumulado para um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealSwap[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o valor do swap do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealVolume",
      aliases: "DVol",
      description: {
         simple: "Retorna o volume de um negócio.",
         complex: "Esta função retorna o volume negociado em um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealVolume[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o volume do negócio.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealMagic",
      aliases: "DMagic",
      description: {
         simple: "Retorna o número mágico de um negócio.",
         complex: "Esta função retorna o identificador mágico (número de referência) associado a um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealMagic[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o número mágico do negócio.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealReason",
      aliases: "DReason",
      description: {
         simple: "Retorna o motivo da execução de um negócio.",
         complex: "Esta função retorna o código que indica o motivo pelo qual o negócio foi executado.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealReason[DealTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código do motivo da execução. (0=Cliente, 1=Mobile, 2=Web, 3=Expert, 4=Stop Loss, 5=Take Profit, 6=Stop Out, 7=Rollover, 8=Margem, 9=Split, 10=Ação corporativa)",
            type: { type: "int" },
         },
         error: {
            message: "Retorna -1 se o negócio não for encontrado.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealOrder",
      aliases: "DOrder",
      description: {
         simple: "Retorna o ticket da ordem associada a um negócio.",
         complex: "Esta função retorna o número do ticket da ordem que gerou o negócio.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealOrder[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ticket da ordem associada.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealId",
      aliases: "DId",
      description: {
         simple: "Retorna o ID de um negócio.",
         complex: "Esta função retorna o identificador único (ID) de um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealId[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ID do negócio.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealEntry",
      aliases: "DEntry",
      description: {
         simple: "Retorna o tipo de entrada de um negócio.",
         complex: "Esta função retorna um código que indica o tipo de entrada de um negócio.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealEntry[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o código do tipo de entrada. (0=Entrada, 1=Saída, 2=Reversão, 3=Fechamento por oposta)",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealOut",
      aliases: "DOut",
      description: {
         simple: "Retorna se o negócio é uma saída.",
         complex: "Esta função indica se o negócio atual representa uma saída no sistema.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealOut[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna true se o negócio for uma saída.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se o negócio for uma entrada ou se o negócio não for encontrado.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealIn",
      aliases: "DIn",
      description: {
         simple: "Retorna se o negócio é uma posição de entrada.",
         complex: "Esta função indica se o negócio atual representa uma posição de entrada no sistema.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealIn[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna true se o negócio for uma entrada.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se o negócio for uma saída ou se o negócio não for encontrado.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealTime",
      aliases: "DT",
      description: {
         simple: "Retorna a data/hora de execução de um negócio.",
         complex: "Esta função retorna a data e hora (em formato datetime) quando o negócio foi executado.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealTime[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna a data/hora da execução do negócio.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealTimeMsc",
      aliases: "DTMsc",
      description: {
         simple: "Retorna o tempo de execução de negociações em milissegundos desde 01.01.1970",
         complex: "Esta função retorna o tempo de execução de negociações em milissegundos desde 01.01.1970",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealTimeMsc[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna a data/hora em milissegundos da execução do negócio.",
            type: { type: "long" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "long" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealType",
      aliases: "DType",
      description: {
         simple: "Retorna o tipo de um negócio.",
         complex: "Esta função retorna o tipo do negócio.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealType[DealTicket[0]]"],
      returns: {
         success: {
            message:
               "Retorna o código do tipo de negócio. (0=Compra, 1=Venda, 2=Saldo, 3=Crédito, 4=Cobrança extra, 5=Correção, 6=Bônus, 7=Comissão extra, 8=Comissão diária, 9=Comissão mensal, 10=Comissão diária do agente, 11=Comissão mensal do agente, 12=Juros, 13=Compra cancelada, 14=Venda cancelada, 15=Dividendo, 16=Dividendo isento, 17=Imposto)",
            type: { type: "uint" },
         },
         error: {
            message: "Retorna 0 se o negócio não for encontrado.",
            type: { type: "uint" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealComment",
      aliases: "DComment",
      description: {
         simple: "Retorna o comentário associado a um negócio.",
         complex: "Esta função retorna o comentário/texto descritivo associado a um negócio específico.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealComment[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o comentário do negócio.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se o negócio não for encontrado.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealExternal",
      aliases: "DExternal",
      description: {
         simple: "Retorna o ID externo de um negócio.",
         complex: "Esta função retorna identificador de negócios em um sistema de negociação externo (na troca).",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealExternal[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o ID externo do negócio.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se o negócio não for encontrado.",
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.CLOSE_TRADE,
      name: "DealSymbol",
      aliases: "DSymbol",
      description: {
         simple: "Retorna o símbolo de um negócio.",
         complex: "Esta função retorna o nome do símbolo no qual o negócio foi executado.",
      },
      parameters: [
         {
            type: { type: "long" },
            name: "ticket",
            comment: "Número do ticket que identifica o negócio.",
         },
      ],
      examples: ["DealSymbol[DealTicket[0]]"],
      returns: {
         success: {
            message: "Retorna o símbolo do negócio.",
            type: { type: "string" },
         },
         error: {
            message: "Retorna string vazia se o negócio não for encontrado.",
            type: { type: "string" },
         },
      },
   },
   // TRADE
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "BuyAuto",
      aliases: "",
      description: {
         simple: "Abre uma posição de compra no mercado.",
         complex:
            "Esta função abre uma posição de compra no mercado, com opções de take profit, stop loss e comentário. O tipo de ordem (compra imediata ou pendente) é definido automaticamente.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "price",
            comment: "Preço de entrada para a ordem de compra.",
         },
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "BuyAuto[ASK, 0.1, 100, 50] // Compra 0.1 lote no preço atual com TP 100 pontos e SL 50 pontos",
         "BuyAuto[ASK, 0.5] // Compra 0.5 lote sem TP/SL",
         "BuyAuto[ASK, 0.5, TickToPoint[20], TickToPoint[20]] // Compra 0.5 lote com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "SellAuto",
      aliases: "",
      description: {
         simple: "Abre uma posição de venda no mercado.",
         complex:
            "Esta função abre uma posição de venda no mercado, com opções de take profit, stop loss e comentário. O tipo de ordem (venda imediata ou pendente) é definido automaticamente.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "price",
            comment: "Preço de entrada para a ordem de venda.",
         },
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "SellAuto[BID, 0.1, 100, 50] // Venda 0.1 lote no preço atual com TP 100 pontos e SL 50 pontos",
         "SellAuto[BID, 0.5] // Venda 0.5 lote sem TP/SL",
         "SellAuto[BID, 0.5, TickToPoint[20], TickToPoint[20]] // Venda 0.5 lote com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "Buy",
      aliases: "",
      description: {
         simple: "Abre uma posição de compra no mercado atual.",
         complex:
            "Esta função abre uma posição de compra no preço de mercado atual (Ask), com parâmetros opcionais de take profit, stop loss e comentário personalizado.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "Buy[0.1, 100, 50] // Compra 0.1 lote no preço de mercado com TP 100 pontos e SL 50 pontos",
         "Buy[0.5] // Compra 0.5 lote sem TP/SL",
         "Buy[0.5, TickToPoint[20], TickToPoint[20]] // Compra 0.5 lote com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "Sell",
      aliases: "",
      description: {
         simple: "Abre uma posição de venda no mercado atual.",
         complex:
            "Esta função abre uma posição de venda no preço de mercado atual (Bid), com parâmetros opcionais de take profit, stop loss e comentário personalizado.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "Sell[0.1, 100, 50] // Vende 0.1 lote no preço de mercado com TP 100 pontos e SL 50 pontos",
         "Sell[0.5] // Vende 0.5 lote sem TP/SL",
         "Sell[0.5, TickToPoint[20], TickToPoint[20]] // Vende 0.5 lote com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "BuyOrder",
      aliases: "",
      description: {
         simple: "Coloca uma ordem pendente de compra.",
         complex:
            "Esta função coloca uma ordem pendente de compra (Buy Limit/Stop) com parâmetros opcionais de take profit, stop loss e comentário personalizado.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "price",
            comment: "Preço de ativação para a ordem pendente.",
         },
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "BuyOrder[1.12000, 0.1, 100, 50] // Ordem pendente de compra em 1.12000 com TP 100 pontos e SL 50 pontos",
         "BuyOrder[1.11500, 0.5] // Ordem pendente de compra em 1.11500 sem TP/SL",
         "BuyOrder[1.11500, 0.5, TickToPoint[20], TickToPoint[20]] // Ordem pendente de compra em 1.11500 com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "SellOrder",
      aliases: "",
      description: {
         simple: "Coloca uma ordem pendente de venda.",
         complex:
            "Esta função coloca uma ordem pendente de venda (Sell Limit/Stop) com parâmetros opcionais de take profit, stop loss e comentário personalizado.",
      },
      parameters: [
         {
            type: { type: "double" },
            name: "price",
            comment: "Preço de ativação para a ordem pendente.",
         },
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote da operação.",
         },
         {
            type: { type: "int" },
            name: "tpPoints",
            comment: "Pontos para o take profit (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "int" },
            name: "slPoints",
            comment: "Pontos para o stop loss (0 para desativar).",
            value: "0",
         },
         {
            type: { type: "string" },
            name: "comment",
            comment: "Comentário associado à ordem.",
            value: '"SB-PlaceByFunction"',
         },
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo (vazio para usar o símbolo atual).",
            value: "REAL",
         },
      ],
      examples: [
         "SellOrder[1.13000, 0.1, 100, 50] // Ordem pendente de venda em 1.13000 com TP 100 pontos e SL 50 pontos",
         "SellOrder[1.13500, 0.5] // Ordem pendente de venda em 1.13500 sem TP/SL",
         "SellOrder[1.13500, 0.5, TickToPoint[20], TickToPoint[20]] // Ordem pendente de venda em 1.13500 com TP/SL em 20 ticks",
      ],
      returns: {
         success: {
            message: "Retorna true se a ordem for executada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna false se a ordem não for executada com sucesso.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosClose",
      aliases: "",
      description: {
         simple: "Fecha uma posição aberta completamente.",
         complex:
            "Esta função fecha completamente uma posição aberta no mercado, identificada pelo seu ticket. O fechamento é feito ao preço atual de mercado.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser fechada.",
         },
      ],
      examples: ["PosClose[PosTicket[0]] // Fecha completamente a ultima posição aberta"],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a posição for fechada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição não for encontrada ou não puder ser fechada.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosClosePartial",
      aliases: "",
      description: {
         simple: "Fecha parcialmente uma posição aberta.",
         complex: "Esta função fecha parcialmente uma posição aberta no mercado, reduzindo seu volume pelo valor especificado.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser parcialmente fechada.",
         },
         {
            type: { type: "double" },
            name: "volume",
            comment: "Volume/lote a ser fechado.",
         },
      ],
      examples: ["PosClosePartial[PosTicket[0], 0.5] // Fecha 0.5 lotes da ultima posição aberta"],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a posição for parcialmente fechada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição não for encontrada, o volume for inválido ou não puder ser fechada.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderClose",
      aliases: "",
      description: {
         simple: "Cancela uma ordem pendente.",
         complex: "Esta função cancela uma ordem pendente (limit/stop) identificada pelo seu ticket.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem pendente a ser cancelada.",
         },
      ],
      examples: ["OrderClose[OrderTicket[0]] // Cancela a ultima ordem pendente"],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a ordem for cancelada com sucesso.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a ordem não for encontrada ou não puder ser cancelada.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as posições abertas.",
         complex: "Esta função fecha todas as posições abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "PosCloseAll[] // Fecha todas as posições abertas em todos os símbolos",
         "PosCloseAll[EURUSD] // Fecha todas as posições abertas somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de posições fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma posição for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosBuyCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as posições de compra abertas.",
         complex: "Esta função fecha todas as posições de compra (Buy) abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "PosBuyCloseAll[] // Fecha todas as posições de compra em todos os símbolos",
         "PosBuyCloseAll[EURUSD] // Fecha todas as posições de compra somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de posições de compra fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma posição de compra for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosSellCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as posições de venda abertas.",
         complex: "Esta função fecha todas as posições de venda (Sell) abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "PosSellCloseAll[] // Fecha todas as posições de venda em todos os símbolos",
         "PosSellCloseAll[EURUSD] // Fecha todas as posições de venda somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de posições de venda fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma posição de venda for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as ordens abertas.",
         complex: "Esta função fecha todas as ordens abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "OrderCloseAll[] // Fecha todas as ordens abertas em todos os símbolos",
         "OrderCloseAll[EURUSD] // Fecha todas as ordens abertas somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de ordens fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma ordem for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderBuyCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as ordens de compra abertas.",
         complex: "Esta função fecha todas as ordens de compra (Buy) abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "OrderBuyCloseAll[] // Fecha todas as ordens de compra em todos os símbolos",
         "OrderBuyCloseAll[EURUSD] // Fecha todas as ordens de compra somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de ordens de compra fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma ordem de compra for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderSellCloseAll",
      aliases: "",
      description: {
         simple: "Fecha todas as ordens de venda abertas.",
         complex: "Esta função fecha todas as ordens de venda (Sell) abertas no mercado, podendo ser filtradas por símbolo.",
      },
      parameters: [
         {
            type: { type: "string" },
            name: "symbol",
            comment: "Símbolo do ativo.",
            value: "REAL",
         },
         {
            type: { type: "ulong" },
            name: "magic",
            comment: "Número mágico para filtrar as operações.",
            value: "MAGIC",
         },
      ],
      examples: [
         "OrderSellCloseAll[] // Fecha todas as ordens de venda em todos os símbolos",
         "OrderSellCloseAll[EURUSD] // Fecha todas as ordens de venda somente no EURUSD",
      ],
      returns: {
         success: {
            message: "Retorna o número de ordens de venda fechadas com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna 0 se nenhuma ordem de venda for fechada.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosModify",
      aliases: "",
      description: {
         simple: "Modifica os níveis de take profit e stop loss de uma posição aberta.",
         complex:
            "Esta função permite alterar os níveis de take profit e/ou stop loss de uma posição aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take. (0= ignora).",
            value: "0",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss. (0= ignora).",
            value: "0",
         },
      ],
      examples: [
         "PosModify[123456, TYPE_PRICE, 1.12500, 1.11500] // Altera TP para 1.12500 e SL para 1.11500 (valores absolutos)",
         "PosModify[123456, TYPE_POINT, 300, 150] // Altera TP para +300 pontos e SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosModifyTake",
      aliases: "",
      description: {
         simple: "Modifica apenas o take profit de uma posição aberta.",
         complex: "Esta função permite alterar somente o nível de take profit de uma posição aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take profit (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "PosModifyTake[123456, TYPE_PRICE, 1.12500] // Altera TP para 1.12500 (valor absoluto)",
         "PosModifyTake[123456, TYPE_POINT, 300] // Altera TP para +300 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "PosModifyStop",
      aliases: "",
      description: {
         simple: "Modifica apenas o stop loss de uma posição aberta.",
         complex: "Esta função permite alterar somente o nível de stop loss de uma posição aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "PosModifyStop[123456, TYPE_PRICE, 1.11500] // Altera SL para 1.11500 (valor absoluto)",
         "PosModifyStop[123456, TYPE_POINT, 150] // Altera SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderModify",
      aliases: "",
      description: {
         simple: "Modifica os níveis de take profit e stop loss de uma ordem aberta.",
         complex:
            "Esta função permite alterar os níveis de take profit e/ou stop loss de uma ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take. (0= ignora).",
            value: "0",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss. (0= ignora).",
            value: "0",
         },
         {
            type: { type: "double" },
            name: "price",
            comment: "Valor do novo preço. (0= ignora).",
            value: "0",
         },
      ],
      examples: [
         "OrderModify[123456, TYPE_PRICE, 1.12500, 1.11500] // Altera TP para 1.12500 e SL para 1.11500 (valores absolutos)",
         "OrderModify[123456, TYPE_POINT, 300, 150] // Altera TP para +300 pontos e SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderModifyTake",
      aliases: "",
      description: {
         simple: "Modifica apenas o take profit de uma ordem aberta.",
         complex: "Esta função permite alterar somente o nível de take profit de uma ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take profit (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "OrderModifyTake[123456, TYPE_PRICE, 1.12500] // Altera TP para 1.12500 (valor absoluto)",
         "OrderModifyTake[123456, TYPE_POINT, 300] // Altera TP para +300 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderModifyStop",
      aliases: "",
      description: {
         simple: "Modifica apenas o stop loss de uma ordem aberta.",
         complex: "Esta função permite alterar somente o nível de stop loss de uma ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "OrderModifyStop[123456, TYPE_PRICE, 1.11500] // Altera SL para 1.11500 (valor absoluto)",
         "OrderModifyStop[123456, TYPE_POINT, 150] // Altera SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "OrderModifyPrice",
      aliases: "",
      description: {
         simple: "Modifica apenas o preço de uma ordem aberta.",
         complex: "Esta função permite alterar somente o preço de uma ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a ordem a ser modificada.",
         },
         {
            type: { type: "double" },
            name: "price",
            comment: "Valor do novo preço.",
         },
      ],
      examples: ["OrderModifyPrice[123456, 1.11500] // Altera preço para 1.11500"],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "Modify",
      aliases: "",
      description: {
         simple: "Modifica os níveis de take profit e stop loss de uma posição ou ordem aberta.",
         complex:
            "Esta função permite alterar os níveis de take profit e/ou stop loss de uma posição ou ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take. (0= ignora).",
            value: "0",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss. (0= ignora).",
            value: "0",
         },
      ],
      examples: [
         "Modify[123456, TYPE_PRICE, 1.12500, 1.11500] // Altera TP para 1.12500 e SL para 1.11500 (valores absolutos)",
         "Modify[123456, TYPE_POINT, 300, 150] // Altera TP para +300 pontos e SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição ou ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "ModifyTake",
      aliases: "",
      description: {
         simple: "Modifica apenas o take profit de uma posição ou ordem aberta.",
         complex:
            "Esta função permite alterar somente o nível de take profit de uma posição ou ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "take",
            comment: "Valor do novo take profit (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "ModifyTake[123456, TYPE_PRICE, 1.12500] // Altera TP para 1.12500 (valor absoluto)",
         "ModifyTake[123456, TYPE_POINT, 300] // Altera TP para +300 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição ou ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.TRADE,
      name: "ModifyStop",
      aliases: "",
      description: {
         simple: "Modifica apenas o stop loss de uma posição ou ordem aberta.",
         complex:
            "Esta função permite alterar somente o nível de stop loss de uma posição ou ordem aberta existente, utilizando diferentes métodos de cálculo.",
      },
      parameters: [
         {
            type: { type: "ulong" },
            name: "ticket",
            comment: "Número do ticket que identifica a posição a ser modificada.",
         },
         {
            type: {
               type: "ENUM_TRADE_MODIFY",
               typeLink: "/references/enumerators#trade-modify",
            },
            name: "method",
            comment: "Método de cálculo: 'TYPE_PRICE', 'TYPE_POINT'.",
         },
         {
            type: { type: "double" },
            name: "stop",
            comment: "Valor do novo stop loss (0 mantém inalterado).",
            value: "0",
         },
      ],
      examples: [
         "ModifyStop[123456, TYPE_PRICE, 1.11500] // Altera SL para 1.11500 (valor absoluto)",
         "ModifyStop[123456, TYPE_POINT, 150] // Altera SL para -150 pontos do preço de abertura",
      ],
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a modificação for bem-sucedida.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se a posição ou ordem não for encontrada ou a modificação falhar.",
            type: { type: "bool" },
         },
      },
   },
].forEach((fn: FunctionPlaceholderInterface) => {
   const existing = FUNCTION_MAPPING.get(fn.category);
   if (!existing) {
      FUNCTION_MAPPING.set(fn.category, new Map([[fn.name, fn]]));
   } else {
      existing.set(fn.name, fn);
   }
});

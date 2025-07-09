import { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";
import type { FunctionModel } from "../interfaces/functions-interface";

export const functionsData: FunctionModel[] = [
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "Teste1",
      aliases: "T1",
      description: {
         simple: "Retorna o nome Teste",
         complex:
            "Esta função retorna o nome Teste e retorna o nome Invalid em caso de erro.",
      },
      parameters: [],
      examples: ["Teste1[Param1, Param2]", "T1[Param1]"],
      returns: {
         success: {
            message: "Em caso de sucesso retorno o nome Teste",
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "Teste12",
      aliases: "T1",
      description: {
         simple: "Retorna o nome Teste",
         complex:
            "Esta função retorna o nome Teste e retorna o nome Invalid em caso de erro.",
      },
      parameters: [
         {
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
            name: "param1",
            comment: "Primeiro parâmetro",
         },
         {
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
            name: "param2",
            comment: "Segundo parâmetro",
            value: "666",
         },
      ],
      examples: [
         "```js\nTeste1[Param1, Param2]\n```",
         "```js\nT1[Param1]\n```",
      ],
      returns: {
         success: {
            message: "Em caso de sucesso retorno o nome Teste",
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
         },
         error: {
            message: "Em caso de erro retorno o nome Invalid",
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "Teste3",
      aliases: "T2",
      description: {
         simple: "Retorna o nome Teste",
         complex:
            "Esta função retorna o nome Teste e retorna o nome Invalid em caso de erro.",
      },
      parameters: [
         {
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
            name: "param1",
            comment: "Primeiro parâmetro",
         },
         {
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
            name: "param2",
            comment: "Segundo parâmetro",
            value: "666",
         },
      ],
      examples: [
         "```js\nTeste1[Param1, Param2]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
         "```js\nT1[Param1]\n```",
      ],
      returns: {
         success: {
            message: "Em caso de sucesso retorno o nome Teste",
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
         },
         error: {
            message: "Em caso de erro retorno o nome Invalid",
            type: {
               type: "string",
               typeLink: "/fundamentals/types",
            },
         },
      },
   },

   //
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "SemParametros",
      aliases: "SP",
      description: {
         simple: "Função sem parâmetros",
         complex: "Essa função não requer parâmetros e retorna um valor fixo.",
      },
      parameters: [],
      examples: ["```js\nSemParametros[]\n```"],
      returns: {
         success: {
            message: "Retorna um número fixo",
            type: {
               type: "number",
               typeLink: "/fundamentals/types",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "ComErroSomente",
      aliases: "CE",
      description: {
         simple: "Função que só retorna erro",
         complex: "Essa função sempre retorna erro.",
      },
      parameters: [],
      examples: ["```js\nComErroSomente[]\n```"],
      returns: {
         error: {
            message: "Sempre retorna erro",
            type: {
               type: "ErrorType",
               typeLink: "/custom/error-type",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "MuitosAliases",
      aliases: "MA,MultiAlias,MAL",
      description: {
         simple: "Função com múltiplos aliases",
         complex:
            "Essa função pode ser chamada por diversos nomes alternativos.",
      },
      parameters: [
         {
            type: {
               type: "number",
               typeLink: "/fundamentals/types",
            },
            name: "quantidade",
            comment: "Número de itens",
         },
      ],
      examples: ["```js\nMA[10]\n```", "```js\nMultiAlias[20]\n```"],
      returns: {
         success: {
            message: "Retorna a soma dos itens",
            type: {
               type: "number",
               typeLink: "/fundamentals/types",
            },
         },
      },
   },
   {
      category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
      name: "SemRetorno",
      aliases: "SR",
      description: {
         simple: "Função que não retorna nada",
         complex: "Executa uma ação mas não possui retorno.",
      },
      parameters: [
         {
            type: {
               type: "boolean",
               typeLink: "/fundamentals/types",
            },
            name: "log",
            comment: "Se deve exibir logs",
            value: "true",
         },
      ],
      examples: ["```js\nSR[true]\n```"],
      returns: {},
   },
];

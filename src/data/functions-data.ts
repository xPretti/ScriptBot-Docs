import { ENUM_FUNCTION_CATEGORY_TYPE } from "src/enums/function-enums";
import type { FunctionModel } from "../interfaces/functions-interface";

export const functionsData: FunctionModel[] = [
  {
    category: ENUM_FUNCTION_CATEGORY_TYPE.INDICATORS,
    name: "Teste1",
    aliases: "T1",
    descricao: {
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
    examples: ["```js\nTeste1[Param1, Param2]\n```", "```js\nT1[Param1]\n```"],
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
    name: "Teste12",
    aliases: "T1",
    descricao: {
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
    examples: ["```js\nTeste1[Param1, Param2]\n```", "```js\nT1[Param1]\n```"],
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
    category: ENUM_FUNCTION_CATEGORY_TYPE.CANDLES,
    name: "Teste2",
    aliases: "T2",
    descricao: {
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
    examples: ["```js\nTeste1[Param1, Param2]\n```", "```js\nT1[Param1]\n```"],
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
];

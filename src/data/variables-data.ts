import { ENUM_VARIABLE_CATEGORY_TYPE } from "@src/enums/placeholders-enum";
import type { PlaceholderInterface } from "@src/interfaces/placeholder-interface";

export const VARIABLE_MAPPING: Map<ENUM_VARIABLE_CATEGORY_TYPE, Map<string, PlaceholderInterface>> = new Map();

[
   // Local Position
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TICKET",
      aliases: "",
      description: {
         simple: "Retorna o ticket do pedido.",
         full: "Retorna o número do ticket identificador único do pedido atual no escopo local, permitindo rastrear a operação diretamente no servidor.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket identificador do pedido.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe ou não encontre o ticket.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_REQUEST",
      aliases: "",
      description: {
         simple: "Retorna o ticket de solicitação do pedido.",
         full: "Retorna o número do ticket de requisição enviado originalmente ao servidor, útil para auditoria e checagem de status de ordens enviadas.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket da solicitação.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PARENT",
      aliases: "",
      description: {
         simple: "Retorna o ticket da ordem-mãe, se houver.",
         full: "Retorna o ticket identificador da ordem-mãe (parent) que originou a posição ou ordem atual, ideal para estratégias que utilizam ordens parciais ou dependentes.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket da ordem-mãe correspondente.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) se não houver ordem-mãe associada.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_MAGIC",
      aliases: "",
      description: {
         simple: "Retorna o magic number do pedido.",
         full: "Retorna o Magic Number (número mágico identificador) atribuído ao pedido, permitindo isolar e gerenciar operações de robôs específicos.",
      },
      returns: {
         success: {
            message: "Retorna o número mágico (ID identificador do robô) do pedido.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_SYMBOL",
      aliases: "",
      description: {
         simple: "Retorna o ativo no qual o pedido foi criado.",
         full: "Retorna o código textual (string) correspondente ao ativo/símbolo de mercado no qual o pedido local foi gerado.",
      },
      returns: {
         success: {
            message: "Retorna o nome do ativo/símbolo (ex: 'EURUSD', 'PETR4').",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TIME",
      aliases: "",
      description: {
         simple: "Retorna o horário de abertura do pedido.",
         full: "Retorna a data e o horário exatos em que o pedido local foi criado e registrado, mensurado em segundos a partir da época padrão.",
      },
      returns: {
         success: {
            message: "Retorna a data e o horário de abertura em segundos.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PRICE",
      aliases: "",
      description: {
         simple: "Retorna o preço de abertura do pedido.",
         full: "Retorna o preço exato de execução ou de envio configurado para o pedido no escopo local.",
      },
      returns: {
         success: {
            message: "Retorna o valor do preço de execução do pedido.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_SL",
      aliases: "",
      description: {
         simple: "Retorna o preço do stop loss do pedido.",
         full: "Retorna a cotação de preço definida como Stop Loss para a proteção da posição ou ordem local configurada.",
      },
      returns: {
         success: {
            message: "Retorna o preço configurado para o Stop Loss.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver Stop Loss definido ou em caso de erro.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TP",
      aliases: "",
      description: {
         simple: "Retorna o preço do take profit do pedido.",
         full: "Retorna a cotação de preço definida como Take Profit (alvo de ganho) para a saída automatizada da ordem local.",
      },
      returns: {
         success: {
            message: "Retorna o preço configurado para o Take Profit.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 se não houver Take Profit definido ou em caso de erro.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_PROFIT",
      aliases: "",
      description: {
         simple: "Retorna o lucro atual da posição.",
         full: "Retorna o lucro ou prejuízo flutuante em tempo real calculado especificamente para esta posição no escopo local.",
      },
      returns: {
         success: {
            message: "Retorna o valor do lucro flutuante atual da posição.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_VOLUME",
      aliases: "",
      description: {
         simple: "Retorna o volume atual do pedido.",
         full: "Retorna a quantidade de lotes ou contratos atuais alocados para o pedido ou para a posição local selecionada.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de lotes/volume atual do pedido.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_UPTIME",
      aliases: "",
      description: {
         simple: "Retorna o tempo, em segundos, que o pedido está aberto.",
         full: "Calcula e retorna o tempo total decorrido, medido em segundos, desde a abertura inicial do pedido até o momento presente.",
      },
      returns: {
         success: {
            message: "Retorna o tempo total decorrido em segundos.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_TYPE",
      aliases: "",
      description: {
         simple: "Retorna o tipo do pedido (0 = Compra, 1 = Venda).",
         full: "Retorna o enumerador de tipo de trade correspondente à direção do pedido (Compra ou Venda) mapeado localmente.",
      },
      returns: {
         success: {
            message: "Retorna o identificador do tipo de trade ('TYPE_BUY' ou 'TYPE_SELL').",
            type: { type: "ENUM_TRADE" },
         },
         error: {
            message: "Retorna um valor padrão inválido caso falhe.",
            type: { type: "ENUM_TRADE" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_COMMENT",
      aliases: "",
      description: {
         simple: "Retorna o comentário associado ao pedido.",
         full: "Retorna o texto de comentário ou etiqueta string personalizada que foi vinculada ao pedido no momento de sua criação.",
      },
      returns: {
         success: {
            message: "Retorna o texto contido no comentário do pedido.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_CHILD",
      aliases: "",
      description: {
         simple: "Retorna se o pedido é uma ordem filha secundária.",
         full: "Verifica e retorna um estado lógico indicando se o pedido foi derivado de um gerenciamento interno como uma ordem parcial/filha.",
      },
      returns: {
         success: {
            message: "Retorna verdadeiro se o pedido for uma ordem filha secundária.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso caso não seja uma ordem filha ou em caso de erro.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_CLIENT",
      aliases: "",
      description: {
         simple: "Retorna se o pedido foi adicionado usando expressões lógicas.",
         full: "Retorna um indicador booleano confirmando se a operação foi solicitada diretamente pelas funções programáticas do cliente (ex: Buy(), Sell()).",
      },
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a operação foi adicionada via expressões lógicas do cliente.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) caso contrário.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_POSITION,
      name: "_FLAG_SA",
      aliases: "",
      description: {
         simple: "Retorna se o pedido foi adicionado pelo subsistema de Preço Médio Simples.",
         full: "Retorna verdadeiro se a ordem ou posição local foi gerada e gerenciada de forma automatizada pelo subsistema de Preço Médio Simples (Simple Average).",
      },
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se o pedido foi originado pelo subsistema de Preço Médio Simples.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) caso contrário.",
            type: { type: "bool" },
         },
      },
   },

   // Local Trigger
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_TYPE",
      aliases: "",
      description: {
         simple: "Retorna o tipo do gatilho. (0 = Compra, 1 = Venda)",
         full: "Retorna a classificação direcional do gatilho configurado na estratégia local, indicando se sua natureza é de compra ou de venda.",
      },
      returns: {
         success: {
            message: "Retorna o tipo de trade associado ao gatilho ('TYPE_BUY' ou 'TYPE_SELL').",
            type: { type: "ENUM_TRADE" },
         },
         error: {
            message: "Retorna um valor padrão ou inválido caso falhe.",
            type: { type: "ENUM_TRADE" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_IS_OPERATION",
      aliases: "",
      description: {
         simple: "Retorna se o gatilho é uma operação boleana.",
         full: "Verifica e retorna se o gatilho atual se comporta com base em uma validação puramente lógica/booleana matemática combinada.",
      },
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se for avaliado como uma operação boleana.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) caso contrário.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_OPERATION",
      aliases: "",
      description: {
         simple: "Retorna o resultado da operação. (0 = Falso, 1 = Verdadeiro)",
         full: "Retorna o resultado final da validação lógica e matemática avaliada pelas regras internas do gatilho local.",
      },
      returns: {
         success: {
            message: "Retorna verdadeiro (true) se a operação lógica do gatilho for validada.",
            type: { type: "bool" },
         },
         error: {
            message: "Retorna falso (false) se falhar ou não for validada.",
            type: { type: "bool" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_PRICE",
      aliases: "",
      description: {
         simple: "Retorna o preço do gatilho, caso ele seja um gatilho de preço.",
         full: "Retorna o patamar de preço alvo específico estipulado nas configurações do gatilho de cotação.",
      },
      returns: {
         success: {
            message: "Retorna o patamar de preço definido no gatilho.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso não seja um gatilho de preço ou falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_WEIGHT_MIN",
      aliases: "",
      description: {
         simple: "Retorna o peso mínimo do filtro.",
         full: "Retorna a pontuação ou peso mínimo exigido pelo sistema de filtros de gatilho para autorizar o disparo de uma operação.",
      },
      returns: {
         success: {
            message: "Retorna o valor numérico do peso mínimo exigido.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_WEIGHT_VALIDATE",
      aliases: "",
      description: {
         simple: "Retorna o peso total validado do filtro.",
         full: "Retorna a soma acumulada dos pesos de todos os critérios e filtros que foram validados com sucesso no cálculo atual.",
      },
      returns: {
         success: {
            message: "Retorna o peso total que foi validado com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros validados.",
         full: "Retorna a contagem quantitativa total de filtros gerais vinculados ao gatilho que atenderam com sucesso aos requisitos de validação.",
      },
      returns: {
         success: {
            message: "Retorna a contagem total de filtros validados com sucesso.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso nenhum filtro seja validado ou falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS_COM",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros complementares validados.",
         full: "Retorna a contagem quantitativa de filtros definidos como opcionais ou complementares que foram ativados positivamente.",
      },
      returns: {
         success: {
            message: "Retorna a contagem de filtros complementares validados.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.LOCAL_TRIGGER,
      name: "_TRIG_VALIDS_REQ",
      aliases: "",
      description: {
         simple: "Retorna a quantidade de filtros obrigatórios validados.",
         full: "Retorna o número exato de filtros classificados como estritamente obrigatórios (required) que foram validados pelo gatilho.",
      },
      returns: {
         success: {
            message: "Retorna a contagem de filtros obrigatórios validados.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },

   // ACCOUNT
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "BALANCE",
      aliases: "BAL",
      description: {
         simple: "Retorna o saldo da conta.",
         full: "Retorna o saldo financeiro líquido e consolidado da conta de negociação, desconsiderando variações de posições flutuantes abertas.",
      },
      returns: {
         success: {
            message: "Retorna o valor monetário do saldo da conta.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "CREDIT",
      aliases: "CRED",
      description: {
         simple: "Retorna o crédito da conta.",
         full: "Retorna a quantia financeira de fundos de crédito não sacáveis concedidos pela corretora para suporte de margem operacional.",
      },
      returns: {
         success: {
            message: "Retorna o valor do crédito concedido na conta.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "EQUITY",
      aliases: "EQT",
      description: {
         simple: "Retorna o patrimônio líquido da conta.",
         full: "Retorna o patrimônio líquido (Equity) flutuante atualizado instantaneamente, somando o saldo e o lucro/prejuízo das ordens em aberto.",
      },
      returns: {
         success: {
            message: "Retorna o patrimônio líquido flutuante (Equity) em tempo real.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN",
      aliases: "",
      description: {
         simple: "Retorna a margem da conta.",
         full: "Retorna o montante de dinheiro colateral retido e exigido pela corretora para manter todas as posições atuais abertas.",
      },
      returns: {
         success: {
            message: "Retorna os fundos reservados como margem de garantia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_FREE",
      aliases: "MARGF",
      description: {
         simple: "Retorna a margem livre da conta.",
         full: "Retorna o valor disponível em conta livre de garantias, utilizável para a abertura de novos contratos ou saques ordinários.",
      },
      returns: {
         success: {
            message: "Retorna o valor da margem livre disponível para abrir novas posições.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_LEVEL",
      aliases: "MARGL",
      description: {
         simple: "Retorna o nível de margem da conta.",
         full: "Retorna a relação percentual calculada entre o patrimônio líquido e a margem retida, servindo de termômetro contra chamadas de margem (Margin Call).",
      },
      returns: {
         success: {
            message: "Retorna o percentual do nível de margem da conta.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_INITIAL",
      aliases: "MARGI",
      description: {
         simple: "Retorna a margem inicial da conta.",
         full: "Retorna o valor mínimo exigido de fundos para iniciar a abertura de posições de acordo com os ativos pretendidos.",
      },
      returns: {
         success: {
            message: "Retorna os fundos necessários para a margem inicial exigida.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "MARGIN_MAINTENANCE",
      aliases: "MARGM",
      description: {
         simple: "Retorna a margem de manutenção da conta.",
         full: "Retorna a quantia mínima obrigatória que deve permanecer em conta para evitar a liquidação compulsória (Stop Out) das posições.",
      },
      returns: {
         success: {
            message: "Retorna a margem mínima de manutenção da conta.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "LOGIN",
      aliases: "",
      description: {
         simple: "Retorna o número da conta.",
         full: "Retorna o identificador numérico de registro primário (Login) correspondente à conta ativa conectada à plataforma.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico de login da conta.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "NAME",
      aliases: "",
      description: {
         simple: "Retorna o nome do titular da conta.",
         full: "Retorna a sequência textual representando o nome completo do investidor cadastrado e proprietário da conta corrente de negociação.",
      },
      returns: {
         success: {
            message: "Retorna o nome completo cadastrado na conta do usuário.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "SERVER",
      aliases: "SRV",
      description: {
         simple: "Retorna o servidor da conta.",
         full: "Retorna o nome do servidor ativo da corretora no qual o terminal está conectado (ex: Broker-Demo, Broker-Live).",
      },
      returns: {
         success: {
            message: "Retorna o nome do servidor de negociação da corretora.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "CURRENCY",
      aliases: "CURR",
      description: {
         simple: "Retorna a moeda da conta.",
         full: "Retorna o código internacional de três letras da moeda padrão utilizada para depósito e liquidação financeira na conta.",
      },
      returns: {
         success: {
            message: "Retorna o código da moeda base da conta (ex: 'BRL', 'USD').",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "COMPANY",
      aliases: "COMP",
      description: {
         simple: "Retorna a empresa/corretora da conta.",
         full: "Retorna a identificação textual jurídica da corretora ou instituição financeira responsável pela custódia e intermediação da conta.",
      },
      returns: {
         success: {
            message: "Retorna o nome da empresa corretora que hospeda a conta.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.ACCOUNT,
      name: "LIMIT_ORDER",
      aliases: "LIMITO",
      description: {
         simple: "Retorna o limite máximo de ordens da conta.",
         full: "Retorna o teto numérico máximo permitido contratualmente pela corretora para ordens pendentes simultâneas na mesma conta.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade limite de ordens permitidas simultaneamente.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },

   // MARKET
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TOTAL_CANDLE",
      aliases: "TCANDLE",
      description: {
         simple: "Retorna o total de candles.",
         full: "Retorna a quantidade de barras/candles acumulados no histórico carregado no gráfico para o ativo e período atuais.",
      },
      returns: {
         success: {
            message: "Retorna o total de barras/candles disponíveis no histórico do gráfico.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso ocorra algum erro.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_LEFT",
      aliases: "TLEFT",
      description: {
         simple: "Retorna o tempo restante.",
         full: "Mapeia e retorna a contagem regressiva em segundos até o fechamento oficial do candle atual no timeframe selecionado.",
      },
      returns: {
         success: {
            message: "Retorna o tempo restante para o fechamento do candle atual em segundos.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_CURRENT",
      aliases: "TCURRENT",
      description: {
         simple: "Retorna o tempo atual.",
         full: "Retorna o último registro de data e hora conhecido do mercado e enviado pelo servidor de negociação da plataforma.",
      },
      returns: {
         success: {
            message: "Retorna a última hora conhecida do servidor de mercado.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_LOCAL",
      aliases: "TLOCAL",
      description: {
         simple: "Retorna o tempo local.",
         full: "Retorna o horário corrente lido diretamente no relógio interno do sistema operacional/máquina onde o terminal está rodando.",
      },
      returns: {
         success: {
            message: "Retorna o horário atual da máquina local onde o robô está rodando.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "TIME_SERVER",
      aliases: "TSERVER",
      description: {
         simple: "Retorna o tempo do servidor.",
         full: "Retorna o horário exato do servidor da corretora, utilizado para sincronização de tarefas temporais e horários de negociação.",
      },
      returns: {
         success: {
            message: "Retorna o horário exato sincronizado com o servidor da corretora.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "DAY_OF_WEEK",
      aliases: "DAYW",
      description: {
         simple: "Retorna o dia da semana.",
         full: "Retorna um index inteiro representando o dia atual da semana (sendo 0 para Domingo, 1 para Segunda, até 6 para Sábado).",
      },
      returns: {
         success: {
            message: "Retorna o dia da semana atual (0 para Domingo, 1 para Segunda, etc.).",
            type: { type: "int" },
         },
         error: {
            message: "-1 caso ocorra um erro.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "DAY_OF_YEAR",
      aliases: "DAYY",
      description: {
         simple: "Retorna o dia do ano.",
         full: "Retorna o número do dia ordinal do ano corrente variando de 1 a 366 conforme o calendário juliano/gregoriano.",
      },
      returns: {
         success: {
            message: "Retorna o dia corrido do ano (de 1 a 366).",
            type: { type: "int" },
         },
         error: {
            message: "-1 caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "MONTH",
      aliases: "",
      description: {
         simple: "Retorna o mês atual.",
         full: "Retorna o número inteiro do mês do ano corrente (iniciando em 1 para Janeiro e encerrando em 12 para Dezembro).",
      },
      returns: {
         success: {
            message: "Retorna o número do mês atual (1 para Janeiro, 12 para Dezembro).",
            type: { type: "int" },
         },
         error: {
            message: "-1 caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "YEAR",
      aliases: "",
      description: {
         simple: "Retorna o ano atual.",
         full: "Retorna o valor em formato de quatro dígitos correspondente ao ano civil em andamento mapeado pela plataforma.",
      },
      returns: {
         success: {
            message: "Retorna o ano atual com quatro dígitos (ex: 2026).",
            type: { type: "int" },
         },
         error: {
            message: "-1 caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST",
      aliases: "",
      description: {
         simple: "Retorna o último preço comercializado.",
         full: "Retorna o preço da última transação comercializada de fato no livro de ofertas do ativo (Last price).",
      },
      returns: {
         success: {
            message: "Retorna o valor do último preço negociado no mercado.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_HIGH",
      aliases: "LASTH",
      description: {
         simple: "Retorna a máxima do dia.",
         full: "Retorna a cotação máxima absoluta registrada em negócios de balcão ou mercado para o ativo durante a sessão atual.",
      },
      returns: {
         success: {
            message: "Retorna o maior preço atingido no dia corrente.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_LOW",
      aliases: "LASTL",
      description: {
         simple: "Retorna a mínima do dia.",
         full: "Retorna a cotação mínima absoluta registrada em negócios para o ativo durante a sessão diária em vigor.",
      },
      returns: {
         success: {
            message: "Retorna o menor preço atingido no dia corrente.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "LAST_TIME",
      aliases: "LASTT",
      description: {
         simple: "Retorna o último tempo comercializado.",
         full: "Retorna o horário do último negócio registrado no ativo na bolsa ou ambiente de balcão em formato datetime.",
      },
      returns: {
         success: {
            message: "Retorna o horário da última negociação realizada.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK",
      aliases: "",
      description: {
         simple: "Retorna o preço de compra.",
         full: "Retorna o preço de venda atual de mercado mais baixo disponível (Ask), que representa o preço pago para entrar comprado.",
      },
      returns: {
         success: {
            message: "Retorna o preço de oferta atual de compra (Ask).",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK_HIGH",
      aliases: "ASKH",
      description: {
         simple: "Retorna o preço máximo de compra.",
         full: "Retorna a cotação mais elevada atingida pela linha de Ask (compra) ao ulongo do dia operacional ativo.",
      },
      returns: {
         success: {
            message: "Retorna o maior valor de Ask atingido no dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "ASK_LOW",
      aliases: "ASKL",
      description: {
         simple: "Retorna o preço mínimo de compra.",
         full: "Retorna a menor cotação registrada para a linha de Ask (compra) durante a sessão corrente de mercado.",
      },
      returns: {
         success: {
            message: "Retorna o menor valor de Ask atingido no dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID",
      aliases: "",
      description: {
         simple: "Retorna o preço de venda.",
         full: "Retorna o preço de compra atual de mercado mais alto disponível (Bid), representando a cotação de execução imediata de uma venda.",
      },
      returns: {
         success: {
            message: "Retorna o preço de oferta atual de venda (Bid).",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID_HIGH",
      aliases: "BIDH",
      description: {
         simple: "Retorna o preço máximo de venda.",
         full: "Retorna a maior cotação de oferta de venda (Bid) registrada durante a sessão financeira atual.",
      },
      returns: {
         success: {
            message: "Retorna o maior valor de Bid atingido no dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "BID_LOW",
      aliases: "BIDL",
      description: {
         simple: "Retorna o preço mínimo de venda.",
         full: "Retorna o menor patamar de preço de oferta de venda (Bid) observado ao ulongo do dia operacional vigente.",
      },
      returns: {
         success: {
            message: "Retorna o menor valor de Bid atingido no dia.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "SYMBOL",
      aliases: "",
      description: {
         simple: "Retorna o ativo que o robô está operando.",
         full: "Retorna o nome descritivo do ativo financeiro principal configurado no gráfico ativo onde o robô executa a rotina.",
      },
      returns: {
         success: {
            message: "Retorna a string contendo o nome do ativo configurado no gráfico.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "MAGIC",
      aliases: "",
      description: {
         simple: "Retorna o id (magic number) que o robô está operando.",
         full: "Retorna o Magic Number global configurado nas definições de mercado para identificar as ordens deste robô.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico (magic number) definido na estratégia.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.MARKET,
      name: "REAL",
      aliases: "",
      description: {
         simple: "Retorna o ativo real, o ativo que as ordens serão executadas.",
         full: "Retorna a identificação string do ativo espelho ou real para o envio direto de ordens, util em contas cross-market.",
      },
      returns: {
         success: {
            message: "Retorna o nome correspondente do ativo real mapeado para execução.",
            type: { type: "string" },
         },
         error: {
            message: 'Retorna uma string vazia ("") caso falhe.',
            type: { type: "string" },
         },
      },
   },

   // OPEN TRADES
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_VOLUME_OPEN",
      aliases: "AVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições.",
         full: "Calcula o somatório total de lotes em aberto somando posições compradas e vendidas no mercado para o ativo.",
      },
      returns: {
         success: {
            message: "Retorna a soma acumulada dos volumes de todas as posições abertas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso não haja posições abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_VOLUME_OPEN",
      aliases: "BVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições de compra.",
         full: "Retorna o volume financeiro ou de lotes agregados restrito estritamente a ordens que estão compradas atualmente.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos volumes das posições de compra em aberto.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe ou não haja compras abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_VOLUME_OPEN",
      aliases: "SVOLO",
      description: {
         simple: "Retorna a soma do volume total das posições de venda.",
         full: "Retorna o volume total agregado de lotes ou contratos posicionados estritamente na direção de Venda (Short) no mercado.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos volumes das posições de venda em aberto.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe ou não haja vendas abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_POS_OPEN",
      aliases: "APOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas.",
         full: "Retorna o número inteiro total de ordens ativas executadas e que estão no mercado correndo risco flutuante.",
      },
      returns: {
         success: {
            message: "Retorna a contagem total de posições de mercado ativas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso não haja posições abertas.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_POS_OPEN",
      aliases: "BPOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas de compra.",
         full: "Retorna a contagem quantitativa inteira contendo o número de ordens de mercado ativas exclusivamente compradas.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de posições compradas ativas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_POS_OPEN",
      aliases: "SPOSO",
      description: {
         simple: "Retorna a quantidade de posições abertas de venda.",
         full: "Retorna a contagem quantitativa inteira contendo o número de ordens de mercado ativas exclusivamente vendidas.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de posições vendidas ativas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_OPEN",
      aliases: "AOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos, tanto de posições quanto de ordens.",
         full: "Retorna um somatório combinado indicando quantos registros ativos globais (posições de mercado + ordens pendentes limit/stop) existem.",
      },
      returns: {
         success: {
            message: "Retorna o somatório total de ordens pendentes e posições em aberto.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_OPEN",
      aliases: "BOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos de compra.",
         full: "Retorna a soma agregada de ordens pendentes de compra e posições ativas compradas que estão registradas no momento.",
      },
      returns: {
         success: {
            message: "Retorna o somatório de posições e ordens pendentes de compra.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_OPEN",
      aliases: "SOPEN",
      description: {
         simple: "Retorna a quantidade de pedidos abertos de venda.",
         full: "Retorna a soma agregada de ordens pendentes de venda e posições ativas vendidas que estão registradas no momento.",
      },
      returns: {
         success: {
            message: "Retorna o somatório de posições e ordens pendentes de venda.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_PROFIT_OPEN",
      aliases: "APROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições abertas.",
         full: "Calcula a soma de rendimento financeiro bruto (lucro/prejuízo) flutuante de todas as ordens de mercado unificadas.",
      },
      returns: {
         success: {
            message: "Retorna o lucro flutuante líquido somado de todas as posições.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_PROFIT_OPEN",
      aliases: "BPROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições de compra abertas.",
         full: "Exibe o balanço financeiro flutuante gerado em tempo real unicamente pelas operações na ponta compradora.",
      },
      returns: {
         success: {
            message: "Retorna o lucro flutuante líquido das posições de compra.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_PROFIT_OPEN",
      aliases: "SPROFITO",
      description: {
         simple: "Retorna a soma do lucro das posições de venda abertas.",
         full: "Exibe o balanço financeiro flutuante gerado em tempo real unicamente pelas operações na ponta vendedora.",
      },
      returns: {
         success: {
            message: "Retorna o lucro flutuante líquido das posições de venda.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_ORDER_OPEN",
      aliases: "AORDERO",
      description: {
         simple: "Retorna a quantidade de ordens abertas.",
         full: "Retorna o número de ordens pendentes estáticas no livro (como limits e stops) aguardando o preço atingir a cotação de acionamento.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade total de ordens de limite/stop pendentes no mercado.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) se não existirem ordens pendentes.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_ORDER_OPEN",
      aliases: "BORDERO",
      description: {
         simple: "Retorna a quantidade de ordens de compra abertas.",
         full: "Retorna a contagem exata de ordens de gatilho pendentes exclusivamente posicionadas na ponta compradora.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de ordens limit/stop pendentes de compra.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_ORDER_OPEN",
      aliases: "SORDERO",
      description: {
         simple: "Retorna a quantidade de ordens de venda abertas.",
         full: "Retorna a contagem exata de ordens de gatilho pendentes exclusivamente posicionadas na ponta vendedora.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de ordens limit/stop pendentes de venda.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_AVG_PRICE",
      aliases: "AAVG",
      version: "2.05",
      description: {
         simple: "Retorna o preço médio de todas as posições abertas.",
         full: "Calcula o preço médio ponderado total de todas as posições ativas (independente de direção) com base nos volumes individuais.",
      },
      returns: {
         success: {
            message: "Retorna o preço médio ponderado ponderando compras e vendas combinadas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "ALL_AVG_DIR",
      aliases: "AAVGDIR",
      version: "2.05",
      description: {
         simple: "Retorna a direção média das posições abertas. (-1 = Venda, 0 = Equilíbrio e 1 = Compra).",
         full: "Calcula a força e direção líquida dominante no mercado, retornando 1 para dominância de compra, -1 para venda e 0 para hedge perfeito.",
      },
      returns: {
         success: {
            message: "Retorna a direção dominante ponderada das operações ativas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) se houver equilíbrio perfeito ou erro.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_AVG_PRICE",
      aliases: "BAVG",
      version: "2.05",
      description: {
         simple: "Retorna o preço médio das posições de compra abertas.",
         full: "Calcula e retorna a cotação média ponderada baseada no preço de entrada e volume de todas as ordens exclusivamente compradas.",
      },
      returns: {
         success: {
            message: "Retorna o preço médio ponderado exclusivamente das posições compradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso não existam compras abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "BUY_AVG_DIR",
      aliases: "BAVGDIR",
      version: "2.05",
      description: {
         simple: "Retorna a direção média das posições de compra abertas.",
         full: "Retorna o valor direcional padrão que atesta a orientação majoritária das ordens posicionadas em compra.",
      },
      returns: {
         success: {
            message: "Retorna a direção representativa das compras abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_AVG_PRICE",
      aliases: "SAVG",
      version: "2.05",
      description: {
         simple: "Retorna o preço médio das posições de venda abertas.",
         full: "Calcula e retorna a cotação média ponderada baseada no preço de entrada e volume de todas as ordens exclusivamente vendidas.",
      },
      returns: {
         success: {
            message: "Retorna o preço médio ponderado exclusivamente das posições vendidas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso não existam vendas abertas.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.OPEN_TRADE,
      name: "SELL_AVG_DIR",
      aliases: "SAVGDIR",
      version: "2.05",
      description: {
         simple: "Retorna a direção média das posições de venda abertas.",
         full: "Retorna o valor direcional padrão que atesta a orientação majoritária das ordens posicionadas em venda.",
      },
      returns: {
         success: {
            message: "Retorna a direção representativa das vendas abertas.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },

   // CLOSED TRADES
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_VOLUME",
      aliases: "AVOL",
      description: {
         simple: "Retorna a soma total do volume.",
         full: "Retorna o volume financeiro ou quantitativo acumulado histórico de todas as transações finalizadas e liquidadas.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos volumes executados de todas as posições encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_VOLUME",
      aliases: "BVOL",
      description: {
         simple: "Retorna a soma do volume de compra.",
         full: "Retorna a quantidade volumétrica total histórica negociada restrita a operações de compra finalizadas.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos volumes de posições de compra encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_VOLUME",
      aliases: "SVOL",
      description: {
         simple: "Retorna a soma do volume de venda.",
         full: "Retorna a quantidade volumétrica total histórica negociada restrita a operações de venda finalizadas.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos volumes de posições de venda encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_PROFIT",
      aliases: "APROFIT",
      description: {
         simple: "Retorna o total do lucro.",
         full: "Retorna o lucro ou prejuízo final computado de todo o histórico fechado de ordens arquivadas na conta.",
      },
      returns: {
         success: {
            message: "Retorna o saldo acumulado de lucro/prejuízo de todas as posições fechadas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_PROFIT",
      aliases: "BPROFIT",
      description: {
         simple: "Retorna o total do lucro de compra.",
         full: "Retorna o balanço financeiro líquido acumulado das operações passadas executadas unicamente na ponta de Compra.",
      },
      returns: {
         success: {
            message: "Retorna o saldo de lucro líquido gerado por compras fechadas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_PROFIT",
      aliases: "SPROFIT",
      description: {
         simple: "Retorna o total do lucro de venda.",
         full: "Retorna o balanço financeiro líquido acumulado das operações passadas executadas unicamente na ponta de Venda.",
      },
      returns: {
         success: {
            message: "Retorna o saldo de lucro líquido gerado por vendas fechadas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_GAIN_PROFIT",
      aliases: "AGAINP",
      description: {
         simple: "Retorna o total de profit ganho ignorando as perdas.",
         full: "Filtra e retorna a soma monetária de receitas provenientes estritamente de ordens finalizadas com ganho, isolando os prejuízos.",
      },
      returns: {
         success: {
            message: "Retorna a soma financeira apenas das operações que fecharam positivas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_GAIN_PROFIT",
      aliases: "BGAINP",
      description: {
         simple: "Retorna o total de profit ganho em compras ignorando as perdas.",
         full: "Soma e retorna os rendimentos financeiros positivos oriundos unicamente de ordens de Compra de histórico.",
      },
      returns: {
         success: {
            message: "Retorna a soma financeira das compras que fecharam no positivo.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_GAIN_PROFIT",
      aliases: "SGAINP",
      description: {
         simple: "Retorna o total de profit ganho em vendas ignorando as perdas.",
         full: "Soma e retorna os rendimentos financeiros positivos oriundos unicamente de ordens de Venda de histórico.",
      },
      returns: {
         success: {
            message: "Retorna a soma financeira das vendas que fecharam no positivo.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_LOSS_PROFIT",
      aliases: "ALOSSP",
      description: {
         simple: "Retorna o total de profit perdido ignorando os ganhos.",
         full: "Filtra e retorna a soma absoluta de prejuízos de ordens encerradas no vermelho, ignorando os ganhos do histórico.",
      },
      returns: {
         success: {
            message: "Retorna o somatório financeiro exclusivo das posições encerradas com prejuízo.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_LOSS_PROFIT",
      aliases: "BLOSSP",
      description: {
         simple: "Retorna o total de profit perdido em compras ignorando os ganhos.",
         full: "Isola e soma os valores monetários de perdas incorridas em transações fechadas de Compra.",
      },
      returns: {
         success: {
            message: "Retorna a soma dos prejuízos obtidos com operações de compra encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_LOSS_PROFIT",
      aliases: "SLOSSP",
      description: {
         simple: "Retorna o total de profit perdido em vendas ignorando os ganhos.",
         full: "Isola e soma os valores monetários de perdas incorridas em transações fechadas de Venda.",
      },
      returns: {
         success: {
            message: "Retorna a soma dos prejuízos obtidos com operações de venda encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_POS",
      aliases: "APOS",
      description: {
         simple: "Retorna o total de posições.",
         full: "Retorna a contagem total numérica de posições liquidadas registradas na base de dados de histórico.",
      },
      returns: {
         success: {
            message: "Retorna o total de posições fechadas acumuladas no histórico.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_POS",
      aliases: "BPOS",
      description: {
         simple: "Retorna o total de posições de compra.",
         full: "Retorna o número numérico de ordens de mercado compradas que já foram finalizadas e estão salvas no histórico.",
      },
      returns: {
         success: {
            message: "Retorna o número de posições de compra fechadas histórico.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_POS",
      aliases: "SPOS",
      description: {
         simple: "Retorna o total de posições de venda.",
         full: "Retorna o número numérico de ordens de mercado vendidas que já foram finalizadas e estão salvas no histórico.",
      },
      returns: {
         success: {
            message: "Retorna o número de posições de venda fechadas histórico.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_GAIN",
      aliases: "AGAIN",
      description: {
         simple: "Retorna o total de vitorias.",
         full: "Retorna a quantidade contada de operações de mercado liquidadas com resultado financeiro final positivo (Take Profits/Ganhos).",
      },
      returns: {
         success: {
            message: "Retorna a contagem de operações finalizadas no azul (ganho).",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_GAIN",
      aliases: "BGAIN",
      description: {
         simple: "Retorna o total de vitorias de compra.",
         full: "Retorna a quantidade contada de operações exclusivas de compra liquidadas com ganho no histórico.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de compras finalizadas com lucro.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_GAIN",
      aliases: "SGAIN",
      description: {
         simple: "Retorna o total de vitorias de venda.",
         full: "Retorna a quantidade contada de operações exclusivas de venda liquidadas com ganho no histórico.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de vendas finalizadas com lucro.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_LOSS",
      aliases: "ALOSS",
      description: {
         simple: "Retorna o total de derrotas.",
         full: "Retorna o número de transações liquidadas que resultaram em encerramento com balanço negativo (Stop Losses/Perdas).",
      },
      returns: {
         success: {
            message: "Retorna a contagem de operações encerradas em prejuízo (loss).",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_LOSS",
      aliases: "BLOSS",
      description: {
         simple: "Retorna o total de derrotas de compra.",
         full: "Retorna a quantidade contada de ordens na ponta compradora que finalizaram em prejuízo de acordo com os dados salvos.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de compras finalizadas com prejuízo.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_LOSS",
      aliases: "SLOSS",
      description: {
         simple: "Retorna o total de derrotas de venda.",
         full: "Retorna a quantidade contada de ordens na ponta vendedora que finalizaram em prejuízo de acordo com os dados salvos.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade de vendas finalizadas com prejuízo.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_COMMISSION",
      aliases: "ACOMM",
      description: {
         simple: "Retorna o total de comissões.",
         full: "Soma o montante financeiro total descontado de taxas de corretagem e comissão retidas nas ordens arquivadas.",
      },
      returns: {
         success: {
            message: "Retorna o valor consolidado cobrado em comissões pela corretora.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_COMMISSION",
      aliases: "BCOMM",
      description: {
         simple: "Retorna o total de comissões de compra.",
         full: "Soma os valores financeiros pagos exclusivamente em comissão corretiva nas transações de compra históricas.",
      },
      returns: {
         success: {
            message: "Retorna o total das taxas de comissão geradas por compras.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_COMMISSION",
      aliases: "SCOMM",
      description: {
         simple: "Retorna o total de comissões de venda.",
         full: "Soma os valores financeiros pagos exclusivamente em comissão corretiva nas transações de venda históricas.",
      },
      returns: {
         success: {
            message: "Retorna o total das taxas de comissão geradas por vendas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "ALL_SWAP",
      aliases: "ASWAP",
      description: {
         simple: "Retorna o total de trocas.",
         full: "Retorna o valor financeiro acumulado das taxas de juros de rolagem noturna (Swap) cobradas ou pagas nas posições encerradas.",
      },
      returns: {
         success: {
            message: "Retorna o somatório dos swaps acumulados de posições de rolagem.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "BUY_SWAP",
      aliases: "BSWAP",
      description: {
         simple: "Retorna o total de trocas de compra.",
         full: "Retorna as taxas de rolagem noturna acumuladas atreladas unicamente ao histórico de ordens compradas.",
      },
      returns: {
         success: {
            message: "Retorna o acúmulo de swap específico das compras encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "SELL_SWAP",
      aliases: "SSWAP",
      description: {
         simple: "Retorna o total de trocas de venda.",
         full: "Retorna as taxas de rolagem noturna acumuladas atreladas unicamente ao histórico de ordens vendidas.",
      },
      returns: {
         success: {
            message: "Retorna o acúmulo de swap específico das vendas encerradas.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET",
      aliases: "",
      description: {
         simple: "Retorna o ticket da ultima posição.",
         full: "Retorna o número de identificação ticket da última operação encerrada de forma cronológica no histórico recente.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket da última operação fechada de qualquer tipo.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso não existam históricos.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET_BUY",
      aliases: "TICKETB",
      description: {
         simple: "Retorna o ticket da ultima compra.",
         full: "Retorna o identificador numérico ticket da última ordem de compra arquivada e fechada no sistema.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket da última operação de compra fechada.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "TICKET_SELL",
      aliases: "TICKETS",
      description: {
         simple: "Retorna o ticket da ultima venda.",
         full: "Retorna o identificador numérico ticket da última ordem de venda arquivada e fechada no sistema.",
      },
      returns: {
         success: {
            message: "Retorna o número do ticket da última operação de venda fechada.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET",
      aliases: "GTICKET",
      description: {
         simple: "Retorna o ticket da ultima posição com ganho.",
         full: "Filtra e retorna o ticket da última ordem encerrada que gerou um retorno financeiro de ganho (lucro).",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última operação vencedora fechada.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET_BUY",
      aliases: "GTICKETB",
      description: {
         simple: "Retorna o ticket da ultima compra com ganho.",
         full: "Retorna o número identificador da operação de compra cronologicamente mais recente que foi encerrada no azul.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última operação de compra vencedora.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "GAIN_TICKET_SELL",
      aliases: "GTICKETS",
      description: {
         simple: "Retorna o ticket da ultima venda com ganho.",
         full: "Retorna o número identificador da operação de venda cronologicamente mais recente que foi encerrada no azul.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última operação de venda vencedora.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET",
      aliases: "LTICKET",
      description: {
         simple: "Retorna o ticket da ultima posição com perda.",
         full: "Filtra e retorna o ticket identificador da última ordem fechada com resultado financeiro negativo.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última operação perdedora finalizada.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET_BUY",
      aliases: "LTICKETB",
      description: {
         simple: "Retorna o ticket da ultima compra com perda.",
         full: "Retorna o identificador numérico da última compra do histórico arquivado encerrada no vermelho.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última compra que fechou com perdas.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.CLOSE_TRADE,
      name: "LOSS_TICKET_SELL",
      aliases: "LTICKETS",
      description: {
         simple: "Retorna o ticket da ultima venda com perda.",
         full: "Retorna o identificador numérico da última venda do histórico arquivado encerrada no vermelho.",
      },
      returns: {
         success: {
            message: "Retorna o identificador numérico da última venda que fechou com perdas.",
            type: { type: "ulong" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "ulong" },
         },
      },
   },

   // SIGNAL
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TOTAL",
      aliases: "SIGTT",
      description: {
         simple: "Retorna a soma de todos os sinais do dia.",
         full: "Retorna o volume total numérico de sinais analíticos de trade disparados pelos setups ao ulongo do dia corrente.",
      },
      returns: {
         success: {
            message: "Retorna a quantidade inteira agregada de todos os sinais acionados hoje.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_BUY",
      aliases: "SIGB",
      description: {
         simple: "Retorna a soma de sinais de compra.",
         full: "Retorna a contagem quantitativa inteira restrita apenas a sinais de entrada gerados para a ponta compradora.",
      },
      returns: {
         success: {
            message: "Retorna a contagem acumulada de sinais direcionados para compra.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_SELL",
      aliases: "SIGS",
      description: {
         simple: "Retorna a soma de sinais de venda.",
         full: "Retorna a contagem quantitativa inteira restrita apenas a sinais de entrada gerados para a ponta vendedora.",
      },
      returns: {
         success: {
            message: "Retorna a contagem acumulada de sinais direcionados para venda.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_LAST",
      aliases: "SIGL",
      description: {
         simple: "Retorna o tipo do último sinal. (-1 = Nenhum, 0 = Compra, 1 = Venda)",
         full: "Retorna o enumerador que representa em qual direção (Compra ou Venda) o último sinal válido de trading foi disparado.",
      },
      returns: {
         success: {
            message: "Retorna o tipo de trade correspondente ao último sinal ativo.",
            type: { type: "ENUM_TRADE" },
         },
         error: {
            message: "Retorna o valor correspondente a nenhum ou erro.",
            type: { type: "ENUM_TRADE" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME",
      aliases: "SIGT",
      description: {
         simple: "Retorna a hora do último sinal.",
         full: "Retorna o registro em formato datetime contendo a estampa de tempo em que o sinal analítico global mais recente ocorreu.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp exato do último sinal.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_BUY",
      aliases: "SIGTB",
      description: {
         simple: "Retorna a hora do último sinal de compra.",
         full: "Retorna a estampa de tempo em formato datetime em que as regras de estratégia geraram o último sinal de Compra.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp do momento do último acionamento de compra.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_SELL",
      aliases: "SIGTS",
      description: {
         simple: "Retorna a hora do último sinal de venda.",
         full: "Retorna a estampa de tempo em formato datetime em que as regras de estratégia geraram o último sinal de Venda.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp do momento do último acionamento de venda.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE",
      aliases: "SIGP",
      description: {
         simple: "Retorna o preço do último sinal.",
         full: "Retorna o patamar de preço e cotação do ativo que estava sendo negociado no instante do disparo do sinal mais recente.",
      },
      returns: {
         success: {
            message: "Retorna o valor do preço no instante em que o sinal foi disparado.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_BUY",
      aliases: "SIGPB",
      description: {
         simple: "Retorna o preço do último sinal de compra.",
         full: "Retorna a cotação exata do ativo registrada no momento imediato do disparo do último sinal direcionado para Compra.",
      },
      returns: {
         success: {
            message: "Retorna o patamar de preço no acionamento do último sinal de compra.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_SELL",
      aliases: "SIGPS",
      description: {
         simple: "Retorna o preço do último sinal de venda.",
         full: "Retorna a cotação exata do ativo registrada no momento imediato do disparo do último sinal direcionado para Venda.",
      },
      returns: {
         success: {
            message: "Retorna o patamar de preço no acionamento do último sinal de venda.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TOTAL_CONFIRM",
      aliases: "SIGTC",
      description: {
         simple: "Retorna a soma de sinais confirmados.",
         full: "Retorna a contagem quantitativa total de sinais gerados que passaram com sucesso pelas checagens adicionais de confirmação.",
      },
      returns: {
         success: {
            message: "Retorna a contagem total de sinais que passaram pelos critérios de confirmação.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_LAST_CONFIRM",
      aliases: "SIGLC",
      description: {
         simple: "Retorna o tipo do último sinal confirmado. (-1 = Nenhum, 0 = Compra, 1 = Venda)",
         full: "Retorna a direção em formato enumerador correspondente ao último sinal que teve sua confirmação ativada e validada pelo robô.",
      },
      returns: {
         success: {
            message: "Retorna o tipo de trade correspondente ao último sinal validado.",
            type: { type: "ENUM_TRADE" },
         },
         error: {
            message: "Retorna valor correspondente a nenhum.",
            type: { type: "ENUM_TRADE" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_BUY_CONFIRM",
      aliases: "SIGBC",
      description: {
         simple: "Retorna a soma de sinais de compra confirmados.",
         full: "Retorna a contagem acumulada inteira restrita a sinais do tipo Compra que obtiveram a validação das regras de confirmação.",
      },
      returns: {
         success: {
            message: "Retorna o número acumulado de sinais de compra validados.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_SELL_CONFIRM",
      aliases: "SIGSC",
      description: {
         simple: "Retorna a soma de sinais de venda confirmados.",
         full: "Retorna a contagem acumulada inteira restrita a sinais do tipo Venda que obtiveram a validação das regras de confirmação.",
      },
      returns: {
         success: {
            message: "Retorna o número acumulado de sinais de venda validados.",
            type: { type: "int" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "int" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_LAST_CONFIRM",
      aliases: "SIGTLC",
      description: {
         simple: "Retorna a hora do último sinal confirmado.",
         full: "Retorna a estampa de tempo datetime exata em que ocorreu a confirmação analítica bem-sucedida do sinal mais recente.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp da validação do último sinal com sucesso.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_BUY_CONFIRM",
      aliases: "SIGTBC",
      description: {
         simple: "Retorna a hora do último sinal de compra confirmado.",
         full: "Retorna o registro temporal datetime do exato momento da confirmação estrutural do último sinal de Compra.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp do momento em que a compra obteve confirmação.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_TIME_SELL_CONFIRM",
      aliases: "SIGTSC",
      description: {
         simple: "Retorna a hora do último sinal de venda confirmado.",
         full: "Retorna o registro temporal datetime do exato momento da confirmação estrutural do último sinal de Venda.",
      },
      returns: {
         success: {
            message: "Retorna o timestamp do momento em que a venda obteve confirmação.",
            type: { type: "datetime" },
         },
         error: {
            message: "Retorna zero (0) caso falhe.",
            type: { type: "datetime" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_LAST_CONFIRM",
      aliases: "SIGPLC",
      description: {
         simple: "Retorna o preço do último sinal confirmado.",
         full: "Retorna o patamar de preço de mercado registrado na fração de segundo em que o sinal global foi validado.",
      },
      returns: {
         success: {
            message: "Retorna o preço do mercado no instante da última validação.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_BUY_CONFIRM",
      aliases: "SIGPBC",
      description: {
         simple: "Retorna o preço do último sinal de compra confirmado.",
         full: "Retorna a cotação de mercado observada exatamente quando a validação do último sinal de Compra foi confirmada.",
      },
      returns: {
         success: {
            message: "Retorna o patamar de preço no instante em que a compra foi confirmada.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
   {
      category: ENUM_VARIABLE_CATEGORY_TYPE.SIGNAL,
      name: "SIG_PRICE_SELL_CONFIRM",
      aliases: "SIGPSC",
      description: {
         simple: "Retorna o preço do último sinal de venda confirmado.",
         full: "Retorna a cotação de mercado observada exatamente quando a validação do último sinal de Venda foi confirmada.",
      },
      returns: {
         success: {
            message: "Retorna o patamar de preço no instante em que a venda foi confirmada.",
            type: { type: "double" },
         },
         error: {
            message: "Retorna 0.0 caso falhe.",
            type: { type: "double" },
         },
      },
   },
].forEach((fn: PlaceholderInterface) => {
   const existing = VARIABLE_MAPPING.get(fn.category as ENUM_VARIABLE_CATEGORY_TYPE);
   if (!existing) {
      VARIABLE_MAPPING.set(fn.category as ENUM_VARIABLE_CATEGORY_TYPE, new Map([[fn.name, fn]]));
   } else {
      existing.set(fn.name, fn);
   }
});

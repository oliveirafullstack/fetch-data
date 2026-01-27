declare global {
  type TransacaoPagamento = "Cartão de Credito" | "Boleto";
  type TransacaoStatus =
    | "Recusada pela operadora de cartão"
    | "Paga"
    | "Aguardando pagamento"
    | "Estornada";

  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Cliente Novo"]: number;
    ["Valor (R$)"]: String;
    ["Forma de Pagamento"]: TransacaoPagamento;
  }
}

interface Transaction {
  nome: string;
  id: number;
  data: string;
  dtatus: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}

export function normalizeTransaciton(transaction: TransacaoAPI) {
  return {
    nome: transaction.Nome,
    id: transaction.ID,
    data: transaction.Data,
    status: transaction.Status,
    email: transaction.Email,
    moeda: transaction["Valor (R$)"],
    valor: 0,
    pagamento: transaction["Forma de Pagamento"],
    novo: Boolean(transaction["Cliente Novo"]),
  };
}

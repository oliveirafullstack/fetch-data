import { convertToNumber } from "./convert-to-number.js";
export function normalizeTransaciton(transaction) {
    return {
        nome: transaction.Nome,
        id: transaction.ID,
        data: transaction.Data,
        status: transaction.Status,
        email: transaction.Email,
        moeda: transaction["Valor (R$)"],
        valor: convertToNumber(transaction["Valor (R$)"]),
        pagamento: transaction["Forma de Pagamento"],
        novo: Boolean(transaction["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalize-transaction.js.map
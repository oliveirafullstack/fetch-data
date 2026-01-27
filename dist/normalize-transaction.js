export function normalizeTransaciton(transaction) {
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
//# sourceMappingURL=normalize-transaction.js.map
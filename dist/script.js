import { fetchData } from "./fetchData.js";
import { normalizeTransaciton } from "./normalize-transaction.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data)
        return;
    const transactions = data.map(normalizeTransaciton);
    fillInTheTable(transactions);
}
function fillInTheTable(transactions) {
    const table = document.querySelector("#table tbody");
    if (!table)
        return;
    transactions.forEach((transaction) => {
        table.innerHTML += `
    <tr>
    <td>${transaction.nome}</td>
    <td>${transaction.email}</td>
    <td>R$ ${transaction.moeda}</td>
    <td>${transaction.pagamento}</td>
    <td>${transaction.status}</td>
    </tr>
    
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map
import { fetchData } from "./fetchData.js";
import { normalizeTransaciton } from "./normalize-transaction.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data)
        return;
    const transactions = data.map(normalizeTransaciton);
    console.log(transactions);
}
handleData();
//# sourceMappingURL=script.js.map
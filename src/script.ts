import { CountList } from "./countBy.js";
import { fetchData } from "./fetchData.js";
import { normalizeTransaciton } from "./normalize-transaction.js";
import Statistics from "./Statistics.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );
  if (!data) return;
  const transactions = data.map(normalizeTransaciton);
  fillInTheTable(transactions);
  fillInStatistics(transactions);
}

function fillInTheList(list: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(list).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
    });
  }
}

function fillInStatistics(transactions: Transaction[]): void {
  const statistic = new Statistics(transactions);
  console.log(statistic);

  fillInTheList(statistic.payment, "payment");
  fillInTheList(statistic.status, "status");
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (totalElement) {
    totalElement.innerText = statistic.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  const dayElement = document.querySelector<HTMLElement>("#day span");
  if (dayElement) {
    dayElement.innerText = statistic.bestDay[0].replace(
      "tuesday",
      "Terca-feira",
    );
  }
  console.log(statistic.total);
}

function fillInTheTable(transactions: Transaction[]): void {
  const table = document.querySelector("#table tbody");
  if (!table) return;
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

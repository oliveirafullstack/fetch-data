import { countBy } from "./countBy.js";

type TransactionValeu = Transaction & { valor: number };

function filterValue(
  transaction: Transaction,
): transaction is TransactionValeu {
  return transaction.valor !== null;
}

export default class Statistics {
  private transactions;
  total;
  payment;
  status;
  week;
  bestDay;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payment = this.setPayment();
    this.status = this.setStatus();
    this.week = this.setWeek();
    this.bestDay = this.setBestDay();
  }
  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPayment() {
    return countBy(this.transactions.map(({ pagamento }) => pagamento));
  }
  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status));
  }
  private setWeek() {
    const week = {
      ["sunday"]: 0,
      ["monday"]: 1,
      ["tuesday"]: 2,
      ["wednesday"]: 3,
      ["thursday"]: 4,
      ["friday"]: 5,
      ["saturday"]: 6,
    };
    for (let i = 0; i < this.transactions.length; i++) {
      const day = this.transactions[i].data.getDay();
      if (day === 0) week["sunday"] += 1;
      if (day === 1) week["monday"] += 1;
      if (day === 2) week["tuesday"] += 1;
      if (day === 3) week["wednesday"] += 1;
      if (day === 4) week["thursday"] += 1;
      if (day === 5) week["friday"] = 1;
      if (day === 6) week["saturday"] = 1;
    }
    return week;
  }
  private setBestDay() {
    return Object.entries(this.week).sort((a, b) => {
      return b[1] - a[1];
    })[0];
  }
}

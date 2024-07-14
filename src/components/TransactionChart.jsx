//
//
//

import { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { CustomerContext } from "../assets/context/Customer.context";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function TransactionChart() {
  const { transactions, selectedCustomer } = useContext(CustomerContext);


  
  if (!selectedCustomer) return null;

  const customerTransactions = transactions.filter(
    (transaction) => transaction.customer_id == selectedCustomer.id
  );
  console.log(customerTransactions);
  const dates = customerTransactions.map((transaction) => transaction.date);
  const amounts = customerTransactions.map((transaction) => transaction.amount);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Transaction Amount",
        data: amounts,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="mt-8 ">
      <h2 className="text-xl font-bold mb-4 ">
        Transactions for{" "}
        <span className="rounded-md bg-red-600 text-white py-1 px-2">{selectedCustomer.name}</span>
      </h2>
      <Line data={data} />
    </div>
  );
}

export default TransactionChart;

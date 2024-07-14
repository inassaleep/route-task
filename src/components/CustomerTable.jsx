//
//
//


import { useContext, useState } from "react";
import { CustomerContext } from "../assets/context/Customer.context";

function CustomerTable() {
  const { customers, transactions, setSelectedCustomer } =
    useContext(CustomerContext);
  const [search, setSearch] = useState("");
  const [amountFilter, setAmountFilter] = useState("");

  const filteredCustomers = customers.filter((customer) => {
    const customerTransactions = transactions.filter(
      (transaction) => transaction.customer_id == customer.id
    );
    const totalAmount = customerTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) &&
      (!amountFilter || totalAmount >= amountFilter)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="  border  border-red-200 p-2 mb-4"
      />
      <input
        type="number"
        placeholder="Filter by amount"
        value={amountFilter}
        onChange={(e) => setAmountFilter(e.target.value)}
        className="  border  border-red-200 p-2 mb-4 ml-4"
      />
      <table className="min-w-full bg-white border   border-red-200">
        <thead>
          <tr>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Total Transactions</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            const customerTransactions = transactions.filter(
              (transaction) => transaction.customer_id == customer.id
            );
            const totalAmount = customerTransactions.reduce(
              (sum, transaction) => sum + transaction.amount,
              0
            );

            return (
              <tr key={customer.id} className="">
                <td className="py-2 text-center">{customer.name}</td>
                <td className="py-2 text-center">{totalAmount}</td>
                <td className="py-2 text-center">
                  <button
                    onClick={() => {
                      setSelectedCustomer(customer);
                      console.log(customer);
                    }}
                    className="bg-red-600 text-white rounded-lg   font-semibold px-4 py-2"
                  >
                    View 
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;

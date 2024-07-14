//
//
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/customers").then((response) => {
      setCustomers(response.data);
    });
    axios.get("http://localhost:3000/transactions").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <CustomerContext.Provider
      value={{ customers, transactions, selectedCustomer, setSelectedCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
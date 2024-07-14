//
//
//
import { CustomerProvider } from "../src/assets/context/Customer.context";
import Navbar from "./components/Navbar";
 
import CustomerTable from "./components/CustomerTable";
import TransactionChart from "./components/TransactionChart";

function App() {
  return (
    <>
      <Navbar/>
      <CustomerProvider>
        <div className="container mx-auto p-4 min-h-[80vh]">
          <CustomerTable />
          <TransactionChart />
        </div>
      </CustomerProvider>
      
    </>
  );
}

export default App;

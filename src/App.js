import './App.css';
import Balance from './components/balance/Balance';
import Header from './components/header/Header';
import IncomeExpense from './components/incomeExpense/IncomeExpense';
import TransactionList from './components/transactionList/TransactionList';
import AddTransaction from './components/addTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import Count from './context/Count';
function App() {
  return (
    <div className="App">
      {/* <Count></Count> */}
      <GlobalProvider >
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList/>
      <AddTransaction/>
      </GlobalProvider>
    </div>
  );
}

export default App;

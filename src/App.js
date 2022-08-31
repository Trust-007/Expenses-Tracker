import './index.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState} from 'react';

 const Dummy_Expenses = [
    {
      id:'e1',
      title:"Dragon Warrior",
      date: new Date(2022, 3, 4),
      amount: 4000
    },
    {
      id:'e2',
      title:"Lumber Jack",
      date: new Date(2020, 2, 23),
      amount: 342.99
    },
    {
      id:'e3',
      title:"Hello There",
      date: new Date(2020, 8, 2),
      amount: 500
    },
    {
      id:'e4',
      title:"The Wish",
      date: new Date(2019, 2, 9),
      amount: 3000
    }
  ];
function App() {
  
  const [expenses,setExpenses] = useState(Dummy_Expenses);
  const addExpenses = (theExpenses) => {
      setExpenses((prevExpenses)=>{
        return [theExpenses,...prevExpenses]
      })
  };


  return (
    <div>
      <NewExpense  onAddExpenses={addExpenses}/>
      <div className='flow'>
        <Expenses items={expenses}/>
      </div>
      
    </div>
  );
}

export default App;

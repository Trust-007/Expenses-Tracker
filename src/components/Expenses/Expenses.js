import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
   
  const [filteredYear,setFilteredYear] = useState('2020');
  const thisSelectHander = (thisFilterYear) => {
      setFilteredYear(thisFilterYear);
  };
  const filteredExpense = props.items.filter((halo)=>{
     return halo.date.getFullYear().toString() === filteredYear;
  })


  return(
      
   <div className="container"> 
    <ExpensesFilter 
    selected={filteredYear}  
    onSelectFilter={thisSelectHander}/>
    <div >
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList chosen={filteredExpense}/>
    </div>
   </div>    
       
    );
}
export default Expenses;
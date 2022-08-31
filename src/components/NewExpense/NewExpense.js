import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    
    const getExpensesData = (childExpenseData) =>{
       const expenseData ={
           ...childExpenseData,
           id : Math.random().toString()
       };
       props.onAddExpenses(expenseData);
    }
     
    return(
        <div className="expenseform">
            <ExpenseForm onGetExpensesData={getExpensesData}/>
        </div>
    );
}

export default NewExpense;
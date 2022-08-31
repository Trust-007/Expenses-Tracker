import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
     
     const [enteredTitle,setEnteredTitle] = useState('');
     const [enteredAmount,setEnteredAmount] = useState('');
     const [enteredDate,setEnteredDate] = useState('');
        const titleHandler = (event) =>{
           setEnteredTitle(event.target.value);
       }

        const amountHandler = (event) =>{
           setEnteredAmount(event.target.value);
       }
        const dateHandler = (event) =>{
           setEnteredDate(event.target.value);
       }
    
       const submitHandler = (event) =>{
          event.preventDefault();
          const expenseData = {
               title : enteredTitle,
               amount : enteredAmount,
               date : new Date(enteredDate)
           }
           props.onGetExpensesData(expenseData)
           setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
       }
    return(

       <form onSubmit={submitHandler}>
           < div className="form_body">
               <div className="form_title">
                   <label>Title</label>
                   <input 
                     type='text' 
                     value={enteredTitle}
                     onChange={titleHandler}/>
               </div>
               <div className="form_amount">
                   <label>Amount </label>
                   <input 
                     type='number'
                     min="0.01" 
                     step="0.01" 
                     value={enteredAmount}
                     onChange={amountHandler}/>
               </div>
            </div>  
               <div className="form_date">
                   <label>Date</label>
                   <input 
                     type='date' 
                     min="2018-01-01" 
                     max="2023-12-31" 
                     value={enteredDate}
                     onChange={dateHandler}/>
               </div>
           <div className="form_button">
               <button type="submit">Add Expense</button>
           </div>
       </form>
    );
}

export default ExpenseForm;
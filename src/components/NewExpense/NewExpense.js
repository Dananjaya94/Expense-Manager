import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;

import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [newExpenseButtonState, setnewExpenseButtonState] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
  };

  const onAddNewExpenseClick = () => {
    setnewExpenseButtonState(true);
  };

  const onCancelPress = () => {
    setnewExpenseButtonState(false);
  };

  return (
    <div className="new-expense">
      <button className="new-expense button" onClick={onAddNewExpenseClick}>
        Add New Expense
      </button>
      {newExpenseButtonState === true && (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelPress}
        />
      )}
    </div>
  );
}
export default NewExpense;

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
      {newExpenseButtonState === true ? (
        <NewExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelPress}
        />
      ) : (
        <button className="new-expense button" onClick={onAddNewExpenseClick}>
          Add New Expense
        </button>
      )}
    </div>
  );
}
export default NewExpense;

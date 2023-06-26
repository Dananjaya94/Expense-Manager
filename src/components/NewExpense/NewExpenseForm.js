import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [titleEntered, setEnteredTitle] = useState("");
  const [amountEntered, setAmount] = useState("");
  const [dateEntered, setDate] = useState("");

  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: +amountEntered,
      date: new Date(dateEntered),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  const onCancel = () => {
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleEntered} onChange={onTitleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
            value={amountEntered}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={onDateChange}
            value={dateEntered}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpenseForm;

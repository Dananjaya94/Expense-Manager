import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm() {
  const [titleEntered, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     titleEntered: "",
  //     amount: "",
  //     date: "",
  //   });

  const onTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   titleEntered: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, titleEntered: event.target.value };
    // });
    console.log(titleEntered);
  };

  const onAmountChange = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
    console.log(amount);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
    console.log(date);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpenseForm;

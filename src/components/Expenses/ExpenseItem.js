import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(data) {
  const [titleState, setTitleState] = useState(data.title);

  const expenseAmount = data.amount;
  const expenseDate = data.date;

  const onClickChangeTitle = () => {
    setTitleState("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={onClickChangeTitle}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;

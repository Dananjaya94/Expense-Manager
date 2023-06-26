import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(data) {
  const expenseAmount = data.amount;
  const expenseDate = data.date;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expenseDate} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;

import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(prop) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSelectExpenseYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = prop.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onSelectYear={onSelectExpenseYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

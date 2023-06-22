import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(prop) {
  const [filteredYear, setFilteredYear] = useState("2020");
  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  }

  const onSelectExpenseYear = (selectedYear) => {
    console.log("Expense.js");
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onSelectYear={onSelectExpenseYear}
        />
        <p>Data for year {filterInfoText} is hidden.</p>
        <ExpenseItem
          title={prop.expenses[0].title}
          amount={prop.expenses[0].amount}
          date={prop.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={prop.expenses[1].title}
          amount={prop.expenses[1].amount}
          date={prop.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={prop.expenses[2].title}
          amount={prop.expenses[2].amount}
          date={prop.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={prop.expenses[3].title}
          amount={prop.expenses[3].amount}
          date={prop.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

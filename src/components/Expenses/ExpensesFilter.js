import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (prop) => {
  const [option, setOption] = useState();

  const getSelectedOption = (event) => {
    console.log(event);
    if (event.target[0].selected === true) {
      setOption(event.target[0].text);
    } else if (event.target[1].selected === true) {
      setOption(event.target[1].text);
    } else if (event.target[2].selected === true) {
      setOption(event.target[2].text);
    } else if (event.target[3].selected === true) {
      setOption(event.target[3].text);
    }
    prop.onSelectYear(option);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={getSelectedOption}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

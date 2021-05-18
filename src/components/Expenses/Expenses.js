import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("2019");
  const filterChangeHandler = (selectedDate) => {
    setFilterValue(selectedDate);
  };

  const filteredDate = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedValue={filterValue}
          onFilterChange={filterChangeHandler}
          expenses={props.expenses}
        />
        <ExpensesList expenses={filteredDate} />
      </Card>
    </div>
  );
}

export default Expenses;

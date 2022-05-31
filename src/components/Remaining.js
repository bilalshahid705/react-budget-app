import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className={`alert p-4 alert-success`}>
      <span>Remaining: PKR {budget - totalExpenses}</span>
    </div>
  );
};

export default RemainingBudget;

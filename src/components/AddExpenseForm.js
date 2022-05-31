import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch, expenses, budget } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    if (budget > 0) {
      event.preventDefault();
      const expenseObj = {
        id: uuidv4(),
        name,
        cost: parseInt(cost),
      };
      expenses.push(expenseObj);

      dispatch({
        type: "ADD_EXPENSE",
        payload: expenses,
      });
      localStorage.setItem("expenses", JSON.stringify(expenses));

      setName("");
      setCost("");
    } else {
      alert("Budget Amount must be greater than 0");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label>Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label>Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;

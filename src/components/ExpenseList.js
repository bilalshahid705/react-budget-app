import React, { useContext, useState, useEffect, useCallback } from "react";
// import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import Table from "./Table";

const ExpenseList = () => {
  const { expenses, dispatch } = useContext(AppContext);
  const [columns, setColumns] = useState(null);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const deleteExpenseRow = useCallback(
    (value) => {
      const deleteExpenses = filteredExpenses.filter(
        (expense) => expense.id !== filteredExpenses[value].id
      );
      localStorage.setItem("expenses", JSON.stringify(deleteExpenses));
      dispatch({
        type: "DELETE_EXPENSE",
        payload: deleteExpenses,
      });
    },
    [dispatch, filteredExpenses]
  );

  useEffect(() => {
    if (filteredExpenses.length > 0) {
      setColumns([
        {
          Header: "Expenses Table",
          columns: [
            {
              Header: "Name",
              accessor: "name",
            },
            {
              Header: "Cost",
              accessor: `cost`,
            },
            {
              Header: "Delete",
              Cell: ({ cell }) => (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteExpenseRow(cell.row.id)}
                >
                  Delete
                </button>
              ),
            },
          ],
        },
      ]);
    }
  }, [filteredExpenses, deleteExpenseRow]);

  return (
    <div>
      {columns && filteredExpenses.length > 0 ? (
        <Table
          columns={columns}
          data={filteredExpenses}
          tableHeading={"Expenses"}
        />
      ) : (
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          No Expenses Added Yet.
        </p>
      )}
    </div>
  );
};

export default ExpenseList;

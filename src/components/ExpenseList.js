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
      dispatch({
        type: "DELETE_EXPENSE",
        payload: filteredExpenses[value].id,
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

  console.log("columns", columns);

  return (
    <div>
      {columns ? (
        // <ul className="list-group mt-3 mb-3">
        //   {filteredExpenses.map((expense, id) => (
        //     <ExpenseItem
        //       key={id}
        //       id={expense.id}
        //       name={expense.name}
        //       cost={expense.cost}
        //     />
        //   ))}
        // </ul>
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

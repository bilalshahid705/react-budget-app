import React, { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: action.payload,
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: action.payload,
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: localStorage.getItem("budget") ? localStorage.getItem("budget") : 0,
  expenses: localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Modal } from "react-bootstrap";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState("");

  const handleClose = () => setShow(false);

  const handleInputChange = (value) => {
    setBudgetAmount(value);
  };

  const handleSaveClick = () => {
    dispatch({
      type: "SET_BUDGET",
      payload: budgetAmount,
    });
    localStorage.setItem("budget", budgetAmount);
    setShow(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <span>Budget: PKR {budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Edit
      </button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "space-around" }}>
          <label>Amount:</label>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(e) => handleInputChange(e.target.value)}
            value={budgetAmount}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleClose()}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSaveClick()}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Budget;

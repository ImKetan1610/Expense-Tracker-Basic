import React from "react";
import "./Expense.css";

const Expense = ({ expense }) => {
  return (
    <div className="expenseDiv">
      <p className="walletBalance">
        Expenses: <span className="walletExpense">₹{expense}</span>
      </p>
      <button className="addExpense">+ Add Expense</button>
    </div>
  );
};

export default Expense;

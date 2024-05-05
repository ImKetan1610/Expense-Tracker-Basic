import { useState } from "react";
import "./App.css";
import WalletBalance from "./components/WalletBalance/WalletBalance";
import Expense from "./components/Expense/Expense";
import Chart from "./components/Chart/Chart";

function App() {
  let wallet = 5000;
  localStorage.setItem("Wallet", wallet);
  let expense = localStorage.getItem("expense") || 0;

  return (
    <>
      <div className="App">
        <div className="first">
          <h2>Expense Tracker</h2>
          <div className="dataCard expense">
            <WalletBalance wallet ={wallet} />
            <Expense expense={expense} />
            <Chart />
          </div>
        </div>

        <div className="second">
          <div>
            <h2>Recent Transactions</h2>
            <div className="dataCard recent"></div>
          </div>
          <div>
            <h2>Top Expenses</h2>
            <div className="dataCard top"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

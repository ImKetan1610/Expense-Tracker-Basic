import { useState } from "react";
import "./App.css";
import WalletBalance from "./components/WalletBalance";
import Expense from "./components/Expense";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <div className="App">
        <div className="first">
          <h2>Expense Tracker</h2>
          <div className="dataCard expense">
            <WalletBalance />
            <Expense />
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

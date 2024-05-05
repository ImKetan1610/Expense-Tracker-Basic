import React from "react";
import "./WalletBalance.css";

const WalletBalance = ({ wallet }) => {
  return (
    <div className="balance">
      <p className="walletBalance">
        Wallet Balance: <span className="walletMoney">₹{wallet}</span>
      </p>
      <button className="addName">+ Add Income</button>
    </div>
  );
};

export default WalletBalance;

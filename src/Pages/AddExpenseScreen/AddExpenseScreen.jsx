import React from "react";
import { useState } from "react";
import { Categories } from "../../Data/Categories";
import { addIncome } from "../../Data/Income";
import { findWallet, logUserWallets } from "../../Data/Wallets";
import AddExpenseManager from "../../Utility/ExpenseManagers/AddExpenseManager";
import { logUser } from "../../Utility/LoginManager";
import "./AddExpenseScreen.css";

const AddExpenseScreen = () => {
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [date, setDate] = useState("");
  const [walletId, setWalletId] = useState("");

  const [success, setSuccess] = useState(false);
  const expenseHandler = () => {
    if (
      AddExpenseManager(logUser.id, walletId, categoryId, title, ammount, date)
    ) {
      const wallet = findWallet(walletId);
      setTitle("");
      setAmmount("");
      setCategoryId("");
      setDate("");
      setWalletId("");
      setSuccess(true);
      addIncome(logUser.id, wallet.id, wallet.title, ammount);
    }
  };

  if (success)
    return (
      <div className="add-exp-otr">
        <div className="add-exp-inr add-exp-sc">
          <h1>Harcama eklendi.</h1>
          <button onClick={() => setSuccess(false)}>Yeni Harcama</button>
        </div>
      </div>
    );

  return logUserWallets.length === 0 ? (
    <div className="add-exp-otr">
      <h1>Harcama ekleyebilmek için lütfen hesabınıza cüzdan ekleyin.</h1>
    </div>
  ) : (
    <div className="add-exp-otr">
      <div className="add-exp-inr">
        <div>
          <h1>Yeni Harcama</h1>
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Harcama Başlığı"
          ></input>
        </div>
        <div>
          <select onChange={(event) => setWalletId(event.target.value)}>
            <option key={""} value={""}>
              ...Cüzdan...
            </option>
            {logUserWallets.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            value={ammount}
            onChange={(event) => setAmmount(event.target.value)}
            min="0.01"
            step="0.01"
            placeholder="Miktar"
          ></input>
        </div>
        <div>
          <select onChange={(event) => setCategoryId(event.target.value)}>
            <option key={""} value={""}>
              ...Kategori...
            </option>
            {Categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Miktar"
          ></input>
        </div>
        <div>
          <button onClick={() => expenseHandler()}>Harcama Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseScreen;

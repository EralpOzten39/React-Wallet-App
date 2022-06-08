import React from "react";
import { useState } from "react";
import { logUser } from "../../Utility/LoginManager";
import AddWalletManager from "../../Utility/WalletManagers/AddWalletManager";
import "./AddWalletScreen.css";

const AddWalletScreen = () => {
  const [title, setTitle] = useState("");
  const [balance, setAmmount] = useState("");

  const [success, setSuccess] = useState(false);

  const walletHandler = () => {
    if (AddWalletManager(logUser.id, title, balance)) {
      setTitle("");
      setAmmount("");
      setSuccess(true);
    }
  };

  if (success)
    return (
      <div className="add-wlt-otr">
        <div className="add-wlt-inr">
          <h1>Cüzdan eklendi.</h1>
          <button onClick={() => setSuccess(false)}>Yeni Cüzdan</button>
        </div>
      </div>
    );

  return (
    <div className="add-wlt-otr">
      <div className="add-wlt-inr">
        <div>
          <h1>Yeni Cüzdan Ekle</h1>
        </div>
        <div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Cüzdan Adı"
          ></input>
        </div>
        <div>
          <input
            type="number"
            value={balance}
            onChange={(event) => setAmmount(event.target.value)}
            min="0.01"
            step="0.01"
            placeholder="Cüzdan Bakiyesi"
          ></input>
        </div>
        <div>
          <button onClick={() => walletHandler()}>Cüzdan Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default AddWalletScreen;

import React from "react";
import { useState } from "react";
import { findWallet, logUserWallets, Wallets } from "../../Data/Wallets";
import { logUser } from "../../Utility/LoginManager";
import AddBalanceManager from "../../Utility/WalletManagers/AddBalanceManager";
import DeleteWalletManager from "../../Utility/WalletManagers/DeleteWalletManager";
import ListComp from "../../Components/List/ListComp";
import Wallet from "../../Components/Wallet/Wallet";
import WalletDelete from "../../Components/Wallet/WalletDelete";
import WalletAddBalance from "../../Components/Wallet/WalletAddBalance";
import "./WalletScreen.css";
import { addIncome } from "../../Data/Income";

const WalletScreen = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [delWallet, setDelWallet] = useState(null);
  const [balance, setBalance] = useState(0);

  const addBalanceHandler = (walletId, balance) => {
    const wallet = findWallet(walletId);
    if (wallet !== null) {
      AddBalanceManager(logUser.id, wallet.id, balance);
      addIncome(logUser.id, wallet.id, wallet.title, balance);
      setSelectedWallet(null);
      setBalance(0);
    }
  };

  const deleteWalletHandler = (walletId) => {
    if (DeleteWalletManager(walletId)) {
      setDelWallet(null);
    }
  };

  const showList = [];
  logUserWallets.forEach((wallet) => {
    if (wallet === selectedWallet) {
      showList[showList.length] = (
        <WalletAddBalance
          key={wallet.id}
          wallet={wallet}
          balance={balance}
          setBalance={setBalance}
          addBalanceHandler={addBalanceHandler}
          setSelectedWallet={setSelectedWallet}
        ></WalletAddBalance>
      );
    } else if (wallet === delWallet) {
      showList[showList.length] = (
        <WalletDelete
          key={wallet.id}
          wallet={wallet}
          deleteWalletHandler={deleteWalletHandler}
          setDelWallet={setDelWallet}
        ></WalletDelete>
      );
    } else {
      showList[showList.length] = (
        <Wallet
          key={wallet.id}
          wallet={wallet}
          setSelectedWallet={setSelectedWallet}
          setDelWallet={setDelWallet}
        ></Wallet>
      );
    }
  });

  return showList.length === 0 ? (
    <div className="wlt-main">
      <h1>Hesabınıza kayıtlı bir cüzdan bulunmuyor.</h1>
    </div>
  ) : (
    <div>
      <h1 className="mid-header">Cüzdanlarım</h1>
      <ListComp items={showList}></ListComp>
    </div>
  );
};

export default WalletScreen;

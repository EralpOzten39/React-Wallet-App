import { addIncome } from "./Income";

export let logUserWallets = [];

export let Wallets = [
  { id: 0, userId: 0, title: "My Wallet 1", balance: 10000.0 },
  { id: 1, userId: 0, title: "My Wallet 2", balance: 10000.0 },
];
let walletId = Wallets.length;

export const createLogUserWallets = (logUserId) => {
  logUserWallets = [];

  for (let index = 0; index < Wallets.length; index++) {
    if (Wallets[index].userId === parseInt(logUserId)) {
      logUserWallets.push(Wallets[index]);
    }
  }
};

export const addWallet = (userId, title, balance) => {
  const newWallet = {
    id: walletId,
    userId: parseInt(userId),
    title: title,
    balance: parseFloat(balance),
  };

  Wallets.push(newWallet);
  logUserWallets.push(newWallet);

  addIncome(userId, newWallet.id, newWallet.title, newWallet.balance);
  walletId += 1;
};

export const addBalance = (walletId, balance) => {
  for (let index = 0; index < logUserWallets.length; index++) {
    if (parseInt(walletId) === logUserWallets[index].id) {
      logUserWallets[index].balance += parseFloat(balance);
      return 0;
    }
  }

  for (let index = 0; index < Wallets.length; index++) {
    if (parseInt(walletId) === Wallets[index].id) {
      Wallets[index].balance += parseFloat(balance);
      return 0;
    }
  }
};

export const subBalance = (walletId, balance) => {
  for (let index = 0; index < logUserWallets.length; index++) {
    if (parseInt(walletId) === logUserWallets[index].id) {
      logUserWallets[index].balance -= parseFloat(balance);
      return 0;
    }
  }

  for (let index = 0; index < Wallets.length; index++) {
    if (parseInt(walletId) === Wallets[index].id) {
      Wallets[index].balance -= parseFloat(balance);
      return 0;
    }
  }
};

export const deleteWallet = (walletId) => {
  const newWalletsList = [];
  const newLogUserWalletsList = [];

  for (let index = 0; index < Wallets.length; index++) {
    if (parseInt(walletId) === Wallets[index].id) {
      console.log("Wallet deleted from Wallets.");
    } else {
      newWalletsList.push(Wallets[index]);
    }
  }

  for (let index = 0; index < logUserWallets.length; index++) {
    if (parseInt(walletId) === logUserWallets[index].id) {
      console.log("Wallet deleted from logUserWallets.");
    } else {
      newLogUserWalletsList.push(logUserWallets[index]);
    }
  }

  Wallets = newWalletsList;
  logUserWallets = newLogUserWalletsList;
};

export const findWallet = (walletId) => {
  for (let index = 0; index < logUserWallets.length; index++) {
    if (parseInt(walletId) === logUserWallets[index].id) {
      return logUserWallets[index];
    }
  }

  for (let index = 0; index < Wallets.length; index++) {
    if (parseInt(walletId) === Wallets[index].id) {
      return Wallets[index];
    }
  }

  return null;
};

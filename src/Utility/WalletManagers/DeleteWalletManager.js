import { deleteWalletIncome } from "../../Data/Income";
import { deleteWallet, findWallet } from "../../Data/Wallets";

const DeleteWalletManager = (walletId) => {
  if (findWallet(walletId) === null) {
    alert("Cüzdan bulunamadı.");
    return false;
  } else {
    deleteWallet(walletId);
    deleteWalletIncome(walletId);
    return true;
  }
};

export default DeleteWalletManager;

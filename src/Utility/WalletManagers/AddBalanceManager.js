import { findUser } from "../../Data/Users";
import { addBalance, findWallet } from "../../Data/Wallets";

const AddBalanceManager = (userId, walletId, balance) => {
  const wallet = findWallet(walletId);
  if (findUser(userId) === null) {
    alert("Kullanıcı bulunamadı.");
    return false;
  } else if (balance === "" || balance < 0) {
    alert("Hatalı bakiye girişi");
    return false;
  } else if (wallet === null) {
    alert("Cüzdan bulunamadı.");
    return false;
  } else {
    addBalance(walletId, balance);
    return true;
  }
};

export default AddBalanceManager;

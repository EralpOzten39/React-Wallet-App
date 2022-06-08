import { findUser } from "../../Data/Users";
import { addWallet, logUserWallets } from "../../Data/Wallets";

const AddWalletManager = (userId, walletTitle, balance) => {
  if (findUser(userId) === null) {
    alert("Kullanıcı bulunamadı.");
    return false;
  } else if (walletTitle.replace(/ /g, "") === "") {
    alert("Cüzdan adı alanı boş bırakılamaz.");
    return false;
  } else if (balance === "" || balance < 0) {
    alert("Hatalı bakiye girişi.");
    return false;
  }

  for (let index = 0; index < logUserWallets; index++) {
    if (logUserWallets[index].title === walletTitle) {
      alert("Bu ada sahip bir cüzdan zaten mevcut.");
      return false;
    }
  }

  addWallet(userId, walletTitle, balance);
  return true;
};

export default AddWalletManager;

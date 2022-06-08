import { findWallet, subBalance } from "../../Data/Wallets";

const SubBalanceManager = (walletId, balance) => {
  const Wallet = findWallet(walletId);
  if (Wallet === null) {
    alert("Cüzdan bulunamadı.");
    return false;
  } else if (balance === "") {
    alert("Hatalı bakiye girişi.");
    return false;
  } else if (Wallet.balance < balance) {
    alert("Cüzdanda yeterli bakiye yok.");
    return false;
  } else {
    subBalance(walletId, balance);
    return true;
  }
};

export default SubBalanceManager;

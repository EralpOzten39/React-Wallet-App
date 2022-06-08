import { findUser } from "../../Data/Users";
import { findWallet } from "../../Data/Wallets";
import { findCategory } from "../../Data/Categories";
import { addExpense } from "../../Data/Expenses";
import SubBalanceManager from "../WalletManagers/SubBalanceManager";

const AddExpenseManager = (
  userId,
  walletId,
  categoryId,
  title,
  ammount,
  date
) => {
  const user = findUser(userId);
  const wallet = findWallet(walletId);
  const category = findCategory(categoryId);
  if (user === null) {
    alert("Kullanıcı bulunamadı.");
    return false;
  } else if (title.replace(/ /g, "") === "") {
    alert("Harcama adı boş bırakılamaz.");
    return false;
  } else if (wallet === null) {
    alert("Cüzdan bulunamadı.");
    return false;
  } else if (category === null) {
    alert("Kategori bulunamadı.");
    return false;
  } else if (date === "") {
    alert("Tarih alanı boş bırakılamaz.");
    return false;
  } else if (ammount === "" || ammount < 0) {
    alert("Hatalı harcama miktarı.");
    return false;
  } else if (SubBalanceManager(walletId, ammount)) {
    addExpense(
      userId,
      walletId,
      wallet.title,
      categoryId,
      category.title,
      title,
      ammount,
      date
    );
    return true;
  }
};

export default AddExpenseManager;

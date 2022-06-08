import MainWindow from "../Pages/MainWindow/MainWindow";
import WalletScreen from "../Pages/WalletScreen/WalletScreen";
import AddWalletScreen from "../Pages/AddWalletScreen/AddWalletScreen";
import AddExpenseScreen from "../Pages/AddExpenseScreen/AddExpenseScreen";
import ExpenseHistoryScreen from "../Pages/ExpneseHistoryScreen/ExpenseHistoryScreen";
import ProfileScreen from "../Pages/ProfileScreen/ProfileScreen";
import ReportScreen from "../Pages/ReportScreen/ReportScreen";

//Giriş yaptıktan sonra ana ekranlar arasındaki geçişi sağlayan fonksiyon.
const MainScreenManager = (selector) => {
  if (selector === 0) {
    return <MainWindow />;
  } else if (selector === 1) {
    return <WalletScreen />;
  } else if (selector === 2) {
    return <AddWalletScreen />;
  } else if (selector === 3) {
    return <AddExpenseScreen />;
  } else if (selector === 4) {
    return <ExpenseHistoryScreen />;
  } else if (selector === 5) {
    return <ReportScreen />;
  } else if (selector === 6) {
    return <ProfileScreen />;
  }
};

export default MainScreenManager;

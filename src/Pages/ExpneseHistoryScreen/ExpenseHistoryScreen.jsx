import React from "react";
import { useState } from "react";
import { logUserExpenses } from "../../Data/Expenses";
import AddBalanceManager from "../../Utility/WalletManagers/AddBalanceManager";
import DeleteExpenseManager from "../../Utility/ExpenseManagers/DeleteExpenseManager";
import "./ExpenseHistoryScreen.css";
import FilterManager from "../../Utility/FilterManager";
import ExpenseFilterManager from "../../Utility/ExpenseFilterManagers/ExpenseFilterManager";
import { logUser } from "../../Utility/LoginManager";
import Expense from "../../Components/Expense/Expense";
import ExpenseDelete from "../../Components/Expense/ExpenseDelete";
import ExpenseRefund from "../../Components/Expense/ExpenseRefund";
import ListComp from "../../Components/List/ListComp";
import ExpenseFilter from "../../Components/Filter/ExpenseFilter";

const ExpenseHistoryScreen = () => {
  const [delSelect, setDelSelect] = useState();
  const [refundSelect, setRefundSelect] = useState();

  const [expenseList, setExpenseList] = useState([...logUserExpenses]);

  const options = ExpenseFilterManager();

  const [walletFilter, setWalletFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [ammouontFilter, setAmmountFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const listWallets = options[0];
  const listYears = options[1];
  const listMonths = options[2];
  const listCategories = options[3];

  const ammountList = [
    { id: "asc", title: "Artan Sırada" },
    { id: "des", title: "Azalan Sırada" },
  ];

  const deleteHandler = (expense, yes) => {
    if (yes) {
      AddBalanceManager(logUser.id, expense.walletId, expense.ammount);
    }
    DeleteExpenseManager(expense.id);
    apply();
    setRefundSelect();
    setDelSelect();
  };

  const apply = () => {
    setExpenseList(
      FilterManager(
        logUserExpenses,
        walletFilter,
        ammouontFilter,
        monthFilter,
        yearFilter,
        categoryFilter
      )
    );
  };

  const showList = [];
  expenseList.forEach((expense) => {
    if (expense === refundSelect) {
      showList[showList.length] = (
        <ExpenseRefund
          key={expense.id}
          expense={expense}
          deleteHandler={deleteHandler}
        ></ExpenseRefund>
      );
    } else if (expense === delSelect) {
      showList[showList.length] = (
        <ExpenseDelete
          key={expense.id}
          expense={expense}
          setRefundSelect={setRefundSelect}
          setDelSelect={setDelSelect}
        ></ExpenseDelete>
      );
    } else {
      showList[showList.length] = (
        <Expense
          key={expense.id}
          expense={expense}
          setDelSelect={setDelSelect}
        ></Expense>
      );
    }
  });

  return logUserExpenses.length === 0 ? (
    <h1>Harcama geçmişiniz bulunmuyor.</h1>
  ) : (
    <div>
      <ExpenseFilter
        setWalletFilter={setWalletFilter}
        listWallets={listWallets}
        setYearFilter={setYearFilter}
        listYears={listYears}
        setMonthFilter={setMonthFilter}
        listMonths={listMonths}
        setCategoryFilter={setCategoryFilter}
        listCategories={listCategories}
        setAmmountFilter={setAmmountFilter}
        ammountList={ammountList}
        apply={apply}
      ></ExpenseFilter>
      <ListComp items={showList}></ListComp>
    </div>
  );
};

export default ExpenseHistoryScreen;

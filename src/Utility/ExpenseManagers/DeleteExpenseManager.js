import { deleteExpense, findExpense } from "../../Data/Expenses";

const DeleteExpenseManager = (expenseId) => {
  const expense = findExpense(expenseId);
  if (expense === null) {
    alert("Harcama bulunamad─▒.");
    return false;
  } else {
    deleteExpense(expenseId);
    return true;
  }
};

export default DeleteExpenseManager;

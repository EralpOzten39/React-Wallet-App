export let logUserExpenses = [];

export let Expenses = [
  {
    id: 0,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    categoryId: 0,
    categoryTitle: "Diğer",
    title: "Araba Yıkama",
    ammount: 100.0,
    date: "2022-05-29",
  },
  {
    id: 1,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    categoryId: 2,
    categoryTitle: "Yiyecek",
    title: "Big-Mac Menü",
    ammount: 50.0,
    date: "2020-06-29",
  },
  {
    id: 2,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    categoryId: 1,
    categoryTitle: "Elektronik",
    title: "Ekran Kartı",
    ammount: 2000.0,
    date: "2021-04-29",
  },{
    id: 3,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    categoryId: 4,
    categoryTitle: "Kişisel",
    title: "Cafe Harcamaları",
    ammount: 20.0,
    date: "2022-05-29",
  },
  {
    id: 4,
    userId: 0,
    walletId: 1,
    walletTitle: "My Wallet 2",
    categoryId: 5,
    categoryTitle: "Yakıt",
    title: "18L Benzin",
    ammount: 150.0,
    date: "2020-06-29",
  },
  {
    id: 5,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    categoryId: 1,
    categoryTitle: "Elektronik",
    title: "18L Benzin",
    ammount: 350.0,
    date: "2021-04-29",
  },
];
let expenseId = Expenses.length;

export const createLogUserExpenses = (logUserId) => {
  logUserExpenses = [];
  for (let index = 0; index < Expenses.length; index++) {
    if (Expenses[index].userId === logUserId) {
      logUserExpenses[logUserExpenses.length] = Expenses[index];
    }
  }
};

export const addExpense = (
  userId,
  walletId,
  walletTitle,
  categoryId,
  categoryTitle,
  title,
  ammount,
  date
) => {
  const newExpense = {
    id: expenseId,
    userId: parseInt(userId),
    walletId: parseInt(walletId),
    walletTitle: walletTitle,
    categoryId: parseInt(categoryId),
    categoryTitle: categoryTitle,
    title: title,
    ammount: parseFloat(ammount),
    date: date,
  };

  Expenses.push(newExpense);
  logUserExpenses.push(newExpense);
  expenseId += 1;
};

export const deleteExpense = (expenseId) => {
  const newExpensesList = [];
  const newLogUserExpensesList = [];

  for (let index = 0; index < Expenses.length; index++) {
    if (expenseId === Expenses[index].id) {
      console.log("Expense deleted from Expenses.");
    } else {
      newExpensesList.push(Expenses[index]);
    }
  }

  for (let index = 0; index < logUserExpenses.length; index++) {
    if (expenseId === logUserExpenses[index].id) {
      console.log("Expense deleted from logUserExpenses.");
    } else {
      newLogUserExpensesList.push(logUserExpenses[index]);
    }
  }

  Expenses = newExpensesList;
  logUserExpenses = newLogUserExpensesList;
};

export const findExpense = (expenseId) => {
  for (let index = 0; index < Expenses.length; index++) {
    if (Expenses[index].id === expenseId) {
      return Expenses[index];
    }
  }
  return null;
};

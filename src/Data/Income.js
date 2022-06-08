export let logUserIncome = [];

export let Income = [
  {
    id: 0,
    userId: 0,
    walletId: 0,
    walletTitle: "My Wallet 1",
    ammount: 10000.0,
    date: "2022-05-01",
  },
  {
    id: 1,
    userId: 0,
    walletId: 1,
    walletTitle: "My Wallet 2",
    ammount: 10000.0,
    date: "2022-05-01",
  },
];
let incomeId = Income.length;

export const createLogUserIncome = (logUserId) => {
  logUserIncome = [];
  for (let index = 0; index < Income.length; index++) {
    if (Income[index].userId === parseFloat(logUserId)) {
      logUserIncome[logUserIncome.length] = Income[index];
    }
  }
};

export const addIncome = (userId, walletId, walletTitle, ammount) => {
  const newDate = new Date();
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  const date = ("0" + newDate.getDate()).slice(-2);
  const year = newDate.getFullYear();

  const income = {
    id: incomeId,
    userId: parseInt(userId),
    walletId: parseInt(walletId),
    walletTitle: walletTitle,
    ammount: parseFloat(ammount),
    date: year + "-" + month + "-" + date,
  };

  Income.push(income);
  logUserIncome.push(income);
  incomeId += 1;
};

export const deleteWalletIncome = (walletId) => {
  const newIncomeList = [];
  const newLogUserIncomeList = [];

  for (let index = 0; index < Income.length; index++) {
    if (parseInt(walletId) === Income[index].walletId) {
      console.log("Income deleted from Income.");
    } else {
      newIncomeList.push(Income[index]);
    }
  }

  for (let index = 0; index < logUserIncome.length; index++) {
    if (parseInt(walletId) === logUserIncome[index].walletId) {
      console.log("Income deleted from logUserIncome.");
    } else {
      newLogUserIncomeList.push(logUserIncome[index]);
    }
  }

  Income = newIncomeList;
  logUserIncome = newLogUserIncomeList;
};

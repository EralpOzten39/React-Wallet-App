import ExpenseRep from "../Components/Expense/ExpenseRep";
import Income from "../Components/Income/Income";
import { findCategory } from "../Data/Categories";
import { logUserExpenses } from "../Data/Expenses";
import { logUserIncome } from "../Data/Income";
import { findWallet } from "../Data/Wallets";

const ReportManager = (
  reportType,
  walletId,
  firstDate,
  secondDate,
  categoryId
) => {
  let totalAmmount = 0;
  let message = "";
  let wallet = findWallet(walletId);
  let category = findCategory(categoryId);

  let showList = [];

  let reportList = [];
  if (reportType === "out") {
    reportList = logUserExpenses;
  } else if (reportType === "in") {
    reportList = logUserIncome;
  } else {
    alert("İşlem türü seçiniz.");
    return showList;
  }

  if (wallet === null) {
  } else {
    let newReportList = [];
    for (let index = 0; index < reportList.length; index++) {
      if (reportList[index].walletId === wallet.id) {
        newReportList.push(reportList[index]);
      }
    }
    reportList = [...newReportList];
  }

  if (firstDate === "" && secondDate === "") {
  } else if (
    (firstDate === "" && secondDate !== "") ||
    (firstDate !== "" && secondDate === "")
  ) {
    alert("Hatalı tarih girişi.");
    return showList;
  } else {
    let date1 = Date.parse(firstDate);
    let date2 = Date.parse(secondDate);

    let gtDate;
    let ltDate;

    if (date1 >= date2) {
      gtDate = date1;
      ltDate = date2;
    } else {
      gtDate = date2;
      ltDate = date1;
    }

    let newReportList = [];
    for (let index = 0; index < reportList.length; index++) {
      const repDate = Date.parse(reportList[index].date);
      if (repDate >= ltDate && repDate <= gtDate) {
        newReportList.push(reportList[index]);
      }
    }
    reportList = [...newReportList];
  }

  if (category === null) {
  } else {
    let newReportList = [];
    for (let index = 0; index < reportList.length; index++) {
      if (reportList[index].categoryId === category.id) {
        newReportList.push(reportList[index]);
      }
    }
    reportList = [...newReportList];
  }

  if (reportType === "in") {
    showList = reportList.map((income) => (
      <Income key={income.id} income={income}></Income>
    ));
  } else if (reportType === "out") {
    showList = reportList.map((expense) => (
      <ExpenseRep key={expense.id} expense={expense}></ExpenseRep>
    ));
  }

  if (showList.length === 0) {
    message = "Raporlanacak bir kayıt bulunamadı.";
  } else {
    for (let index = 0; index < reportList.length; index++) {
      totalAmmount += reportList[index].ammount;
    }
    message =
      "Girilen bilgiler dahilindeki rapor sonucu = " +
      totalAmmount +
      " olarak hesaplanmıştır.";
  }

  showList.push(message);

  return showList;
};

export default ReportManager;

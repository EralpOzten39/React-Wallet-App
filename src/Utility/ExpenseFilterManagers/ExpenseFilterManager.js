import { logUserExpenses } from "../../Data/Expenses";
import { logUserWallets } from "../../Data/Wallets";
import { Categories } from "../../Data/Categories";

const ExpenseFilterManager = () => {
  const options = [];
  const optionsListWallets = [];
  const optionsListYears = [];
  //const optionsListMonths = []; Daha aşağıda değerleriyle tanımlandı
  const optionsListCategories = [];

  //Cüzdanları listeleme
  for (let index = 0; index < logUserWallets.length; index++) {
    optionsListWallets.push(logUserWallets[index]);
  }
  //...

  //Yılları listeleme
  let years = [];
  for (let index = 0; index < logUserExpenses.length; index++) {
    years.indexOf(logUserExpenses[index].date.slice(0, 4)) === -1
      ? years.push(logUserExpenses[index].date.slice(0, 4))
      : console.log();
  }

  years = years.sort((year1, year2) =>
    parseInt(year1) <= parseInt(year2) ? 1 : -1
  );

  for (let index = 0; index < years.length; index++) {
    optionsListYears.push({
      id: years[index],
      title: years[index],
    });
  }
  //...

  //Ayları listeleme
  const optionsListMonths = [
    { id: "01", title: "Ocak" },
    { id: "02", title: "Şubat" },
    { id: "03", title: "Mart" },
    { id: "04", title: "Nisan" },
    { id: "05", title: "Mayıs" },
    { id: "06", title: "Haziran" },
    { id: "07", title: "Temmuz" },
    { id: "08", title: "Ağustos" },
    { id: "09", title: "Eylül" },
    { id: "10", title: "Ekim" },
    { id: "11", title: "Kasım" },
    { id: "12", title: "Aralık" },
  ];
  //...

  //Kategorileri listeleme
  for (let index = 0; index < Categories.length; index++) {
    optionsListCategories.push(Categories[index]);
  }
  //...

  options.push(optionsListWallets);
  options.push(optionsListYears);
  options.push(optionsListMonths);
  options.push(optionsListCategories);

  return options;
};

export default ExpenseFilterManager;

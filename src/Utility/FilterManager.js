const FilterManager = (
  filterList,
  walletFilter, // wallet id (string, need to parseInt)
  balanceFilter, // expense ammount ("asc","des")
  monthFilter, // month id ("01","02",...)
  yearFilter, // year string ("2022","2021",...)
  categoryFilter // category id (string, need to parseInt)
) => {
  let list = [];
  let newList = [];

  if (
    walletFilter === "" &&
    balanceFilter === "" &&
    monthFilter === "" &&
    yearFilter === "" &&
    categoryFilter === ""
  ) {
    return filterList;
  }

  //Cüzdan, yıl, kategori kontrol
  if (walletFilter === "" && yearFilter === "" && categoryFilter === "") {
    list = filterList;
  } else {
    for (let index = 0; index < filterList.length; index++) {
      const yearSelect = filterList[index].date.slice(0, 4) === yearFilter;
      const walletSelect =
        filterList[index].walletId === parseInt(walletFilter);
      const categorySelect =
        filterList[index].categoryId === parseInt(categoryFilter);

      if (walletSelect && yearSelect && categorySelect) {
        list[list.length] = filterList[index];
      } else if (walletSelect && yearSelect && categoryFilter === "") {
        list[list.length] = filterList[index];
      } else if (walletSelect && yearFilter === "" && categorySelect) {
        list[list.length] = filterList[index];
      } else if (walletFilter === "" && yearSelect && categorySelect) {
        list[list.length] = filterList[index];
      } else if (walletSelect && yearFilter === "" && categoryFilter === "") {
        list[list.length] = filterList[index];
      } else if (walletFilter === "" && yearSelect && categoryFilter === "") {
        list[list.length] = filterList[index];
      } else if (walletFilter === "" && yearFilter === "" && categorySelect) {
        list[list.length] = filterList[index];
      }
    }
  }
  //...

  //Ay kontrol
  if (monthFilter === "") {
    newList = [...list];
  } else {
    for (let index = 0; index < list.length; index++) {
      if (list[index].date.slice(5, 7) === monthFilter) {
        newList.push(list[index]);
      }
    }
  }
  //...

  if (balanceFilter === "asc") {
    newList = newList.sort((expense1, expense2) =>
      expense1.ammount >= expense2.ammount ? 1 : -1
    );
  } else if (balanceFilter === "des") {
    newList = newList.sort((expense1, expense2) =>
      expense1.ammount <= expense2.ammount ? 1 : -1
    );
  }

  return newList;
};

export default FilterManager;

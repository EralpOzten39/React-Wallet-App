import FilterComBox from "../FilterComBox/FilterComBox";
import "./Filter.css";

const ExpenseFilter = (props) => {
  const {
    setWalletFilter,
    listWallets,
    setYearFilter,
    listYears,
    setMonthFilter,
    listMonths,
    setCategoryFilter,
    listCategories,
    setAmmountFilter,
    ammountList,
    apply,
  } = props;
  return (
    <div className="filter-main">
      <div className="flex-filter">
        <div>
          <FilterComBox
            title={"Cüzdan"}
            firstMsg={"...Bütün Cüzdanlar..."}
            setVal={setWalletFilter}
            items={listWallets}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Yıl"}
            firstMsg={"...Bütün Yıllar..."}
            setVal={setYearFilter}
            items={listYears}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Ay"}
            firstMsg={"...Bütün Aylar..."}
            setVal={setMonthFilter}
            items={listMonths}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Kategori"}
            firstMsg={"...Tüm Kategoriler..."}
            setVal={setCategoryFilter}
            items={listCategories}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Harcama Miktar"}
            firstMsg={"...Fiyat Sıralama..."}
            setVal={setAmmountFilter}
            items={ammountList}
          ></FilterComBox>
        </div>
        <button onClick={apply}>Filtrele</button>
      </div>
    </div>
  );
};

export default ExpenseFilter;

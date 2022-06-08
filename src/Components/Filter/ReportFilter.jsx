import FilterComBox from "../FilterComBox/FilterComBox";

const ExpenseFilter = (props) => {
  const {
    setProcessType,
    processList,
    setSelectedWallet,
    walletList,
    setFirstDate,
    setSecondDate,
    setSelectedCategory,
    categoryList,
    reportHandler,
  } = props;
  return (
    <div className="filter-main flex-filter">
      <h1 className="center-h">Rapor Sayfası</h1>
      <div className="flex-filter">
        <div>
          <FilterComBox
            title={"İşlem Tipi"}
            firstMsg={"...İşlemler..."}
            setVal={setProcessType}
            items={processList}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Cüzdanlar"}
            firstMsg={"...Tüm Cüzdanlar..."}
            setVal={setSelectedWallet}
            items={walletList}
          ></FilterComBox>
        </div>
        <div>
          <FilterComBox
            title={"Kategori"}
            firstMsg={"...Tüm Kategoriler..."}
            setVal={setSelectedCategory}
            items={categoryList}
          ></FilterComBox>
        </div>
        <div>
          <h2>Tarih Aralığı Seçin</h2>
          <div>
            <input
              type="date"
              onChange={(event) => setFirstDate(event.target.value)}
            ></input>
            <input
              type="date"
              onChange={(event) => setSecondDate(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <button className="rep-btn" onClick={reportHandler}>
        Raporu Göster
      </button>
    </div>
  );
};

export default ExpenseFilter;

/*
import FilterComBox from "../FilterComBox/FilterComBox";

const ExpenseFilter = (props) => {
  return (
    <div>
      <h1>Raporlama</h1>
      <div>
        <h2>İşlem Türü Seçiniz</h2>




        <select onChange={(event) => setProcessType(event.target.value)}>
          <option key={""} value={""}>
            ...İşlemler...
          </option>
          <option key={"in"} value={"in"}>
            Giriş
          </option>
          <option key={"out"} value={"out"}>
            Çıkış
          </option>
        </select>




      </div>
      <div>
        <h2>Cüzdan Seçin</h2>



        <select onChange={(event) => setSelectedWallet(event.target.value)}>
          <option key={""} value={""}>
            ...Tüm Cüzdanlar...
          </option>
          {logUserWallets.map((wallet) => (
            <option key={wallet.id} value={wallet.id}>
              {wallet.title}
            </option>
          ))}
        </select>




        
      </div>
      <div>
        <h2>Tarih Aralığı Seçin</h2>
        <input
          type="date"
          onChange={(event) => setFirstDate(event.target.value)}
        ></input>
        <input
          type="date"
          onChange={(event) => setSecondDate(event.target.value)}
        ></input>
      </div>

      <div>
        <h2>İşlem Kategorisi Seçin</h2>
        <select onChange={(event) => setSelectedCategory(event.target.value)}>
          {categoryList}
        </select>
      </div>
      <button onClick={reportHandler}>Raporu Göster</button>
      <div>
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default ExpenseFilter;

*/

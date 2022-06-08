import "./Expense.css";

const Expense = (props) => {
  const { expense, setDelSelect } = props;
  return (
    <div className="exp-div-cmp">
      <h2>{"Kategori : " + expense.categoryTitle}</h2>
      <h2>{"Tarih : " + expense.date}</h2>
      <h2>{expense.title}</h2>
      <h2>{"Tutar : " + expense.ammount}</h2>
      <h2>{"Cüzdan Adı : " + expense.walletTitle}</h2>
      <div className="exp-test">
        <button className="del-button" onClick={() => setDelSelect(expense)}>
          Harcamayı Sil
        </button>
      </div>
    </div>
  );
};

export default Expense;

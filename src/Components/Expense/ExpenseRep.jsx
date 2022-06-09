const ExpenseRep = (props) => {
  const { expense } = props;
  return (
    <div className="exp-div-cmp exp-rep-color">
      <h3>{"Kategori : " + expense.categoryTitle}</h3>
      <h3>{"Tarih : " + expense.date}</h3>
      <h3>{expense.title}</h3>
      <h3>{"Tutar : " + expense.ammount}</h3>
      <h3>{"Cüzdan Adı : " + expense.walletTitle}</h3>
    </div>
  );
};

export default ExpenseRep;

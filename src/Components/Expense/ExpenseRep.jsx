const ExpenseRep = (props) => {
  const { expense } = props;
  return (
    <div className="exp-div-cmp exp-rep-color">
      <div>
        <h3>{expense.categoryTitle + " " + expense.date}</h3>
      </div>
      <div>
        <h2>{expense.title}</h2>
      </div>
      <div>
        <h2>{"Tutar : " + expense.ammount}</h2>
      </div>
      <div>
        <h2>{"Cüzdan Adı : " + expense.walletTitle}</h2>
      </div>
    </div>
  );
};

export default ExpenseRep;

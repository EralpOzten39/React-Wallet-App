const ExpenseRefund = (props) => {
  const { expense, deleteHandler } = props;
  return (
    <div className="exp-div-cmp">
      <h2>Harcama Miktarı</h2>
      <h2>" {expense.walletTitle} "</h2>
      <h2>Cüzdanına Eklensin Mi?</h2>
      <div className="exp-test">
        <button onClick={() => deleteHandler(expense, true)}>Evet</button>
        <button onClick={() => deleteHandler(expense, false)}>Hayır</button>
      </div>
    </div>
  );
};

export default ExpenseRefund;

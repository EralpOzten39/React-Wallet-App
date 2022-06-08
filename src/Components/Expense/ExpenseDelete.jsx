const ExpenseDelete = (props) => {
  const { expense, setRefundSelect, setDelSelect } = props;
  return (
    <div className="exp-div-cmp">
      <h2>{expense.ammount + " Tutarındaki "}</h2>
      <h2>{expense.title}</h2>
      <h2>Harcama Kaydı Silinecek</h2>
      <h2>Devam Edilsin Mi?</h2>

      <div className="exp-test">
        <button className="del-button" onClick={() => setRefundSelect(expense)}>
          Onayla
        </button>
        <button onClick={() => setDelSelect()}>İptal</button>
      </div>
    </div>
  );
};

export default ExpenseDelete;

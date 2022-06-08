import "./Income.css";

const Income = (props) => {
  const { income } = props;
  return (
    <div className="inc-div-cmp">
      <div>
        <h3>{/*income.categoryTitle + " " +*/ "Tarih : " + income.date}</h3>
      </div>
      {/*<div>
          <h2>{income.title}</h2>
    </div>*/}
      <div>
        <h2>{"Yüklenen Miktar : " + income.ammount}</h2>
      </div>
      <div>
        <h2>{"Cüzdan Adı : " + income.walletTitle}</h2>
      </div>
    </div>
  );
};

export default Income;

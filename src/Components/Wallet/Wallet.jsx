import "./Wallet.css";

const Wallet = (props) => {
  const { wallet, setSelectedWallet, setDelWallet } = props;
  return (
    <div className="dp-flex main-div">
      <div className="left-margin">
        <h3>{wallet.title + " --- Bakiye : " + wallet.balance}</h3>
      </div>
      <div className="test-class">
        <button onClick={() => setSelectedWallet(wallet)}>Bakiye Ekle</button>
        <button className="del-button" onClick={() => setDelWallet(wallet)}>Cüzdanı Sil</button>
      </div>
    </div>
  );
};

export default Wallet;
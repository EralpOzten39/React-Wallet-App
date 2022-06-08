import "./Wallet.css";

const WalletAddBalance = (props) => {
  const { wallet, balance, setBalance, addBalanceHandler, setSelectedWallet } =
    props;
  return (
    <div className="dp-flex main-div">
      <div className="left-margin">
        <h3>{wallet.title + " --- Bakiye : " + wallet.balance}</h3>
      </div>
      <div className="test-class">
        <input
          type="number"
          placeholder="Bakiye"
          value={balance}
          min="0.01"
          step="0.01"
          onChange={(event) => setBalance(event.target.value)}
        ></input>
        <button onClick={() => addBalanceHandler(wallet.id, balance)}>
          Ekle
        </button>
        <button onClick={() => setSelectedWallet()}>İptal</button>
      </div>
    </div>
  );
};

export default WalletAddBalance;

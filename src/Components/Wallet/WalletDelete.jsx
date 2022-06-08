const WalletDelete = (props) => {
  const { wallet, deleteWalletHandler, setDelWallet } = props;
  return (
    <div className="dp-flex main-div">
      <div className="left-margin">
        <h3>{wallet.title + " --- Cüzdanı Silinecek."}</h3>
      </div>
      <div className="test-class">
        <button
          className="del-button"
          onClick={() => deleteWalletHandler(wallet.id)}
        >
          Onayla
        </button>
        <button onClick={() => setDelWallet()}>İptal</button>
      </div>
    </div>
  );
};

export default WalletDelete;

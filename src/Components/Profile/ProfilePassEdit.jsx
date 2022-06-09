import "./Profile.css";

const ProfileEdit = (props) => {
  const { setOldPasswordPE, setNewPasswordPE, passEditHandler, setPassEdit } =
    props;
  return (
    <div className="pro-cmp-otr">
      <div className="pro-cmp-inr">
        <div>
          <h2>Eski Şifre :</h2>
          <input
            type="password"
            onChange={(event) => setOldPasswordPE(event.target.value)}
            placeholder="Eski Şifre"
          ></input>
        </div>
        <div>
          <h2>Yeni Şifre :</h2>
          <input
            type="password"
            onChange={(event) => setNewPasswordPE(event.target.value)}
            placeholder="Yeni Şifre"
          ></input>
        </div>
        <div className="pass-edit-btn">
          <button onClick={passEditHandler}>Güncelle</button>
          <button onClick={() => setPassEdit(false)}>İptal</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;

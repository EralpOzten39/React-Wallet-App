import "./Profile.css";

const ProfileEdit = (props) => {
  const {
    setNamePE,
    setSurnamePE,
    setEmailPE,
    setUsernamePE,
    setOldPasswordPE,
    info,
    proEditHandler,
    setProEdit,
  } = props;
  return (
    <div className="pro-cmp-otr">
      <div className="pro-cmp-inr">
        <div>
          <div>
            <input
              type="text"
              value={info[0]}
              onChange={(event) => setNamePE(event.target.value)}
              placeholder="-Ad-"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={info[1]}
              onChange={(event) => setSurnamePE(event.target.value)}
              placeholder="-Soyad-"
            ></input>
          </div>
        </div>
        <div>
          <input
            type={"text"}
            value={info[2]}
            onChange={(event) => setEmailPE(event.target.value)}
            placeholder="-Email-"
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={info[3]}
            onChange={(event) => setUsernamePE(event.target.value)}
            placeholder="-Kullanıcı Adı-"
          ></input>
        </div>
        <div>
          <input
            type="password"
            onChange={(event) => setOldPasswordPE(event.target.value)}
            placeholder="-Şifre-"
          ></input>
        </div>
        <div>
          <button onClick={proEditHandler}>Güncelle</button>
          <button onClick={() => setProEdit(false)}>İptal</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;

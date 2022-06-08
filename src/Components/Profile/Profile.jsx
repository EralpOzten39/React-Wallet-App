import "./Profile.css";

const Profile = (props) => {
  const { user, setProEdit, setPassEdit } = props;
  return (
    <div className="pro-cmp-otr">
      <div className="pro-cmp-inr">
        <h1>Bilgilerim</h1>
        <h2>Ad : {user.name}</h2>
        <h2>Soyad : {user.surname}</h2>
        <h2>Email : {user.email}</h2>
        <h2>Kullanıcı Adı : {user.username}</h2>
        <div>
          <button onClick={() => setProEdit(true)}>Profili Güncelle</button>
          <button onClick={() => setPassEdit(true)}>Şifre Değiştir</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { useState } from "react";
import RegisterManager from "../../Utility/RegisterManager";
import "./RegisterScreen.css";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const RegisterHandler = () => {
    setSuccess(RegisterManager(name, surname, email, username, password));
  };

  return success === false ? (
    <div className="reg-otr">
      <div className="reg-inr">
        <h1>Kayıt Ekranı</h1>
        <div>
          <input
            className="inpt-ns"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ad"
          ></input>
          <input
            className="inpt-ns"
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            placeholder="Soyad"
          ></input>
        </div>
        <div>
          <input
            className="inpt-cls"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            className="inpt-cls"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Kullanıcı Adı"
          ></input>
        </div>
        <div>
          <input
            className="inpt-cls"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Şifre"
          ></input>
        </div>
        <div>
          <button className="btn-register" onClick={RegisterHandler}>
            Kayıt Ol
          </button>
          <button className="btn-register" onClick={props.clickOnGeri}>
            Geri
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="reg-otr">
      <div className="reg-inr success">
        <h1>Kaydınız Başarılı.</h1>
        <button className="btn-register btn-upd" onClick={props.clickOnGeri}>
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export default RegisterScreen;

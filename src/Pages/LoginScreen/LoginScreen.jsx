import React from "react";
import { useState } from "react";
import LoginManager from "../../Utility/LoginManager";
import MainScreen from "../MainScreen";
import RegisterScreen from "../RegisterScreen/RegisterScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [regState, setRegState] = useState(false);
  const [logState, setLogState] = useState(false);

  const exitHandler = () => {
    setEnteredUsername("");
    setEnteredPassword("");
    setLogState(false);
  };

  if (regState)
    return <RegisterScreen clickOnGeri={() => setRegState(false)} />;

  return logState === false ? (
    <div className="main-outer">
      <div className="main-inner">
        <div>
          <h2>Giriş Ekranı</h2>
          <div>
            <input
              className="inpt-cls"
              type="text"
              value={enteredUsername}
              onChange={(event) => setEnteredUsername(event.target.value)}
              placeholder="Kullanıcı Adı"
            ></input>
          </div>
          <div>
            <input
              className="inpt-cls"
              type="password"
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
              placeholder="Şifre"
            ></input>
          </div>
          <div className="buttons">
            <button
              className="button-37"
              onClick={() =>
                setLogState(LoginManager(enteredUsername, enteredPassword))
              }
            >
              Giriş
            </button>
            <button className="button-37" onClick={() => setRegState(true)}>
              Kayıt
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <MainScreen onLogoutClick={exitHandler} />
  );
};

export default LoginScreen;

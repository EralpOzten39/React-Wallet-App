import React from "react";
import { useState } from "react";
import { logUser } from "../Utility/LoginManager";
import MainScreenManager from "../Utility/MainScreenManager";
import "./MainScreen.css";

const MainScreen = (props) => {
  const [screenSelector, setScreen] = useState(0);

  return (
    <div>
      <div className="ms-top">
        <h2>Wallet App</h2>
        <h4>
          {logUser.name}
          {logUser.surname}
          <br />
          {logUser.email}
        </h4>
      </div>
      <div className="ms-main">
        <button onClick={() => setScreen(1)}>Cüzdanlarım</button>
        <button onClick={() => setScreen(2)}>Cüzdan Ekle</button>
        <button onClick={() => setScreen(3)}>Harcama Ekle</button>
        <button onClick={() => setScreen(4)}>Harcama Geçmişi</button>
        <button onClick={() => setScreen(5)}>Rapor Ekranı</button>
        <button onClick={() => setScreen(6)}>Profil</button>
        <button onClick={props.onLogoutClick}>Çıkış</button>
      </div>
      {MainScreenManager(screenSelector)}
    </div>
  );
};

export default MainScreen;

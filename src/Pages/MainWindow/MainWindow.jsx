import React from "react";
import { logUser } from "../../Utility/LoginManager";
import "./MainWindow.css";

const MainWindow = () => {
  return (
    <div className="main-otr">
      <h1>{"Hoşgeldin"}</h1>
      <h1>{logUser.name + " " + logUser.surname}</h1>
    </div>
  );
};

export default MainWindow;

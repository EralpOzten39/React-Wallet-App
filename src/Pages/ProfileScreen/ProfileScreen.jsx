import React from "react";
import { useState } from "react";
import { logUser } from "../../Utility/LoginManager";
import ProfileEditManager from "../../Utility/ProfileManagers/ProfileEditManager";
import PasswordEditManager from "../../Utility/ProfileManagers/PasswordEditManager";
import Profile from "../../Components/Profile/Profile";
import ProfileEdit from "../../Components/Profile/ProfileEdit";
import ProfilePassEdit from "../../Components/Profile/ProfilePassEdit";
import "./Profile.css";

const ProfileScreen = () => {
  const [proEdit, setProEdit] = useState(false);
  const [passEdit, setPassEdit] = useState(false);

  const [namePE, setNamePE] = useState(logUser.name);
  const [surnamePE, setSurnamePE] = useState(logUser.surname);
  const [emailPE, setEmailPE] = useState(logUser.email);
  const [usernamePE, setUsernamePE] = useState(logUser.username);
  const [oldPasswordPE, setOldPasswordPE] = useState("");
  const [newPasswordPE, setNewPasswordPE] = useState("");

  const [success, setSuccess] = useState(false);

  const proEditHandler = () => {
    if (
      ProfileEditManager(
        logUser.id,
        namePE,
        surnamePE,
        emailPE,
        usernamePE,
        oldPasswordPE
      )
    ) {
      setProEdit(false);
      setSuccess(true);
      setNamePE("");
      setSurnamePE("");
      setEmailPE("");
      setUsernamePE("");
      setOldPasswordPE("");
    }
  };

  const passEditHandler = () => {
    if (PasswordEditManager(logUser.id, oldPasswordPE, newPasswordPE)) {
      setPassEdit(false);
      setSuccess(true);
      setOldPasswordPE("");
      setNewPasswordPE("");
    }
  };

  const info = [namePE, surnamePE, emailPE, usernamePE];

  if (success) {
    return (
      <div className="prfl-otr">
        <div className="prfl-inr">
          <h1>Güncelleme başarılı</h1>
          <button onClick={() => setSuccess(false)}>Profil</button>
        </div>
      </div>
    );
  } else if (proEdit) {
    return (
      <ProfileEdit
        setNamePE={setNamePE}
        setSurnamePE={setSurnamePE}
        setEmailPE={setEmailPE}
        setUsernamePE={setUsernamePE}
        setOldPasswordPE={setOldPasswordPE}
        info={info}
        proEditHandler={proEditHandler}
        setProEdit={setProEdit}
      ></ProfileEdit>
    );
  } else if (passEdit) {
    return (
      <ProfilePassEdit
        setOldPasswordPE={setOldPasswordPE}
        setNewPasswordPE={setNewPasswordPE}
        passEditHandler={passEditHandler}
        setPassEdit={setPassEdit}
      ></ProfilePassEdit>
    );
  } else {
    return (
      <Profile
        user={logUser}
        setProEdit={setProEdit}
        setPassEdit={setPassEdit}
      ></Profile>
    );
  }
};

export default ProfileScreen;

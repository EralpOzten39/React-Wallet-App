import { changeUserPassword, findUser } from "../../Data/Users";

const PasswordEditManager = (userId, oldPassword, newPassword) => {
  const user = findUser(userId);
  if (
    oldPassword.replace(/ /g, "") === "" ||
    newPassword.replace(/ /g, "") === ""
  ) {
    alert("Alanlar boş bırakılamaz.");
    return false;
  } else if (user.password === oldPassword) {
    changeUserPassword(userId, oldPassword, newPassword);
    return true;
  } else {
    alert("Hatalı şifre.");
    return false;
  }
};

export default PasswordEditManager;

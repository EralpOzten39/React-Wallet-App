import { addUser } from "../Data/Users";

const RegisterManager = (name, surname, email, username, password) => {
  if (
    name.replace(/ /g, "") === "" ||
    surname.replace(/ /g, "") === "" ||
    email.replace(/ /g, "") === "" ||
    username.replace(/ /g, "") === "" ||
    password.replace(/ /g, "") === ""
  ) {
    alert("Kullanıcı eklenemedi.");
    return false;
  }
  addUser(name, surname, email, username, password);
  return true;
};

export default RegisterManager;

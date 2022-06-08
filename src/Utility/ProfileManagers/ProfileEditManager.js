import { editUser, findUser } from "../../Data/Users";

const ProfileEditManager = (
  userId,
  newName,
  newSurname,
  newEmail,
  newUsername,
  password
) => {
  const user = findUser(userId);
  if (user === null) {
    alert("Kullanıcı bulunamadı.");
    return false;
  } else if (
    newName.replace(/ /g, "") === "" ||
    newSurname.replace(/ /g, "") === "" ||
    newEmail.replace(/ /g, "") === "" ||
    newUsername.replace(/ /g, "") === "" ||
    password.replace(/ /g, "") === ""
  ) {
    alert("Alanlar boş bırakılamaz.");
    return false;
  } else if (user.password === password) {
    editUser(userId, newName, newSurname, newEmail, newUsername, password);
    return true;
  } else {
    alert("Hatalı şifre.");
    return false;
  }
};

export default ProfileEditManager;

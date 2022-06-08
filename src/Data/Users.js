import { setLogUser } from "../Utility/LoginManager";

export let Users = [
  {
    id: 0,
    name: "Eralp",
    surname: "Özten",
    email: "EÖ@outlook.com",
    username: "eralpozten",
    password: "123456",
  },
];
let userId = Users.length;

export const addUser = (name, surname, email, username, password) => {
  Users[Users.length] = {
    id: userId,
    name: name,
    surname: surname,
    email: email,
    username: username,
    password: password,
  };

  userId += 1;
};

export const editUser = (userId, name, surname, email, username) => {
  for (let index = 0; index < Users.length; index++) {
    if (Users[index].id === parseInt(userId)) {
      Users[index] = {
        id: parseInt(userId),
        name: name,
        surname: surname,
        email: email,
        username: username,
        password: Users[index].password,
      };
      setLogUser(Users[index]);
    }
  }
};

export const changeUserPassword = (userId, oldPassword, newPassword) => {
  for (let index = 0; index < Users.length; index++) {
    if (
      Users[index].id === parseInt(userId) &&
      Users[index].password === oldPassword
    ) {
      Users[index].password = newPassword;
      setLogUser(Users[index]);
    }
  }
};

export const findUser = (userId) => {
  for (let index = 0; index < Users.length; index++) {
    if (Users[index].id === parseInt(userId)) {
      return Users[index];
    }
  }
  return null;
};

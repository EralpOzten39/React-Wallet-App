import { Users } from "../Data/Users";
import { createLogUserWallets } from "../Data/Wallets";
import { createLogUserExpenses } from "../Data/Expenses";
import { createLogUserIncome } from "../Data/Income";

let logUser = null;

//Giriş yapan kullanıcıyı kontrol eden fonksiyon.
const LoginManager = (username, password) => {
  for (let index = 0; index < Users.length; index++) {
    if (
      username === Users[index].username &&
      password === Users[index].password
    ) {
      logUser = Users[index];
      createLogUserWallets(logUser.id);
      createLogUserExpenses(logUser.id);
      createLogUserIncome(logUser.id);
      return true;
    }
  }

  alert("Hatalı giriş.");
  logUser = null;
  return false;
};

export const setLogUser = (newUser) => {
  logUser = newUser;
};

export { logUser };
export default LoginManager;

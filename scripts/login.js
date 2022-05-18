import UserController from "../scripts/controllers/user-controller.js";

class LoginPage {
  static addSubmitLogin() {
    const btnEnviarLogin = document.querySelector("form");
    btnEnviarLogin.addEventListener("submit", this.loginUser);
  }

  static loginUser(event) {
    event.preventDefault();

    const data = LoginPage.getDados(event);
    UserController.loginUser(data);
  }

  static getDados(event) {
    const formItems = [...event.target];
    const values = {};

    formItems.forEach((item) => {
      values[item.name] = item.value;
    });

    return values;
  }
}

LoginPage.addSubmitLogin();

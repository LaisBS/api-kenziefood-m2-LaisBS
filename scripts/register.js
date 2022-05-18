import UserController from "../scripts/controllers/user-controller.js";
class CadastroPage {
  static addSubmitRegister() {
    const btnEnviarRegister = document.querySelector("form");
    btnEnviarRegister.addEventListener("submit", this.registerUser);
  }

  static registerUser(event) {
    event.preventDefault();

    const data = CadastroPage.getDados(event);
    UserController.registerUser(data);
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

CadastroPage.addSubmitRegister();

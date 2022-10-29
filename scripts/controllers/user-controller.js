class UserController {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com/auth/";
  static token = localStorage.getItem("Token");

  static async registerUser(userData) {
    return await fetch(this.BASE_URL + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 201) {
          Toastify({
            text: "Cadastro feito com sucesso! Você sera redirecionado para o login",
            duration: 3000,
            destination: "../pages/register.html",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();

          setTimeout(() => {
            window.location = "../pages/login.html";
          }, 3000);
        } else {
          Toastify({
            text: `Houve um erro status ${response.status}`,
            duration: 3000,
            destination: "../pages/register.html",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async loginUser(userData) {
    return await fetch(this.BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (response) => {
        if (response.status === 200) {
          const token = await response.json();
          localStorage.setItem("Token", token);
          Toastify({
            text: "Login feito com sucesso! Você sera redirecionado para a dashboard",
            duration: 3000,
            destination: "../pages/login.html",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();

          setTimeout(() => {
            window.location = "../pages/dashboard.html";
          }, 3000);
        } else {
          Toastify({
            text: `Houve um erro status ${response.status}`,
            duration: 3000,
            destination: "../pages/register.html",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default UserController;

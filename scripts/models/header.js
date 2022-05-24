class Header {
  static renderHeader(goPage) {
    const menu = document.querySelector(".menu");
    const token = localStorage.getItem("Token");
    const changePageBtn = document.createElement("button");

    if (token) {
      const logoutBtn = document.createElement("button");

      changePageBtn.setAttribute("id", "changePage-btn");
      logoutBtn.setAttribute("id", "logout-btn");

      changePageBtn.innerText = goPage;
      logoutBtn.innerText = "Logout";

      changePageBtn.addEventListener("click", (event) => {
        Header.changePage(event, goPage);
      });

      logoutBtn.addEventListener("click", (event) => {
        event.preventDefault();

        localStorage.removeItem("Token");
        window.location = "../pages/login.html";
      });

      menu.appendChild(logoutBtn);
    } else {
      changePageBtn.innerText = " Login ";

      changePageBtn.addEventListener("click", (event) => {
        event.preventDefault();

        window.location = "../pages/login.html";
      });
    }

    const perfilBtn = document.querySelector("#perfil");
    perfilBtn.addEventListener("click", Header.openMenu);

    menu.appendChild(changePageBtn);
  }

  static changePage(event, goPage) {
    event.preventDefault();

    let page = goPage.toLowerCase();
    if (page === "home") {
      page = "../../index.html";
    } else if (page === "dashboard") {
      page = "../pages/dashboard.html";
    }
    window.location = page;
  }

  static openMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("menu-open");
  }
}

export default Header;

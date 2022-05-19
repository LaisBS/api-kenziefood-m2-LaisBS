class Header {
  static renderHeader(goPage) {
    localStorage.setItem("Token", "test");
    const menu = document.getElementById("menu");
    const token = localStorage.getItem("Token");
    if (token) {
      const changePageBtn = document.createElement("button");
      const logoutBtn = document.createElement("button");

      changePageBtn.setAttribute("id", "changePage-btn");
      logoutBtn.setAttribute("id", "logout-btn");

      changePageBtn.innerText = goPage;
      logoutBtn.innerText = "Logout";

      changePageBtn.addEventListener("click", (event) => {
        Header.changePage(event, goPage);
      })

      logoutBtn.addEventListener("click", (event) => {
        event.preventDefault();

        localStorage.removeItem("Token");
        window.location = "../pages/login.html"
      })

      menu.appendChild(changePageBtn);
      menu.appendChild(logoutBtn);
    }
  }

  static changePage(event, goPage) {
    event.preventDefault();

    let page = goPage.toLowerCase();
    if(page === "home") {
      page = "../../index.html";
    } else if(page === "dashboard") {
      page = "../pages/dashboard.html";
    }
    window.location = page;
  }
}

export default Header

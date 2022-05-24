import ProductsController from "../controllers/products-controller.js";
import Cart from "./cart.js";

const response = await ProductsController.getPublicProducts();

class ShowCase {
  static renderFirst() {
    ShowCase.list(response);
  }

  static list(response) {
    const ul = document.getElementById("list-products");

    ul.innerHTML = " ";
    response.forEach((product) => {
      const li = document.createElement("li");
      li.setAttribute("id", product.id);
      li.classList.add("preview-product");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const span = document.createElement("span");
      const div = document.createElement("div");
      const p_price = document.createElement("p");
      const button = document.createElement("button");
      const cartIcon = document.createElement("img");

      img.src = product.imagem;
      img.setAttribute("class", "photo");
      h3.innerText = product.nome;
      p.innerText = product.descricao;
      span.innerText = product.categoria;
      p_price.innerText = new Intl.NumberFormat([], {
        style: "currency",
        currency: "BRL",
      }).format(product.preco);
      cartIcon.src = "images/cart_white.svg";
      div.setAttribute("class", "cart_price");
      div.appendChild(p_price);
      div.appendChild(button);
      button.setAttribute("class", "purchaseButton");
      button.appendChild(cartIcon);
      cartIcon.setAttribute("class", "cartIcon");
      cartIcon.addEventListener("click", ShowCase.handleClickCard);

      li.appendChild(img);
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(span);
      li.appendChild(div);

      ul.appendChild(li);
    });
  }

  static handleClickCard(event) {
    const bag = document.querySelector("#bag");
    const small = document.querySelector("#small");

    bag.classList.add("hidden");
    small.classList.add("hidden");
    let list = event.target.closest("li");
    for (let i = 0; i < response.length; i++) {
      if (response[i].id === list.id) {
        Cart.createCarItens(
          response[i].imagem,
          response[i].nome,
          response[i].categoria,
          response[i].preco
        );
      }
    }
  }

  static sectionFilter(event) {
    const btnAtivo = document.getElementById("botao-ativo");
    btnAtivo.id = "";

    event.target.id = "botao-ativo";
    if (event.target.classList.value === "Bakery") {
      const bList = response.filter((product) => {
        let search = product.categoria;
        return search === "Panificadora";
      });
      ShowCase.list(bList);
    } else if (event.target.classList.value === "Fruits") {
      const fList = response.filter((product) => {
        let search = product.categoria;
        return search === "Frutas";
      });
      ShowCase.list(fList);
    } else if (event.target.classList.value === "Drinks") {
      const dList = response.filter((product) => {
        let search = product.categoria;
        return search === "Bebidas";
      });
      ShowCase.list(dList);
    } else if (event.target.classList.value === "All") {
      return ShowCase.list(response);
    }
  }

  static wordSearch() {
    const searchField = document.getElementById("Search");

    let tex = searchField.value;
    let text = tex.toLowerCase();

    const searchFilter = response.filter((product) => {
      let search = product.nome.toLowerCase();

      return search.includes(text);
    });
    ShowCase.list(searchFilter);
  }

  static generateBtn() {
    const all = document.getElementsByClassName("All")[0];
    all.addEventListener("click", ShowCase.sectionFilter);
    const bakery = document.getElementsByClassName("Bakery")[0];
    bakery.addEventListener("click", ShowCase.sectionFilter);
    const fruits = document.getElementsByClassName("Fruits")[0];
    fruits.addEventListener("click", ShowCase.sectionFilter);
    const drinks = document.getElementsByClassName("Drinks")[0];
    drinks.addEventListener("click", ShowCase.sectionFilter);

    const searchField = document.getElementById("Search");
    searchField.addEventListener("keyup", ShowCase.wordSearch);

    const cartOpenBtn = document.getElementById("tileCar");
    const cartCloseBtn = document.getElementById("cart-close");

    cartOpenBtn.addEventListener("click", () => {
      ShowCase.showCartMobile(true);
    });

    cartCloseBtn.addEventListener("click", () => {
      ShowCase.showCartMobile(false);
    });
  }

  static showCartMobile(show) {
    const cartModal = document.getElementById("cart-modal");

    if (show) {
      cartModal.style.display = "flex";
    } else {
      cartModal.style.display = "none";
    }
  }
}

export default ShowCase;

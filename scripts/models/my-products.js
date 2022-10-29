import ProductsController from "/scripts/controllers/products-controller.js";
import { EditProduct } from "./edit-product.js";

const response = await ProductsController.getPrivateProducts();

class MyProducts {
  static renderFirst() {
    MyProducts.products(response);
  }

  static products(response) {
    const ul = document.getElementById("productsList");
    ul.innerHTML = "";
    response.forEach((product) => {
      const li = document.createElement("li");
      li.classList.add("item");
      const div = document.createElement("div");
      div.classList.add("product");
      const img = document.createElement("img");
      img.setAttribute("class", "photo");
      const h3 = document.createElement("h3");
      const divn = document.createElement("div");
      divn.setAttribute("class", "nomes");
      const p = document.createElement("p");
      const pd = document.createElement("p");
      const price = document.createElement("span");
      const divB = document.createElement("div");
      divB.setAttribute("id", "actions");
      const buttonE = document.createElement("img");

      const buttonD = document.createElement("img");

      img.src = product.imagem;
      h3.innerText = product.nome;
      h3.classList.add("product_name");
      divn.appendChild(img);
      divn.appendChild(h3);
      p.innerText = product.categoria;
      p.classList.add("product_category");
      pd.innerText = product.descricao;
      price.innerText = product.preco;
      price.classList.add("product_price");
      pd.classList.add("product_description");
      buttonE.src = "/images/EDIT.svg";
      buttonE.classList.add("class", "btnEdit");
      buttonE.addEventListener("click", (event) => {
        EditProduct.Edit(event, product);
      });

      buttonD.src = "/images/trash.svg";
      buttonD.addEventListener("click", () => {
        ProductsController.removeProduct(product.id);
      });
      buttonD.classList.add("class", "btnDelete");

      div.appendChild(divn);
      div.appendChild(p);
      div.appendChild(pd);
      div.appendChild(price);
      divB.appendChild(buttonE);
      divB.appendChild(buttonD);

      div.appendChild(divB);

      li.appendChild(div);

      ul.appendChild(li);
    });
  }
  static sectionFilter(event) {
    if (event.target.textContent === "Panificadora") {
      const bList = response.filter((product) => {
        let search = product.categoria;
        return search === "Panificadora";
      });
      MyProducts.products(bList);
    } else if (event.target.textContent === "Frutas") {
      const fList = response.filter((product) => {
        let search = product.categoria;
        return search === "Frutas";
      });
      MyProducts.products(fList);
    } else if (event.target.textContent === "Bebidas") {
      const dList = response.filter((product) => {
        let search = product.categoria;
        return search === "Bebidas";
      });
      MyProducts.products(dList);
    } else if (event.target.textContent === "Todos") {
      return MyProducts.products(response);
    }
  }

  static generateBtn() {
    const all = document.querySelector(".allProducts");
    all.addEventListener("click", MyProducts.sectionFilter);
    const bakery = document.querySelector(".bread");
    bakery.addEventListener("click", MyProducts.sectionFilter);
    const fruits = document.querySelector(".fruits");
    fruits.addEventListener("click", MyProducts.sectionFilter);
    const drinks = document.querySelector(".drink");
    drinks.addEventListener("click", MyProducts.sectionFilter);

    const searchField = document.querySelector(".searchProduct");
    searchField.addEventListener("keypress", MyProducts.wordSearch);
  }

  static wordSearch() {
    const searchField = document.querySelector(".searchProduct");

    let tex = searchField.value;
    let text = tex.toLowerCase();

    const searchFilter = response.filter((product) => {
      let search = product.nome.toLowerCase();

      return search.includes(text);
    });
    MyProducts.products(searchFilter);
  }
}

export default MyProducts;

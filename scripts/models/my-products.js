import ProductsController from "/scripts/controllers/products-controller.js";

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
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const divn = document.createElement("div");
      const p = document.createElement("p");
      const pd = document.createElement("p");
      const divB = document.createElement("div");
      const buttonE = document.createElement("img");
      const buttonD = document.createElement("img");
      li.classList.add("product");
      img.setAttribute("class", "photo");
      divn.setAttribute("class", "nomes");
      divB.setAttribute("id", "actions");
      buttonE.setAttribute("id", "btnEdit");
      buttonD.setAttribute("id", "btnDelete");
      p.setAttribute("class", "category");
      pd.setAttribute("class", "detail");

      buttonE.addEventListener("click", (event) => {
        event.preventDefault();

        const editModal = document.querySelector(
          ".editProductBackgroundModalStyle"
        );
        editModal.style.display = "block";
      });

      img.src = product.imagem;
      h3.innerText = product.nome;
      divn.appendChild(img);
      divn.appendChild(h3);
      p.innerText = product.categoria;
      pd.innerText = product.descricao;
      buttonE.src = "/images/EDIT.svg";
      buttonD.src = "/images/trash.svg";

      li.appendChild(divn);
      li.appendChild(p);
      li.appendChild(pd);
      divB.appendChild(buttonE);
      divB.appendChild(buttonD);

      li.appendChild(divB);

      ul.appendChild(li);
    });
  }

  static sectionFilter(event) {
    const btnAtivo = document.getElementById("botao-ativo");
    btnAtivo.id = "";

    event.target.id = "botao-ativo";
    console.log("test");
    if (event.target.classList.value === "Bakery") {
      const bList = response.filter((product) => {
        let search = product.categoria;
        return search === "Panificadora";
      });
      MyProducts.products(bList);
    } else if (event.target.classList.value === "Fruits") {
      const fList = response.filter((product) => {
        let search = product.categoria;
        return search === "Frutas";
      });
      MyProducts.products(fList);
    } else if (event.target.classList.value === "Drinks") {
      const dList = response.filter((product) => {
        let search = product.categoria;
        return search === "Bebidas";
      });
      MyProducts.products(dList);
    } else if (event.target.classList.value === "All") {
      return MyProducts.products(response);
    }
  }

  static generateBtn() {
    const all = document.querySelector(".All");
    all.addEventListener("click", MyProducts.sectionFilter);
    const bakery = document.querySelector(".Bakery");
    bakery.addEventListener("click", MyProducts.sectionFilter);
    const fruits = document.querySelector(".Fruits");
    fruits.addEventListener("click", MyProducts.sectionFilter);
    const drinks = document.querySelector(".Drinks");
    drinks.addEventListener("click", MyProducts.sectionFilter);

    const searchField = document.querySelector("#Search");
    searchField.addEventListener("keyup", MyProducts.wordSearch);
  }

  static wordSearch() {
    const searchField = document.querySelector("#Search");

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

import ProductsController from "/scripts/controllers/products-controller.js";

class createProduct {
  static create() {
    const nameField = document.getElementById("name");

    const descField = document.getElementById("description");

    const valor = document.getElementById("pricess");

    const link = document.getElementById("link");

    const select = document.getElementById("select");
    return ProductsController.createProduct({
      nome: nameField.value,
      preco: valor.value,
      categoria: select.value,
      imagem: link.value,
      descricao: descField.value,
    });
  }
}

const btnCadas = document.getElementById("accept");
btnCadas.addEventListener("click", clickHandler);

function clickHandler() {
  if (btnCadas.innerHTML === "Adicionar produto") {
    createProduct.create();
  }
}

const buttonAdd = document.getElementById("modalAddProduct");
const modalAdd = document.getElementById("addModal");
const xAdd = document.getElementById("closeAddModal");
const title = document.getElementsByClassName("registerProduct");
const btnCriar = document.getElementById("accept");

buttonAdd.addEventListener("click", function () {
  title[0].innerHTML = "Criar produto";
  btnCriar.innerHTML = "Adicionar produto";

  const nameField = document.getElementById("name");
  nameField.value = "";
  const descField = document.getElementById("description");
  descField.value = "";
  const valor = document.getElementById("pricess");
  valor.value = "";
  const link = document.getElementById("link");
  link.value = "";
  const select = document.getElementById("select");

  modalAdd.style.display = "block";
});

xAdd.addEventListener("click", () => {
  modalAdd.style.display = "none";
});

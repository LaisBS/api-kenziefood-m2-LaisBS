import ProductsController from "/scripts/controllers/products-controller.js";

export class EditProduct {
  static Edit(event, product) {
    const modalAdd = document.getElementById("addModal");
    const title = document.getElementsByClassName("registerProduct");
    const btnEditar = document.getElementById("accept");
    title[0].innerHTML = "Editar produto";
    btnEditar.innerHTML = "Editar";
    modalAdd.style.display = "block";

    const clickedElement = event.target.closest("li");

    const nome_do_produto = document.getElementById("name");
    const descrição_do_produto = document.getElementById("description");
    const preco_do_produto = document.getElementById("pricess");
    const foto_do_produto = document.getElementById("link");
    const id = clickedElement.getElementsByClassName("item");
    console.log(id);
    const select = document.getElementById("select");

    select.value = product.categoria;
    nome_do_produto.value = product.nome;
    descrição_do_produto.value = product.descricao;
    preco_do_produto.value = product.preco;
    foto_do_produto.value = product.imagem;

    btnEditar.addEventListener("click", () => {
      if (btnEditar.innerHTML === "Editar") {
        return ProductsController.changeProduct(
          {
            nome: nome_do_produto.value,
            preco: preco_do_produto.value,
            categoria: select.value,
            imagem: foto_do_produto.value,
            descricao: descrição_do_produto.value,
          },
          product.id
        );
      }
    });

    //
  }
}

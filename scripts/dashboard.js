import ProductsController from "./controllers/products-controller.js";
import MyProducts from "./models/my-products.js";
MyProducts.renderFirst()
MyProducts.generateBtn()

  /* --- modal editar produto --- */
const buttonEdit = document.querySelector("#btnEdit")
const modalEdit = document.getElementById("editModal")
const xEdit = document.getElementById("closeEditModal")

buttonEdit.addEventListener("click", () => {
    modalEdit.style.display = "block"
})
xEdit.addEventListener("click", () => {
    modalEdit.style.display = "none"
})

/* --- modal delete produto --- */
const buttonDelete = document.getElementById("btnDelete")
const modalDelete = document.getElementById("deleteModal")
const xDelete = document.getElementById("closeDeleteModal")


buttonDelete.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
xDelete.addEventListener("click", () => {
  modalDelete.style.display = "none"
})





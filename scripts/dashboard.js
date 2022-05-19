
  /* --- modal editar produto --- */
const buttonEdit = document.getElementById("modalEditProduct")
const modalEdit = document.getElementById("editModal")
const xEdit = document.getElementById("closeEditModal")
const buttonEdit1 = document.getElementById("modalEditProduct1")
const buttonEdit2 = document.getElementById("modalEditProduct2")
const buttonEdit3 = document.getElementById("modalEditProduct3")
const buttonEdit4 = document.getElementById("modalEditProduct4")

/*buttonEdit.addEventListener("click", () => {
    modalEdit.style.display = "block"
})
buttonEdit1.addEventListener("click", () => {
  modalEdit.style.display = "block"
})
buttonEdit2.addEventListener("click", () => {
  modalEdit.style.display = "block"
})
buttonEdit3.addEventListener("click", () => {
  modalEdit.style.display = "block"
})
buttonEdit4.addEventListener("click", () => {
  modalEdit.style.display = "block"
})
xEdit.addEventListener("click", () => {
    modalEdit.style.display = "none"
})
*/



/* ---- modal adicionar produto --- */
const buttonAdd = document.getElementById("modalAddProduct")
const modalAdd = document.getElementById("addModal")
const xAdd = document.getElementById("closeAddModal")

buttonAdd.addEventListener("click", () => {
  modalAdd.style.display = "block"
})

xAdd.addEventListener("click", () => {
  modalAdd.style.display = "none"
})
/*
/* --- modal delete produto ---
const buttonDelete = document.getElementById("modalDeleteProduct")
const modalDelete = document.getElementById("deleteModal")
const xDelete = document.getElementById("closeDeleteModal")
const buttonDelete1 = document.getElementById("modalDeleteProduct1")
const buttonDelete2 = document.getElementById("modalDeleteProduct2")
const buttonDelete3 = document.getElementById("modalDeleteProduct3")
const buttonDelete4 = document.getElementById("modalDeleteProduct4")

buttonDelete.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
buttonDelete1.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
buttonDelete2.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
buttonDelete3.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
buttonDelete4.addEventListener("click", () => {
  modalDelete.style.display = "block"
})
xDelete.addEventListener("click", () => {
  modalDelete.style.display = "none"
})

*/
import MyProducts from "./controllers/products-controller.js"
MyProducts.renderFirst()
MyProducts.generateBtn()

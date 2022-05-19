import ProductsController from "/scripts/controllers/products-controller.js"



class createProduct{
    
    static create(){
       
        let nameField=document.getElementById("name")
        console.log(nameField.value)
        let descField=document.getElementById("description")
        console.log(descField.value)

        let category1=document.getElementById("1")

        let category2=document.getElementById("2")
    
        let category3=document.getElementById("3")

        let valor=document.getElementById("pricess")
        
        let link=document.getElementById("link")
        

        
        return ProductsController.createProduct(
            {
                nome: nameField.value,
                preco: valor.value,
                categoria: category1.innerText,
                imagem: link.value,
                descricao : descField.value
            }
            
        )
     }
}
const btnCadas=document.getElementById("accept")
btnCadas.addEventListener("click",createProduct.create)

const buttonAdd = document.getElementById("modalAddProduct")
const modalAdd = document.getElementById("addModal")
const xAdd = document.getElementById("closeAddModal")
buttonAdd.addEventListener("click", function(){
    modalAdd.style.display = "block"
    let category1=document.getElementById("1")
        category1.addEventListener("click", function(){
            category1.style.backgroundColor= "#FF2253"
            category1.style.color="#DEE2E6"
        }
        )
        let category2=document.getElementById("2")
        category2.addEventListener("click", function(){
            category2.style.backgroundColor= "#FF2253"
            category2.style.color="#DEE2E6"
        }
        )
        let category3=document.getElementById("3")
        category3.addEventListener("click", function(){
        category3.style.backgroundColor= "#FF2253"
        category3.style.color="#DEE2E6"
    }
    )
})  




xAdd.addEventListener("click", () => {
  modalAdd.style.display = "none"
  
})


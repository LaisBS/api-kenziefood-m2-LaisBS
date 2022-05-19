import ProductsController from "/scripts/controllers/products-controller.js"

let response=await ProductsController.getPrivateProducts()

console.log(response)

import myproducts from"/scripts/dashboard.js"

// let result=myproducts.products(response)
// console.log(result)




class filter{
 static sectionFilter(event){
    
    if(event.target.textContent==="Panificadora"){
    const bList=response.filter((product)=>{
        let search = product.categoria
        return search==="Panificadora"   
    })
    myproducts.products(bList)}
    else if(event.target.textContent==="Frutas"){
        const fList=response.filter((product)=>{
            let search = product.categoria
            return search==="Frutas"
    })
    myproducts.products(fList)}
    else if(event.target.textContent==="Bebidas"){
        const dList=response.filter((product)=>{
            let search = product.categoria
            return search==="Bebidas"
    })
    myproducts.products(dList)}
    else if(event.target.textContent==="Todos"){
            return myproducts.products(response)
    }
    }
}
let all=document.querySelector(".allProducts")
all.addEventListener("click",filter.sectionFilter)
let bakery=document.querySelector(".bread")
bakery.addEventListener("click",filter.sectionFilter)
let fruits=document.querySelector(".fruits")
fruits.addEventListener("click",filter.sectionFilter)
let drinks=document.querySelector(".drink")
drinks.addEventListener("click",filter.sectionFilter)

class wordFilter{
static wordSearch(){
    let tex=searchField.value;
    let text=tex.toLowerCase();

    const searchFilter =response.filter((product)=>{
        let search= product.nome.toLowerCase();

        return search.includes(text)
    })
    myproducts.products(searchFilter)
    
}
}

const searchField=document.querySelector(".searchProduct")
searchField.addEventListener("keypress",wordFilter.wordSearch)



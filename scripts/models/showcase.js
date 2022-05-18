import ProductsController from "/scripts/controllers/products-controller.js"


const response=await ProductsController.getPublicProducts()


const ul=document.getElementById("ul")
const cartItens=document.getElementById("cartItens")



function list(response){
   
    ul.innerHTML=" ";
    response.forEach(product => {
            const li=document.createElement("li")
            li.setAttribute("id",product.id)
            li.classList.add("preview-product")
            const img=document.createElement("img")
            const h3=document.createElement("h3")
            const p=document.createElement("p")
            const span=document.createElement("span")
            const div=document.createElement("div")
            const p_price=document.createElement("p")
            const button=document.createElement("button")
            const cartIcon=document.createElement("img")

            img.src=product.imagem
            img.setAttribute("class","photo")
            h3.innerText=product.nome
            p.innerText=product.descricao
            span.innerText=product.categoria
            p_price.innerText= new Intl.NumberFormat([],{style:'currency',currency:'BRL'}).format(product.preco)
            cartIcon.src="images/cart_white.svg"
            div.setAttribute("class","cart_price")
            div.appendChild(p_price)
            div.appendChild(button)
            button.setAttribute("class","purchaseButton")
            div.appendChild(cartIcon)
            cartIcon.setAttribute("class","cartIcon")
            cartIcon.addEventListener("click", handleClickCard)
            li.appendChild(img)
            li.appendChild(h3)
            li.appendChild(p)
            li.appendChild(span)
            li.appendChild(div)
            ul.appendChild(li)

        });
    }

list(response)


const bag=document.querySelector("#bag")
const small=document.querySelector("#small")
function handleClickCard(event){
    bag.classList.add("hidden")
    small.classList.add("hidden")
    let list=event.target.closest("li")
    for (let i=0;i<response.length;i++){
        if(response[i].id===list.id){
            
            createCarItens(response[i].imagem,
                            response[i].nome,
                            response[i].categoria,
                            response[i].preco)
        }
    }  
}
function createCarItens(imagem,nome,categoria,preco){
        let cartItem=document.createElement("li")
        cartItem.setAttribute("class","carItem")
        cartItem.innerHTML=`
        <img class=carPhoto src=${imagem}>
        <div class="info">
        <h3>${nome}</h3>
        <caption class="category">${categoria}</caption>
        <p class="price"> R$ ${preco}</p>
        <div>
        <img class="trash"src="images/trash.png"> 
    </div>`;
    cartItens.appendChild(cartItem)

    let plus=document.getElementById("plus")
    let count=plus.textContent
    let result=Number(count)+Number(preco)
    plus.textContent=result

    let qtd=document.getElementById("qtd")
    let valorQtd=qtd.textContent
    qtd.textContent=Number(valorQtd)+1

    }
    const cart=document.getElementById("boxCart")
    cart.addEventListener("click",deleteItem)
    function deleteItem(event){
    const clickedElement=event.target.closest("li")
    if(clickedElement){
        let priceItem=clickedElement.querySelector(".price").textContent.trim()
        let newPriceItem=priceItem.substr(2)
        let plus=document.getElementById("plus")
        let count=plus.textContent
        plus.textContent=Number(count)-Number(newPriceItem)
       
        let qtd=document.getElementById("qtd")
        let valorQtd=qtd.textContent
        qtd.textContent=Number(valorQtd)-1

        clickedElement.remove()
    }
    let cartChildren=cartItens.children.length
    if(cartChildren===0){
        bag.classList.remove("hidden")
        small.classList.remove("hidden")
    }
    

}

let all=document.getElementById("All")
all.addEventListener("click",sectionFilter)
let bakery=document.getElementById("bakery")
bakery.addEventListener("click",sectionFilter)
let fruits=document.getElementById("Fruits")
fruits.addEventListener("click",sectionFilter)
let drinks=document.getElementById("Drinks")
drinks.addEventListener("click",sectionFilter)

function sectionFilter(event){
    
    if(event.target.textContent==="Panificadora"){
    const bList=response.filter((product)=>{
        let search = product.categoria
        return search==="Panificadora"   
    })
    list(bList)}
    else if(event.target.textContent==="Frutas"){
        const fList=response.filter((product)=>{
            let search = product.categoria
            return search==="Frutas"
    })
    list(fList)}
    else if(event.target.textContent==="Bebidas"){
        const dList=response.filter((product)=>{
            let search = product.categoria
            return search==="Bebidas"
    })
    list(dList)}
    else if(event.target.textContent==="Todos"){
            return list(response)
    }
    }

    
const searchField=document.getElementById("Search")
searchField.addEventListener("keypress",wordSearch)

function wordSearch(){
    let tex=searchField.value;
    let text=tex.toLowerCase();

    const searchFilter =response.filter((product)=>{
        let search= product.nome.toLowerCase();

        return search.includes(text)
    })
list(searchFilter)
    
}




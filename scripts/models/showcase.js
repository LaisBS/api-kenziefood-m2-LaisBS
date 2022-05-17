import ProductsController from "/scripts/controllers/products-controller.js"

const response=await ProductsController.getPublicProducts()
console.log(response)

const ul=document.getElementById("ul")
class createList{
    static list(){
        response.forEach(product => {
            const li=document.createElement("li")
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

            li.appendChild(img)
            li.appendChild(h3)
            li.appendChild(p)
            li.appendChild(span)
            li.appendChild(div)
            
            ul.appendChild(li)

        });
    }
}
createList.list()
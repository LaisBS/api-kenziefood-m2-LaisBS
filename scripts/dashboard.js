localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1N2ZlMmM0LThhZDUtNGI3Zi05YTJhLTA5Zjg5MDc3Zjk3MiIsImlhdCI6MTY1Mjg5OTg4NywiZXhwIjoxNjUzNzYzODg3LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.zk-hMT3jtH7w9BzIEKoZqZEoPkjK_RluYtwcEMZTvck")

import ProductsController from "/scripts/controllers/products-controller.js"

let response=await ProductsController.getPrivateProducts()

console.log(response)

class myproducts{
    static products(response){
        const ul=document.getElementById("ul")

        response.forEach(product => {
            const li =document.createElement("li");
            const div =document.createElement("div");
            div.classList.add("product")
            const img =document.createElement("img");
            img.setAttribute("class","photo")
            const h3 =document.createElement("h3");
            const p=document.createElement("p")
            const pd=document.createElement("p")
            const divB =document.createElement("div");
            divB.setAttribute("id","actions")
            const buttonE=document.createElement("img");
            buttonE.setAttribute("id","btnEdit");
            const buttonD=document.createElement("img");
            buttonD.setAttribute("id","btnDelete")

            img.src=product.imagem
            h3.innerText=product.nome
            p.innerText=product.categoria
            pd.innerText=product.descricao
            buttonE.src="/images/EDIT.svg"
            buttonD.src="/images/trash.svg"

            div.appendChild(img)
            div.appendChild(h3)
            div.appendChild(p)
            div.appendChild(pd)
            divB.appendChild(buttonE)
            divB.appendChild(buttonD)

            div.appendChild(divB)
            li.appendChild(div)

            ul.appendChild(li)
        });
    }
}
myproducts.products(response)
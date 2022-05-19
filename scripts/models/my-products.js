import ProductsController from "/scripts/controllers/products-controller.js"
localStorage.setItem("Token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNWNhYTZhLWY4NmMtNGU5OS1iZmJmLTVjNTI3MDZmM2U4NiIsImlhdCI6MTY1Mjk2NTM1OCwiZXhwIjoxNjUzODI5MzU4LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.bnCtniDyS8LF2nBXY7QVC3mhO8i-pXMQhrZb3s2feSM")

const response=await ProductsController.getPrivateProducts()

class MyProducts{
    static renderFirst() {
      MyProducts.products(response);
    }

    static products(response){

        const ul=document.getElementById("ul")
        ul.innerHTML=""
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

    static sectionFilter(event){

      if(event.target.textContent==="Panificadora"){
      const bList=response.filter((product)=>{
          let search = product.categoria
          return search==="Panificadora"
      })
      MyProducts.products(bList)}
      else if(event.target.textContent==="Frutas"){
          const fList=response.filter((product)=>{
              let search = product.categoria
              return search==="Frutas"
      })
      MyProducts.products(fList)}
      else if(event.target.textContent==="Bebidas"){
          const dList=response.filter((product)=>{
              let search = product.categoria
              return search==="Bebidas"
      })
      MyProducts.products(dList)}
      else if(event.target.textContent==="Todos"){
              return MyProducts.products(response)
      }
      }

    static generateBtn() {
      const all=document.querySelector(".allProducts")
      all.addEventListener("click",MyProducts.sectionFilter)
      const bakery=document.querySelector(".bread")
      bakery.addEventListener("click",MyProducts.sectionFilter)
      const fruits=document.querySelector(".fruits")
      fruits.addEventListener("click",MyProducts.sectionFilter)
      const drinks=document.querySelector(".drink")
      drinks.addEventListener("click",MyProducts.sectionFilter)

      const searchField=document.querySelector(".searchProduct")
      searchField.addEventListener("keypress",MyProducts.wordSearch)
    }

    static wordSearch() {
      const searchField=document.querySelector(".searchProduct")

      let tex=searchField.value;
      let text=tex.toLowerCase();

      const searchFilter =response.filter((product)=>{
          let search= product.nome.toLowerCase();

          return search.includes(text)
      })
      MyProducts.products(searchFilter)
  }
}

export default MyProducts

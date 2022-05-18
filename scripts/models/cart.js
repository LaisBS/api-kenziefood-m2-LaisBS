class Cart {
  static createCarItens(imagem,nome,categoria,preco) {
    const cartItens=document.getElementById("cartItens");

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

  static deleteItem(event){
    const clickedElement=event.target.closest("li");

    if(clickedElement) {
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

  static deleteBtn() {
    const cart=document.getElementById("boxCart");
    cart.addEventListener("click", Cart.deleteItem);
  }
}

export default Cart;
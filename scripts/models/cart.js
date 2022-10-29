class Cart {
  static createCarItens(imagem, nome, categoria, preco) {
    const cartItens = document.getElementById("cartItens");
    const cartItem = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const caption = document.createElement("caption");
    const p = document.createElement("p");
    const trash = document.createElement("img");
    cartItens.style.display = "flex";

    cartItem.setAttribute("class", "carItem");
    img.classList.add("carPhoto");
    div.classList.add("info");
    caption.classList.add("category");
    p.classList.add("price");
    trash.classList.add("trash");

    img.src = imagem;
    h3.innerText = nome;
    caption.innerText = categoria;
    p.innerText = `R$ ${preco}`;
    trash.src = "images/trash.svg";
    trash.addEventListener("click", (event) => {
      Cart.deleteItem(event);
    });

    const priceTotal = document.getElementById("price-total");
    let count = priceTotal.textContent;
    let result = Number(count) + Number(preco);
    priceTotal.textContent = result;

    let qtd = document.getElementById("qtd");
    let valorQtd = qtd.textContent;
    qtd.textContent = Number(valorQtd) + 1;

    div.appendChild(h3);
    div.appendChild(caption);
    div.appendChild(p);

    cartItem.appendChild(img);
    cartItem.appendChild(div);
    cartItem.appendChild(trash);

    cartItens.appendChild(cartItem);
  }

  static deleteItem(event) {
    const clickedElement = event.target.closest("li");
    const cartItens = document.getElementById("cartItens");

    if (clickedElement) {
      let priceItem = clickedElement.querySelector(".price").textContent.trim();
      let newPriceItem = priceItem.substr(2);
      const plus = document.getElementById("price-total");
      let count = plus.textContent;
      plus.textContent = Number(count) - Number(newPriceItem);

      let qtd = document.getElementById("qtd");
      let valorQtd = qtd.textContent;
      qtd.textContent = Number(valorQtd) - 1;

      clickedElement.remove();
    }
    let cartChildren = cartItens.children.length;
    if (cartChildren === 0) {
      bag.classList.remove("hidden");
      small.classList.remove("hidden");
      cartItens.setAttribute("style", "height: 0");
    }
  }
}

export default Cart;

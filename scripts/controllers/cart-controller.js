class CartController {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com/cart/";
  static token = localStorage.getItem("Token");

  static async getCart() {
    return await fetch(this.BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  static async addToCart(productId) {
    return await fetch(this.BASE_URL+"add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify({product_id: productId})
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  static async removeFromCart(productId) {
    return await fetch(this.BASE_URL+`remove/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      }
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

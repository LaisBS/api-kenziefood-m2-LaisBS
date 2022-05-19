class ProductsController {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com/my/products/";
  static token = localStorage.getItem("Token");

  static async getPublicProducts() {
    return await fetch("https://api-kenzie-food.herokuapp.com/products/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  static async getPrivateProducts() {
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

  static async createProduct(productData) {
    return await fetch(this.BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(productData)
    })
    .then((response) => {
      window.location = '../pages/dashboard.html'
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
    
  }

  static async changeProduct(productData,id) {
    return await fetch(`${this.BASE_URL}+"products"${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      },
      body: JSON.stringify(productData)
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  static async removeProduct(productId) {
    return await fetch(this.BASE_URL+productId, {
      method: "POST",
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

export default ProductsController

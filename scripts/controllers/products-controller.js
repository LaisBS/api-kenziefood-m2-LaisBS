class ProductsController {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com/my/products/";
  static token = localStorage.getItem("Token");

  static async getPublicProducts() {
    return await fetch("https://api-kenzie-food.herokuapp.com/products/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
        Authorization: `Bearer ${this.token}`,
      },
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
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        Toastify({
          text: "Produto criado com sucesso!",
          duration: 3000,
          destination: "../pages/dashboard.html",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        setTimeout(() => {
          document.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static async changeProduct(productData, id) {
    console.log(productData, id);
    return await fetch(`${this.BASE_URL}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        Toastify({
          text: "Produto editado com sucesso!",
          duration: 3000,
          destination: "../pages/dashboard.html",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        setTimeout(() => {
          document.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static async removeProduct(productId) {
    return await fetch(this.BASE_URL + productId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    })
      .then((response) => {
        Toastify({
          text: "Produto deletado com sucesso!",
          duration: 3000,
          destination: "../pages/dashboard.html",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        setTimeout(() => {
          document.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default ProductsController;

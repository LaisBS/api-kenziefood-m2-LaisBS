class ProductsController {
    static BASE_URL = "https://api-kenzie-food.herokuapp.com/my/products/";
    static token = localStorage.getItem("Token");
  
    static async getPublicProducts() {
      let data=await fetch("https://api-kenzie-food.herokuapp.com/products/", {
        method: "GET",
        // method: {
        //   "Content-Type": "application/json"
        // }
      })
      .then((response) => {   
        return response.json();
        
      })
      .catch((error) => {
        console.error(error);
      });
      return data
    }
  
    static async getPrivateProducts() {
      return await fetch(this.BASE_URL, {
        method: "GET",
        method: {
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
      return await fetch(this.BASE_URL+"products", {
        method: "POST",
        method: {
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
  
    static async changeProduct(productData) {
      return await fetch(this.BASE_URL+"products", {
        method: "PATCH",
        method: {
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
        method: {
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
class Product {
  //   title = "DEFAULT";
  //   imagURL;
  //   description;
  //   price;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageURL = image;
    this.price = price;
    this.description = desc;
  }
}

class ShoppingCart {
  items = [];

  get totalAmount(){
    const sum = this.items.reduce((prev, curItem) => {
        return prev + curItem.price;
    }, 0);
    return sum;
  }

  addItem(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$ ${this.totalAmount}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
        <h2>Total: \$ ${0}</h2>
        <button>Order Now</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageURL}" alt="${this.product.title}">
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$ ${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
          </div>
        </div>
        `;
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Pillow",
      "https://www.nilkamalsleep.com/cdn/shop/products/2_0a1606c6-eb22-43c7-b8ca-0a58eff0e995_650x.jpg?v=1667222507",
      19.99,
      "A soft pillow"
    ),
    new Product(
      "Carpet",
      "https://rugroom.in/cdn/shop/files/green6.jpg?v=1724521746&width=720",
      59.99,
      "A carpet"
    ),
  ];

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const prodList = new ProductList();
    const prodListEl = prodList.render();
    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addItem(product);
  }
}

App.init();

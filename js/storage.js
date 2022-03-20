class Storage {
  static saveProduct(obj) {
    localStorage.setItem("productos", JSON.stringify(obj));
  }
  static saveCart(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  static getProductos(id) {
    const producto = JSON.parse(localStorage.getItem("productos"));
    return producto.find((product) => product.id === parseFloat(id, 10));
  }
  static getCart() {
    return localStorage.getItem("carrito")
      ? JSON.parse(localStorage.getItem("carrito"))
      : [];
  }
}

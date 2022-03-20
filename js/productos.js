class Productos {
  async getProductos() {
    try {
      const result = await fetch("productos.json");
      const data = await result.json();
      const productos = data.items;
      return productos;
    } catch (err) {
      console.log(err);
    }
  }
}

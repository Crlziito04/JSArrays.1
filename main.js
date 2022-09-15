//Modelo para la primera lista de Productos
class productos1 {
  constructor(marca, pulgadas, resolucion, smart, precio) {
    this.marca = marca;
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.smart = smart;
    this.precio = precio;
  }
}
//Se crean 3 objetos de la primera lista
const tv = [
  new productos1("SAMSUNG", 49, "8K", true, 26000),
  new productos1("LG", 43, "4K", true, 190000),
  new productos1("TLC", 55, "1080", false, 130000),
  new productos1("SONY", 50, "1080", true, 210000),
];
//Modelo para la segunda lista de Productos
class productos2 {
  constructor(nombre, marca, almacenamiento, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.almacenamiento = almacenamiento;
    this.precio = precio;
  }
}
//Se crean 3 objetos de la segunda lista
const consola = [
  new productos2("PS5", "SONY", "1TB", 315000),
  new productos2("SWITCH", "NINTENDO", "32GB", 125000),
  new productos2("SERIES", "XBOX", "1TB", 190000),
];
//Se concatenan ambas listas
const listaProductos = tv.concat(consola);
//Se muestra una lista de productos con las marcas que se trabaja.
const marcas = [];
for (const producto of listaProductos) {
  marcas.push(producto.marca);
}

console.log("Trabajamos con las siguientes marcas:\n" + marcas.join("\n"));
//Seleccionar producto por cliente
let n = "";
do {
  n = Number(prompt("Ingrese numero de lista a seleccionar"));
} while (n !== 2 && n !== 1);
let auxiliar = false;
do {
  //Seleccionar tv a comprar
  if (n === 1) {
    alert("Seleccionar TV");
    let productoIngresado = "";
    productoIngresado = prompt("Ingrese marca tv").toUpperCase();
    for (let producto of tv) {
      if (producto.marca === productoIngresado) {
        auxiliar = true;
        alert(
          "Ha seleccionado la marca " +
            productoIngresado +
            " Debe cancelar " +
            producto.precio
        );
      }
    }
    if (!auxiliar) {
      alert("Ha seleccionado una marca desconocida para nosotros");
    }
    //seleccionar consola a comprar
  } else if (n === 2) {
    alert("Seleccionar consola");
    let consolaIngresada = "";
    consolaIngresada = prompt("Ingrese nombre de consola").toUpperCase();
    for (let producto of consola) {
      if (producto.nombre === consolaIngresada) {
        auxiliar = true;
        alert(
          "Ha seleccionado la consola " +
            consolaIngresada +
            " Debe cancelar " +
            producto.precio
        );
      }
    }
    if (!auxiliar) {
      alert("Ha seleccionado una marca desconocida para nosotros");
    }
  }
} while (!auxiliar);

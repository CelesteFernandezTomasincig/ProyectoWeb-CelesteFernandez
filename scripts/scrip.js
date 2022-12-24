// carrito

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const baseLikid = new Producto(1, "base lik-id", 3000, "../imagenes/baseLiquida.jpeg");
const baseCompact = new Producto(2, "base compact", 4000, "../imagenes/basePolvo.jpeg");
const ruborRose = new Producto(3, "rubor rose", 1500, "../imagenes/rubor.jpeg");
const iluminadorHigh = new Producto(4, "iluminador high", 2300, "../imagenes/iluminador.jpeg");
const pigmentoRosegold = new Producto(5, "pigmento rosegold", 1000, "../imagenes/pigmento.jpeg");
const mascaraPestañas = new Producto(6, "mascara de pestañas", 900, "../imagenes/mascaraPestaña.jpeg");
const paletaSombras = new Producto(7, "paleta de sombras", 5000, "../imagenes/paletaSombra.jpeg");
const labialMinirosso = new Producto(8, "labial minirosso", 700, "../imagenes/labialMR.jpeg");
const labialLivingRude = new Producto(9, "labial living rude", 750, "../imagenes/labialLR.jpeg");
const kit = new Producto(10, "kit", 25000, "../imagenes/kit.jpeg");

//Creamos un Array con todo nuestro catálogo de productos: 

const productos = [baseLikid, baseCompact, ruborRose, iluminadorHigh, pigmentoRosegold, mascaraPestañas, paletaSombras, labialMinirosso, labialLivingRude, kit];

//Creamos el Array del Carrito. 

let carrito = []; 

/** CARGAR CARRITO DESDE EL LOCALSTORAGE **/
//Si hay algo en el localStorage, lo cargamos en el carrito. 
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Modificamos el DOM mostrando los productos: 

const contenedorProductos = document.getElementById("contenedorProductos");

//Creamos una función para mostrar los productos: 

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <button class="btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

//Creamos la función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    //Trabajamos con el localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
}

//Mostrar el carrito de compras: 

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

//Función para mostrar el carrillo: 

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
                    </div>
                </div>
                        `
        contenedorCarrito.appendChild(card);

        //Eliminar productos del carrito: 
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
}

//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //Trabajamos con el localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vaciamos todo el carrito de compras. 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

//Función que elimina todo del carrito: 

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //LocalStorage:
    localStorage.clear();
}

//Mostramos mensaje con el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        //+= es igual a poner totalCompra = totalCompra + producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
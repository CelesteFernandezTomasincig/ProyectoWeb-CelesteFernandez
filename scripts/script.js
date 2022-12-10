//Crear usuarios  
const usuario = {}
const arrayUsuarios = []


let decision = parseInt(prompt("Quiere añadir un usuario? 1-Si 2-No"))
while (decision != 1 && decision != 2) {
decision = parseInt(prompt("Ingrese un numero existente. 1-Si 2-No"))
}
while (decision == 1) {

usuario.nombre = prompt("Ingrese su nombre")
usuario.apellido = prompt("Ingrese su apellido")
usuario.edad = parseInt(prompt("Ingrese su edad"))
usuario.email = parseInt(prompt("Ingrese su e-mail"))
while (typeof (usuario.edad) !== 'number' || usuario.edad <= 0) {
    usuario.edad = parseInt(prompt("Ingrese un numero mayor a 0 para su edad"))
}
usuario.ci = parseInt(prompt("Ingrese su C.P"))
while (typeof (usuario.ci) !== 'number' || usuario.ci < 10000000 || usuario.ci > 99999999) {
    usuario.ci = parseInt(prompt("Ingrese un numero con 8 digitos para su dni"))
}

arrayUsuarios.push(usuario)

decision = parseInt(prompt("Quiere seguir añadiendo usuarios? 1-Si 2-No"))
while (decision != 1 && decision != 2) {
    decision = parseInt(prompt("Ingrese un numero existente. 1-Si 2-No"))
}
}

alert("Gracias! Continuemos...")

let unCliente = {
    tipoDocumento: "DNI",
    numeroDocumento: usuario.ci,
    apellido: usuario.apellido,
    nombre: usuario.nombre,
    edad: usuario.edad,
    email: usuario.email
  }
  
  unCliente.nombre = usuario.nombre;
  unCliente.apellido = usuario.apellido;
  unCliente.edad = usuario.edad;
  unCliente.email= usuario.email;
  console.log("-->Estos son los datos del cliente", unCliente);

// Variables 
let facturaTotal = 0
let productoSeleccionado =  parseInt(prompt('Ingresa el producto a contratar: 1.Base de maquillaje - 2.Labial - 3.Sombras - 4.Polvos'));
let lista = ["Base de maquillaje", "Labial", "Sombras", "Polvos"]; 
console.log("-->Veremos el contenido de la lista de productos <--", lista);
let continuarComprando = true
let resolucion
let productos = []
let carrito = []


// Funciones 
const producto1 = {
    nombre: 'Base de maquillaje',
    precio: 2000,
}
productos.push(producto1)

const producto2 = {
    nombre: 'Labial',
    precio: 1500,
}
productos.push(producto2)

const producto3 = {
    nombre: 'Sombras',
    precio: 3000,
}
productos.push(producto3)

const producto4 = {
    nombre: 'Polvos',
    precio: 1000,
}
productos.push(producto4)

console.log(productos)

while (continuarComprando === true) {
    if (productoSeleccionado === 1) {
    carrito.push(productos[0])
    } else if (productoSeleccionado === 2) {
    carrito.push(productos[1])
    } else if (productoSeleccionado === 3) {
    carrito.push(productos[2])
    } else if (productoSeleccionado === 4) {
    carrito.push(productos[3])
    } else {
    productoSeleccionado = parseInt(prompt('Ingresa el producto a comprar: 1.Base de maquillaje - 2.Labial - 3.Sombras - 4.Polvos'))
    continue
}

resolucion = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (resolucion === 1) {
    productoSeleccionado = parseInt(
    prompt('Ingresa el numero del producto que quieres comprar: 1.Base de maquillaje - 2.Labial - 3.Sombras - 4.Polvos'))
    } else if (resolucion === 2) {
    continuarComprando = false
}
}

console.log(carrito)

for (let i = 0; i < carrito.length; i++) {
    facturaTotal = facturaTotal + carrito[i].precio
}

for (const prod of carrito) {
    facturaTotal = facturaTotal + prod.precio
}

alert('El valor total sin descuento ni impuestos es: ' + (Math.ceil(facturaTotal)))

function PrecioConDescuento(valor) {
let descuento = 0
    if (valor <= 1400) {
    descuento = 7
    } else if (valor > 1400 && valor <= 1600) {
    descuento = 13
    } else if (valor > 1600 && valor <= 2500) {
    descuento = 21
    } else {
    descuento = 26
}
  let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
return valor
}
let valorDescuento = PrecioConDescuento(facturaTotal)
alert('El total con descuento, sin impuestos es: ' + ( Math.ceil(valorDescuento)))

function PrecioConImpuesto(valor) {
  const impuestos = valor * (21 / 100)
    return valor + impuestos
}
let PrecioFinalConRecargo = PrecioConImpuesto(valorDescuento)
alert('El valor final con impuestos es: ' + ( Math.ceil(PrecioFinalConRecargo)))

let decisionFinal = prompt('¿Deseas recibir esta cotización por e-mail? 1. Sí - 2. No')

while ((decisionFinal !== '1') && (decisionFinal !== '2')) {
    alert('No has ingresado una opción correcta. Por favor ingresa 1 o 2 según sea tu decisión');
decisionFinal = prompt('¿Deseas recibir esta cotización por mail? 1. Sí - 2. No')
} if (decisionFinal === '1') {
    ingresoCorreo = prompt('Por favor, ingresa tu dirección de correo electrónico')
    alert('¡Muchas gracias por cotizar conmigo! Tu cotización será enviada a ' + ingresoCorreo)
} else {
alert('Muchas gracias por comprar en VALENTINO ');
} alert('¡Nos vemos')

const hoy = new Date ("December 10, 2022")
console.log(hoy.getFullYear())
console.log(hoy.getMonth()+1)
console.log(hoy.getDay())
alert ("La fecha que realizaste tu compra es " + hoy);


//Stock
class Producto {
    constructor(nombre, precio, codigoBarra, peso, unidadPeso, vencimiento) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.codigoBarra = codigoBarra;
        this.peso = parseFloat(peso);
        this.unidadPeso = unidadPeso;
        this.vencimiento = vencimiento;
        this.vendido = false;
    }
    toString(){
        return this.nombre + "("  + this.precio.toFixed(2).toString() +")";
    }
    vender(){
        this.vendido = true;
    }
    sumarIVA(){
     this.precio = this.precio * 1.21;
     return this.precio;
    }
    getDescuento(porcentaje){
     return (this.precio * (porcentaje/100)).toFixed(2);
    }
}

let unProducto = new Producto("Base de maquillaje", "2000", "22333345677", "30", "Ml", "01/01/2024");
let unProducto1 = new Producto("Labial", "1500", "976533347", "40", "gr", "01/01/2024");
let unProducto2 = new Producto("Sombras", "3000", "98888347", "100", "gr", "01/01/2024");
let unProducto3 = new Producto("Polvo", "1000", "9787652", "50", "gr", "01/01/2024");
console.log("-->Los valores del objeto son", unProducto);
console.log("-->Los valores del objeto son", unProducto1);
console.log("-->Los valores del objeto son", unProducto2);
console.log("-->Los valores del objeto son", unProducto3);



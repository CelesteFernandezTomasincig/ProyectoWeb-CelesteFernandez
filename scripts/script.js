let nombreUsuario = prompt("Hola! ingresa el nombre de usuario");
let apellidoUsuario = prompt("Y ahora... tu apellido de usuario");

if (nombreUsuario == ""){
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado" + nombreUsuario);
}
if (apellidoUsuario == ""){
    alert("No ingresaste el apellidp de usuario");
}
else {
    alert("Apellido del usuario ingresado" + apellidoUsuario);
}

alert("Te damos la bienvenida " + " " + nombreUsuario + " " + apellidoUsuario + " " + "a nuestra marca Valentino")

let avisos = prompt("¿Te gustaría recibir informacion de VALENTINO?")

if (avisos.toLocaleUpperCase() == "Si".toLocaleUpperCase()) {
    alert("Que bueno <3, dejanos tu mail o completa la ficha de contacto para que podamos estar en contacto");
} else if ( avisos == "No") {
    alert("Que lastima </3, ojala sea la proxima!")
}else {
    alert("Disulpa, debes completar con Si o No")
}

let intereses = prompt("Cuales son tus productos de interes? Ingresa el numero que corresponde a tada item :" + "\n" + "1)Rostro" + "\n" + "2) Ojos" + "\n" + "3) Labios" + "\n" + "4) Todos" );

if (intereses == "1" || intereses.toLowerCase() == "Rostro") {console.log ("Que bueno! Nuestras bases son las mejores");
alert("Que bueno! Nuestras bases son las mejores")} else if ( intereses == "2" || intereses.toLowerCase() == "ojos") { console.log ("Nuestras sombras son las mas pigmentadas!"); alert ("Nuestras sombras son las mas pigmentadas!")}
else if ( intereses == "3" || intereses.toLowerCase() == "labios") { console.log ("Nuestros labiales son los mas hidratantes de todos")
alert ("Nuestros labiales son los mas hidratantes de todos")} else if (intereses == "4" || intereses.toLowerCase() == "A nosotros tambien nos encantan todos! podes verlos en nuestro sitio") {
    console.log("A nosotros tambien nos encantan todos! podes verlos en nuestro sitio"); alert ("A nosotros tambien nos encantan todos! podes verlos en nuestro sitio")
} 

var cantidad,precio,desc,compra,pagar;

	precio = parseFloat(prompt("Como en Valentino estamos de festejo, queríamos comentarte que solo por los proximos 10 días vamos a tener un 15%off en toda la tienda, solo en tu primera compra de tu primer producto Valentino (podes comprar mas de un mismo producto que se te aplica el descuento). Indica el precio del producto que queres comprar y nosotros te calculamos el descuento! "));
	cantidad = parseFloat(prompt("¿Cuantos vas a llevar?"));

	compra = precio*cantidad;
	desc = compra*0.15;
	pagar = compra-desc;

    if (pagar >= 0) {
        alert("Muchas gracias " + " " + nombreUsuario + " Tu compra se finalizo con exito. Tu total es " + (parseInt(compra) - parseInt(desc)));
}
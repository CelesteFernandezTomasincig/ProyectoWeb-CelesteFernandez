
//
let countries = ["Argentina", "Bolivia", "Chile", "Uruguay", "Otro"];
let selectPaises = document.getElementById("paises");
for (const unPais of countries) {
    let option = document.createElement("option");
    option.innerHTML = unPais;
    selectPaises.appendChild(option);
}


let btn = document.getElementById("enviarButton");
btn.addEventListener("click", () => {alert("Tu formulario fue enviado correctamente"
)})
let btn1 = document.getElementById("enviarButton");
btn.addEventListener("click", () => {
    const hoy = new Date ()
    console.log(hoy.getFullYear())
    console.log(hoy.getMonth()+1)
    console.log(hoy.getDay())
    alert("La fecha que realizaste tu compra es" + hoy);
    }
)



 //Input 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let numero = document.getElementById("numero");
let mail = document.getElementById("mail");
let texto = document.getElementById("texto");


//Summary
let nombreSummary = document.getElementById("nombreSummary");
let apellidoSummary = document.getElementById("apellidoSummary");
let numeroSummary = document.getElementById("numeroSummary");
let mailSummary = document.getElementById("mailSummary");
let textoSummary = document.getElementById("textoSummary");



nombre.addEventListener("change", (event) => {
    console.log("--> Evento change en el input nombre. ", event.target.value);
    nombreSummary.innerHTML = event.target.value;
})
apellido.addEventListener("change", (event) => {
    console.log("--> Evento change en el input apellido. ", event.target.value);
    apellidoSummary.innerHTML = event.target.value;
})
numero.addEventListener("change", (event) => {
    console.log("--> Evento change en el input numero. ", event.target.value);
    numeroSummary.innerHTML = event.target.value;
})
mail.addEventListener("change", (event) => {
    console.log("--> Evento change en el input mail. ", event.target.value);
    mailSummary.innerHTML = event.target.value;
})
texto.addEventListener("change", (event) => {
    console.log("--> Evento change en el input texto. ", event.target.value);
})







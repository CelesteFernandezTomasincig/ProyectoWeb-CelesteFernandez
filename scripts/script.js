
//stock

// rostro

let maquillajeRostro = [
    { id: 1, name: "BaseLik-id", cantidad: "10" },
    { id: 2, name: "BaseCompact", cantidad: "25" },
    { id: 3, name: "RuborRose", cantidad: "5" },
    { id: 4, name: "IluminadorHigh", cantidad: "27" },
];

let formaArray1 = JSON.stringify(maquillajeRostro);
localStorage.setItem("maquillaje rostro", formaArray1);

let recuperado1 = localStorage.getItem("maquillaje");
console.log("--> Maquillaje recuperado", {
    resultado: recuperado1
});

let revertido1 = JSON.parse(recuperado1);
console.table(revertido1);


// labios 

let maquillajeLabio = [
    { id: 1, name: "LABIAL MINIROSSO", cantidad: "20" },
    { id: 2, name: "Labial Living Rude", cantidad: "17" },
];

let formaArray2 = JSON.stringify(maquillajeLabio);
localStorage.setItem("maquillaje labios", formaArray2);

let recuperado2 = localStorage.getItem("maquillaje");
console.log("--> Maquillaje recuperado", {
    resultado: recuperado2
});

let revertido2 = JSON.parse(recuperado2);
console.table(revertido2);

//ojos

let maquillajeOjos = [
    { id: 1, name: "Pigmento Rosegold", cantidad: "14" },
    { id: 2, name: "Mascara de pestañas", cantidad: "8" },
    { id: 3, name: "Palea de sombras", cantidad: "5" },
];

let formaArray3 = JSON.stringify(maquillajeOjos);
localStorage.setItem("maquillaje ojos", formaArray3);

let recuperado3 = localStorage.getItem("maquillaje");
console.log("--> Maquillaje recuperado", {
    resultado: recuperado3
});

let revertido3 = JSON.parse(recuperado1);
console.table(revertido3);

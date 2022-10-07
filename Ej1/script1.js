
/*function botonCambio(){
    let bg = document.getElementById("contenedor").style.background = "red";
}*/

let fondoColor = ["red", "violet", "blue", "fuchsia", "turquoise"];
let botonColor = ["orange", "white", "green", "gray", "pink"];

function botonCambio(){
    let random = Math.floor(Math.random() * fondoColor.length);
    let random2 = Math.floor(Math.random() * botonColor.length);
    console.log("Random value:" + random);
    console.log("Random2 value:" + random2);
    let x = document.getElementById("boton-color").style.background = fondoColor[random];
    let y= document.getElementById("boton-color").style.color = botonColor[random2];
    let z= document.getElementById("contenedor").style.background = botonColor[random2];



}
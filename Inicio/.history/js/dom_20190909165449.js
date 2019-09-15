//DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color;
}

//Consegir elementos con un id concreto

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

caja.innerHTML = "!TEXTO EN LA CAJA DESDE JS!";

caja.style.background = '#f00';



//Consegir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div');

var contenidoEnTexto = todosLosDiv[2].textContent;

console.log(contenidoEnTexto);


//Consegir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');

console.log(divsRojos);
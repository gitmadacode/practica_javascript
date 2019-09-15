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

todosLosDiv[2].textContent;

console.log(todosLosDiv);


//Consegir elementos por su clase
